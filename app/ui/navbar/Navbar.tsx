"use client";

import Image from "next/image";
import React, { useState } from "react";
import Links from "./Links";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar px-0">
      <div className="flex-1">
        <Image src="/icon.svg" alt="logo" width={200} height={50} />
      </div>

      <div className="flex-none lg:block hidden">
        <Links />
      </div>

      <button className="btn lg:hidden " onClick={handleMenue}>
        <AiOutlineMenu size={30} />
      </button>

      <div
        className={`lg:hidden block fixed  top-0 h-screen w-[50%] bg-neutral z-10  ${
          isOpen ? "right-0 duration-500" : "right-[-100%] duration-500"
        }`}
      >
        <Links handleMenue={handleMenue} />
      </div>
    </nav>
  );
}
