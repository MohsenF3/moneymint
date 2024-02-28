"use client";

import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

export default function ClientThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div data-theme={theme} className="w-full h-full relative overflow-hidden">
      {children}
    </div>
  );
}
