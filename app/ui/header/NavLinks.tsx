"use client";

import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Session } from "next-auth";
import { useOnClickOutside } from "@/app/lib/hooks";
import { Locale } from "@/i18n.config";
import { NavigationType } from "@/app/lib/definition";
import { LogoutBtn, ToggleSidebarBtn } from "./Buttons";
import CustomLink from "./CustomLink";

export default function NavLinks({
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
    { id: 1, name: home, path: "/" },
    { id: 2, name: about, path: "/about" },
    { id: 3, name: contact, path: "/contact" },
    { id: 4, name: blog, path: "/blog" },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const ref = useRef(null);

  const handleMenu = () => setIsOpen(!isOpen);

  const onClose = () => setIsOpen(true);

  useOnClickOutside(ref, onClose);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
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
          <ToggleSidebarBtn
            handleMenu={handleMenu}
            Icon={IoClose}
            style="self-end"
          />

          {lang === "fa" && windowWidth >= 1024
            ? links
                .slice()
                .reverse()
                .map((link) => (
                  <li key={link.id}>
                    <NavLink {...link} lang={lang} handleMenu={handleMenu} />
                  </li>
                ))
            : links.map((link) => (
                <li key={link.id}>
                  <NavLink {...link} lang={lang} handleMenu={handleMenu} />
                </li>
              ))}

          {session?.user ? (
            <>
              {session.user?.isAdmin ? (
                <li className="pr-2">
                  <NavLink
                    path="/admin"
                    name={admin}
                    lang={lang}
                    handleMenu={handleMenu}
                  />
                </li>
              ) : null}
              <LogoutBtn logout={logout} />
            </>
          ) : (
            <li>
              <CustomLink
                href="/login"
                lang={lang}
                onClick={handleMenu}
                className="btn btn-info text-white  ml-5"
              >
                {login}
              </CustomLink>
            </li>
          )}
        </ul>
      </nav>

      {/* open sidebar menu btn */}
      <ToggleSidebarBtn handleMenu={handleMenu} Icon={AiOutlineMenu} />

      {/* overlay */}
      <div
        className={`lg:hidden absolute  top-0 bottom-0 left-0 w-[40%]  bg-[rgba(0,0,0,0.4)] bg-opacity-30 ${
          isOpen ? "opacity-0 duration-100" : "opacity-100 duration-100"
        }`}
      />
    </>
  );
}
