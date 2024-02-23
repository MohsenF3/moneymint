import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import { User as UserType } from "./app/lib/defenition";
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
});
