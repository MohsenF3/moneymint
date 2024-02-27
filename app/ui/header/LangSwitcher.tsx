"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";

import { useState } from "react";
import { i18n } from "@/i18n.config";

export default function LangSwitcher({ lang }: { lang: string }) {
  const [openBox, setOpenBox] = useState(false);
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  const toggleBox = () => setOpenBox(!openBox);
  const closeBox = () => setOpenBox(false);

  return (
    <div className="relative">
      <button className="flex items-center gap-2" onClick={toggleBox}>
        <span>{lang ? "Fa" : "En"}</span>
        <FaAngleDown />
      </button>
      <div
        className={`absolute right-0 w-16 bg-base-100 shadow-xl ${
          openBox
            ? "top-full opacity-100 duration-150"
            : "bottom-full opacity-0 duration-150"
        }`}
      >
        <Link
          href={redirectedPathName("en")}
          className="btn w-full text-start rounded-t rounded-b-none"
          onClick={closeBox}
        >
          En
        </Link>
        <Link
          href={redirectedPathName("fa")}
          className="btn w-full text-start rounded-b rounded-t-none"
          onClick={closeBox}
        >
          Fa
        </Link>
      </div>
    </div>
  );
}
