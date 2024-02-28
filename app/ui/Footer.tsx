import { Locale } from "@/i18n.config";
import React from "react";
import { getDictionary } from "../lib/dictionary";

export default async function Footer({ lang }: { lang: Locale }) {
  const { Footer } = await getDictionary(lang);
  return (
    <footer className="flex items-center justify-between w-full z-10">
      <h3 className="font-bold">{Footer.title}</h3>
      <div className="font-bold">{Footer.copyright}</div>
    </footer>
  );
}
