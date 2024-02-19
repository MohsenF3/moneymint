"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutTitle() {
  return (
    <motion.h3
      initial={{ y: "-6rem", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-5xl font-bold"
    >
      No More Time Wasted!
    </motion.h3>
  );
}
