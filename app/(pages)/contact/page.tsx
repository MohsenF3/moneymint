import { ContactSection } from "@/app/ui/contact/ContactSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Contact ",
  description: " Contact MoneyMint for any questions or concerns.",
};

export default function Contact() {
  return <ContactSection />;
}
