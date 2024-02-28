"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { ContactSectionProps } from "@/app/lib/definition";

export const ContactSection = ({ info }: { info: ContactSectionProps }) => {
  return (
    <div className="z-50 flex flex-col items-center">
      <div className="relative w-full isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible rounded-l-full w-[30rem] bg-gradient-conic from-info via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-base-100 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] rounded-r-full bg-gradient-conic from-transparent via-transparent to-info [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-[100%] right-0 bg-base-100 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="z-10 mt-[3rem] text-white light-white text-center text-3xl font-medium tracking-tight  md:text-5xl"
        dangerouslySetInnerHTML={{ __html: info.title }}
      />
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-[2rem] z-10"
      >
        <ContactForm info={info.form} />
      </motion.div>
    </div>
  );
};
