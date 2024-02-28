import { NavLinkProps } from "@/app/lib/definition";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink";

export default function NavLink({
  path,
  name,
  lang,
  handleMenu: handleMenu,
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <CustomLink
      href={path}
      lang={lang}
      onClick={handleMenu}
      className={`text-lg hover:bg-white rounded-full hover:text-neutral py-3 px-7 lg:px-4 duration-100 font-semibold links ${
        pathname === path || (lang === "fa" && pathname === `/fa${path}`)
          ? "bg-white text-neutral navlink"
          : ""
      }`}
    >
      {name}
    </CustomLink>
  );
}
