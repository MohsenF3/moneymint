import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { User as UserType } from "./app/lib/definition";

declare module "next-auth" {
  interface User {
    _doc?: UserType;
  }

  interface Session {
    user: {
      user: User;
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin?: boolean;
    id?: string;
  }
}
