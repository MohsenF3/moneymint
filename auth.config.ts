import type { NextAuthConfig } from "next-auth";
import { connectToDb } from "./app/lib/utils";
import { User } from "./app/lib/models";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
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

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      const user = auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith("/login");
      const isOnRegister = nextUrl.pathname.startsWith("/register");
      const isOnBlog = nextUrl.pathname.startsWith("/blog");
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");

      if (isOnAdmin && !user?.isAdmin) {
        return false;
      }

      if (isOnBlog && !user) {
        return false;
      }

      if ((isOnLogin && user) || (isOnRegister && user)) {
        return Response.redirect(new URL("/", nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
