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
        <Image
          src="/icon.svg"
          alt="logo"
          width={200}
          height={50}
          className="logo"
          priority
        />
        <LangSwitcher lang={lang} />
      </div>

      <div className="flex items-center">
        <NavLinks session={session} navigation={Navigation} lang={lang} />
        <ToggleTheme />
      </div>
    </header>
  );
}
