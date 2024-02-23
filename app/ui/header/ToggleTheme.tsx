"use client";

import { ThemeContext, ThemeContextType } from "@/app/context/ThemeContext";
import React, { FormEvent, useContext, useEffect, useState } from "react";

export default function ToggleTheme() {
  const { changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme === "dark");
  }, []);

  const handleToggle = (e: FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    const newTheme = isChecked ? "dark" : "light";
    changeTheme(newTheme);
    setIsDark(isChecked);
  };

  return (
    <label className="cursor-pointer grid place-items-center rotate-90">
      <input
        type="checkbox"
        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        onChange={handleToggle}
        checked={isDark}
      />

      <svg
        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>

      <svg
        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    </label>
  );
}
