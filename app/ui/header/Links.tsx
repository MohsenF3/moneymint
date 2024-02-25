"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { handleLogout } from "@/app/lib/actions";
import { Session } from "next-auth";
import { useOnClickOutside } from "@/app/lib/hooks";
import { Locale } from "@/i18n.config";

interface NavigationType {
  home: string;
  about: string;
  contact: string;
  blog: string;
  admin: string;
  login: string;
  logout: string;
}

export default function Links({
  session,
  navigation,
  lang,
}: {
  session: Session | null;
  navigation: NavigationType;
  lang: Locale;
}) {
  const { home, about, contact, blog, admin, login, logout } = navigation;
  const links = [
    { id: 1, name: home, path: `/${lang}` },
    { id: 2, name: about, path: `/${lang}/about` },
    { id: 3, name: contact, path: `/${lang}/contact` },
    { id: 4, name: blog, path: `/${lang}/blog` },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(true);
  };

  useOnClickOutside(ref, onClose);

  return (
    <div>
      {/* overlay */}
      <div
        className={`lg:hidden absolute  top-0 bottom-0 left-0 w-[40%]  bg-[rgba(0,0,0,0.4)] bg-opacity-30 ${
          isOpen ? "opacity-0 duration-100" : "opacity-100 duration-100"
        }`}
      />
      <nav
        ref={ref}
        className={`fixed lg:relative top-0  max-lg:glass  max-lg:h-screen max-lg:w-[60%] z-20 ${
          isOpen
            ? "max-lg:-right-full max-lg:duration-100"
            : "max-lg:right-0 max-lg:duration-100"
        }`}
      >
        <ul className="max-lg:self-start w-full flex flex-col lg:flex-row lg:items-center max-lg:p-5 lg:gap-2 gap-6">
          {/* close sidebar menu btn */}
          <button
            className="btn text-white light-white self-end lg:hidden"
            onClick={handleMenu}
          >
            <IoClose size={30} />
          </button>

          {lang === "fa" && window.innerWidth >= 1024
            ? links
                .slice()
                .reverse()
                .map((link) => (
                  <li key={link.id}>
                    <NavLink {...link} handleMenu={handleMenu} />
                  </li>
                ))
            : links.map((link) => (
                <li key={link.id}>
                  <NavLink {...link} handleMenu={handleMenu} />
                </li>
              ))}

          {session?.user ? (
            <>
              {session.user?.isAdmin ? (
                <li className="pr-2">
                  <NavLink
                    path={`/${lang}/admin`}
                    name={admin}
                    handleMenu={handleMenu}
                  />
                </li>
              ) : null}
              <LogoutBtn logout={logout} />
            </>
          ) : (
            <li>
              <Link
                href={`/${lang}/login`}
                onClick={handleMenu}
                className="btn btn-info text-white  ml-5"
              >
                {login}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* open sidebar menu btn */}

      <button
        className="btn text-white light-white lg:hidden"
        onClick={handleMenu}
      >
        <AiOutlineMenu size={40} />
      </button>
    </div>
  );
}

function LogoutBtn({ logout }: { logout: string }) {
  return (
    <form action={handleLogout}>
      <button className="btn btn-error text-white  ml-5 hover:scale-95 transition">
        {logout}
      </button>
    </form>
  );
}
