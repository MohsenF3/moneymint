import { getDictionary } from "@/app/lib/dictionary";
import { ContactSection } from "@/app/ui/contact/ContactSection";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Contact ",
  description: " Contact MoneyMint for any questions or concerns.",
};

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { ContactPage } = await getDictionary(lang);

  return <ContactSection info={ContactPage} />;
}
