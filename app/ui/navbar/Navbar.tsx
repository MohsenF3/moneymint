import Image from "next/image";
import Links from "./Links";

export default async function Navbar() {
  return (
    <nav className="navbar px-0">
      <div className="flex-1">
        <Image src="/icon.svg" alt="logo" width={200} height={50} />
      </div>

      <Links />
    </nav>
  );
}
