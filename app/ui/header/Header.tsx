import Image from "next/image";
import NavLinks from "./NavLinks";
import { auth } from "@/auth";
import ToggleTheme from "./ToggleTheme";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/app/lib/dictionary";
import LangSwitcher from "./LangSwitcher";

export default async function Header({ lang }: { lang: Locale }) {
  const session = await auth();
  const { Navigation } = await getDictionary(lang);

  return (
    <header className="w-full flex items-center justify-between z-20 ">
      <div className="flex items-center gap-5">
        <div className="relative sm:w-52 w-40 h-14">
          <Image
            src="/icon.svg"
            alt="logo"
            fill
            className="logo bg-contain"
            priority
          />
        </div>
        <LangSwitcher lang={lang} />
      </div>

      <div className="flex items-center">
        <NavLinks session={session} navigation={Navigation} lang={lang} />
        <ToggleTheme />
      </div>
    </header>
  );
}
