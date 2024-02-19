"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/cn";
import Link from "next/link";
import { oswald } from "../fonts";

const words =
  "Welcome To Moneymint Where You Can Unlock Your Earning Potential";

export const TextGenerateEffect = () => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold")}>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`dark:text-white mb-5 max-w-6xl text-black text-4xl lg:text-5xl leading-snug tracking-wide ${oswald.className}`}
        >
          {renderWords()}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6 }}
          className="flex items-center gap-2"
        >
          <Link href="/about" className="btn btn-neutral">
            About Us
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline hover:border-neutral hover:bg-neutral hover:text-white"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
