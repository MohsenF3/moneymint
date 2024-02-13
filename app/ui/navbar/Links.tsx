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
    <ul className="flex flex-col lg:flex-row items-start lg:items-center max-lg:p-5 gap-6 lg:gap-2">
      {handleMenue && (
        <button
          className="flex items-center justify-end mb-10 p-2 w-full"
          onClick={handleMenue}
        >
          <IoClose size={40} />
        </button>
      )}
      {links.map((link) => (
        <li key={link.id}>
          <Link
            onClick={handleMenue}
            href={link.path}
            className={`text-lg hover:bg-white rounded-full hover:text-neutral py-3 px-7 lg:px-4 duration-100 font-semibold ${
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
                href="/admin"
                onClick={handleMenue}
                className={`text-lg hover:bg-white rounded-full hover:text-neutral py-3 px-7 lg:px-4 duration-100 font-semibold ${
                  pathname === "/admin" ? "bg-white text-neutral" : ""
                }`}
              >
                Admin
              </Link>
            </li>
          ) : null}
          <button className="btn glass bg-red-500 text-white hover:bg-red-600 ml-5 hover:scale-95 transition">
            Logout
          </button>
        </>
      ) : (
        <li>
          <Link href="/login" onClick={handleMenue} className="btn btn-info">
            Login
          </Link>
        </li>
      )}
    </ul>
  );
}
