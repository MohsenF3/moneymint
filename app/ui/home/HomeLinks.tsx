"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Locale } from "@/i18n.config";

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
      <Link href={`/${lang}/about`} className="btn btn-accent mr-3">
        {buttons.aboutBtn}
      </Link>
      <Link href={`/${lang}/contact`} className="btn btn-outline">
        {buttons.contactBtn}
      </Link>
    </motion.div>
  );
}
