import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import { User as UserType } from "./app/lib/definition";
import { User } from "./app/lib/models";
import bcrypt from "bcrypt";
import { connectToDb } from "./app/lib/utils";

async function getUser(username: string): Promise<UserType | undefined> {
  try {
    connectToDb();
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.error("Failed to fetch user at auth.ts");
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      async authorize(credentials) {
        const { username, password } = credentials;

        const user = await getUser(username as string);
        if (!user) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(
          password as string,
          user.password
        );

        if (passwordsMatch) return user;

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = new User({
              username: profile?.name,
              email: profile?.email,
              img: profile?.picture,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(
            "this is error from auth.config.ts in signIn callback for google",
            error
          );
          return false;
        }
      }

      if (account?.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              img: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(
            "this is error from auth.config.ts in signIn callback for github",
            error
          );
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (user && account?.provider !== "credentials") {
        connectToDb();
        const userFromdb = await User.findOne({ email: profile?.email });
        token.isAdmin = userFromdb.isAdmin;
        token.id = userFromdb.id;
      }

      if (user && account?.provider === "credentials") {
        token.name = user._doc?.username;
        token.email = user._doc?.email;
        token.isAdmin = user._doc?.isAdmin;
        token.id = user.id;
      }

      return token;
    },
    ...authConfig.callbacks,
  },
});
