import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/i18n.config";

const { auth } = NextAuth(authConfig);

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export default auth((req) => {
  const { nextUrl, auth } = req;
  const pathname = nextUrl.pathname;
  const segments = pathname.split("/")[1];
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url
      )
    );
  }

  // auth

  const user = auth?.user;
  const isOnLogin = pathname.startsWith(`/${segments}/login`);
  const isOnRegister = pathname.startsWith(`/${segments}/register`);
  const isOnBlog = pathname.startsWith(`/${segments}/blog`);
  const isOnAdmin = pathname.startsWith(`/${segments}/admin`);

  if (isOnAdmin && !user?.isAdmin) {
    return Response.redirect(new URL(`/${segments}`, nextUrl));
  }

  if (isOnBlog && !user) {
    return Response.redirect(new URL(`/${segments}/login`, nextUrl));
  }

  if ((isOnLogin && user) || (isOnRegister && user)) {
    return Response.redirect(new URL(`/${segments}`, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
