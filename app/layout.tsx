import type { Metadata } from "next";
import "./ui/globals.css";
import Footer from "./ui/Footer";
import { Toaster } from "react-hot-toast";
import { inter } from "./ui/fonts";
import { ThemeProvider } from "./context/ThemeContext";
import ClientThemeWrapper from "./context/ClientThemeWrapper";
import Header from "./ui/header/Header";

export const metadata: Metadata = {
  title: {
    default: "MoneyMint Home Page",
    template: "MoneyMint %s Page",
  },
  description: " A decentralized financial system for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="flex flex-col items-center justify-between w-full min-h-screen container mx-auto py-5 max-md:px-3">
              <Header />
              <main className="w-full h-full">{children}</main>
              <Footer />
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
