import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;

      return isAuthenticated;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
