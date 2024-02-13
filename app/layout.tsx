import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} `}>
        <div className="flex flex-col justify-between h-screen w-full container mx-auto py-5 max-lg:px-3 overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
