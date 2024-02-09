import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Blog", path: "/blog" },
];

export default function Links({ handleMenue }: { handleMenue?: () => void }) {
  const pathname = usePathname();
  let isLogin = true;
  let isAdmin = true;
  return (
    <ul className="menu lg:menu-horizontal pt-5">
      {handleMenue && (
        <button
          className="flex items-center justify-end mb-10 pr-2"
          onClick={handleMenue}
        >
          <IoClose size={40} />
        </button>
      )}
      {links.map((link) => (
        <li key={link.id} className="px-1 ">
          <Link
            onClick={handleMenue}
            href={link.path}
            className={`text-lg hover:bg-white rounded-full hover:text-neutral max-lg:mb-2 ${
              pathname === link.path ? "bg-white text-neutral" : ""
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
      {isLogin ? (
        <>
          {isAdmin ? (
            <li className="pr-2">
              <Link
                href="/dashboard"
                onClick={handleMenue}
                className="text-lg hover:bg-white rounded-full hover:text-neutral max-lg:mb-2"
              >
                Admin
              </Link>
            </li>
          ) : null}
          <button className="btn glass bg-red-500 text-white hover:bg-red-600 hover:scale-95 transition">
            Logout
          </button>
        </>
      ) : (
        <li>
          <Link
            href="/login"
            onClick={handleMenue}
            className="text-lg hover:bg-white rounded-full hover:text-neutral"
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  );
}
