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

    authorized({ auth, request: { nextUrl } }) {
      const user = auth?.user;
      const isFaLang = nextUrl.pathname.split("/")[1] === "fa";
      const path = isFaLang ? "/fa/" : "/";

      const isOnLogin = nextUrl.pathname.startsWith(`${path}login`);
      const isOnRegister = nextUrl.pathname.startsWith(`${path}register`);
      const isOnBlog =
        nextUrl.pathname.startsWith(`${path}blog`) ||
        nextUrl.pathname.startsWith("/en/blog");
      const isOnAdmin = nextUrl.pathname.startsWith(`${path}admin`);

      if (isOnAdmin && !user?.isAdmin) {
        return Response.redirect(new URL(`${path}`, nextUrl));
      }

      if (isOnBlog && !user) {
        return Response.redirect(new URL(`${path}login`, nextUrl));
      }

      if ((isOnLogin && user) || (isOnRegister && user)) {
        return Response.redirect(new URL(`${path}`, nextUrl));
      }
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
