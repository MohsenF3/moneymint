import { NavLinkProps } from "@/app/lib/defenition";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ path, name, handleMenue }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      onClick={handleMenue}
      href={path}
      className={`text-lg hover:bg-white rounded-full hover:text-neutral py-3 px-7 lg:px-4 duration-100 font-semibold ${
        pathname === path ? "bg-white text-neutral" : ""
      }`}
    >
      {name}
    </Link>
  );
}
