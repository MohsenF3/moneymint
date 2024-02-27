"use client";

import React from "react";
import { motion } from "framer-motion";
import { Locale } from "@/i18n.config";
import CustomLink from "../header/CustomLink";

export default function HomeLinks({
  buttons,
  lang,
}: {
  buttons: { aboutBtn: string; contactBtn: string };
  lang: Locale;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5.2 }}
      className="z-10"
    >
      <CustomLink href="/about" lang={lang} className="btn btn-accent mr-3">
        {buttons.aboutBtn}
      </CustomLink>
      <CustomLink href="/contact" lang={lang} className="btn btn-outline">
        {buttons.contactBtn}
      </CustomLink>
    </motion.div>
  );
}
