"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { handleLogout } from "@/app/lib/actions";
import { Session } from "next-auth";

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Blog", path: "/blog" },
];

export default function Links({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`fixed lg:relative top-0 max-lg:glass max-lg:h-screen max-lg:w-[60%] z-20 ${
          isOpen
            ? "max-lg:-right-full max-lg:duration-100"
            : "max-lg:right-0 max-lg:duration-100"
        }`}
      >
        <ul className="max-lg:self-start w-full flex flex-col lg:flex-row lg:items-center max-lg:p-5 lg:gap-2 gap-6">
          {/* close sidebar menu btn */}
          <button className="btn self-end lg:hidden" onClick={handleMenue}>
            <IoClose size={30} />
          </button>

          {links.map((link) => (
            <li key={link.id}>
              <NavLink {...link} handleMenue={handleMenue} />
            </li>
          ))}

          {session?.user ? (
            <>
              {session.user?.isAdmin ? (
                <li className="pr-2">
                  <NavLink
                    path="/admin"
                    name="Admin"
                    handleMenue={handleMenue}
                  />
                </li>
              ) : null}
              <LogoutBtn />
            </>
          ) : (
            <li>
              <Link
                href="/login"
                onClick={handleMenue}
                className="btn btn-secondary ml-5"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* open sidebar menu btn */}

      <button className="btn lg:hidden" onClick={handleMenue}>
        <AiOutlineMenu size={40} />
      </button>
    </div>
  );
}

function LogoutBtn() {
  return (
    <form action={handleLogout}>
      <button className="btn btn-error text-white  ml-5 hover:scale-95 transition">
        Logout
      </button>
    </form>
  );
}
