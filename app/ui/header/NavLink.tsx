import { NavLinkProps } from "@/app/lib/definition";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ path, name, handleMenu: handleMenu }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      onClick={handleMenu}
      href={path}
      className={`text-lg hover:bg-white rounded-full hover:text-neutral py-3 px-7 lg:px-4 duration-100 font-semibold links ${
        pathname === path ? "bg-white text-neutral navlink" : ""
      }`}
    >
      {name}
    </Link>
  );
}
