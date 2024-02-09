import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoneyMint",
  description: " A decentralized financial system for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="flex flex-col justify-between h-screen w-full container mx-auto py-5 max-md:px-3">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
