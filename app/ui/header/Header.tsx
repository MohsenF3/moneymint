import Image from "next/image";
import Links from "./Links";
import { auth } from "@/auth";
import ToggleTheme from "./ToggleTheme";

export default async function Header() {
  const session = await auth();

  return (
    <header className="w-full flex items-center justify-between z-20 ">
      <Image
        src="/icon.svg"
        alt="logo"
        width={200}
        height={50}
        className="logo"
      />

      <div className="flex items-center">
        <Links session={session} />
        <ToggleTheme />
      </div>
    </header>
  );
}
