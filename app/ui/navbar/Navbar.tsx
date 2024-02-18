import Image from "next/image";
import Links from "./Links";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="navbar px-0">
      <div className="flex-1">
        <Image src="/icon.svg" alt="logo" width={200} height={50} />
      </div>

      <Links session={session} />
    </nav>
  );
}
