import type { Metadata } from "next";
import "../ui/globals.css";
import Footer from "../ui/Footer";
import { Toaster } from "react-hot-toast";
import { inter, vazir } from "../ui/fonts";
import { ThemeProvider } from "../context/ThemeContext";
import ClientThemeWrapper from "../context/ClientThemeWrapper";
import Header from "../ui/header/Header";
import { Locale, i18n } from "@/i18n.config";

export const metadata: Metadata = {
  title: {
    default: "MoneyMint Home Page",
    template: "MoneyMint %s Page",
  },
  description: " A decentralized financial system for everyone.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${
          params.lang === "fa" ? vazir.className : inter.className
        }`}
      >
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="flex flex-col justify-between w-full min-h-screen container mx-auto py-5 max-lg:px-3">
              <Header lang={params.lang} />
              <main className="w-full h-full">{children}</main>
              <Footer lang={params.lang} />
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
