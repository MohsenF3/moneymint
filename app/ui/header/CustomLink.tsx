import { i18n } from "@/i18n.config";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
}
export default function CustomLink({ href, lang, ...props }: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props} />;
}
