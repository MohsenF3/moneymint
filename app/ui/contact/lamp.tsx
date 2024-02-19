"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/cn";
import ContactForm from "./ContactForm";

export const Lamp = () => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col items-center justify-center bg-[#101010] w-full rounded-md z-0"
      )}
    >
      <div className="absolute top-0 z-50 flex  flex-col items-center px-5">
        <div className="relative w-full  isolate z-0 ">
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
            className="absolute inset-auto right-1/2 h-56 overflow-visible rounded-l-full w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute  w-[100%] left-0 bg-[#101010] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
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
            className="absolute inset-auto left-1/2 h-56 w-[30rem] rounded-r-full bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute  w-[100%] right-0 bg-[#101010] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
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
          className="z-10 mt-[3rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          Get in Touch <br /> Contact Us for More Information:
        </motion.h1>
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
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};
