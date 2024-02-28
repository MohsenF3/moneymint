"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { oswald } from "../fonts";

export const TextGenerateEffect = ({ title }: { title: string }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = title.split(" ");
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

  return (
    <motion.div
      ref={scope}
      className={`mx-auto mb-5 max-w-6xl z-10  ${oswald.className}`}
    >
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="text-white light-white font-bold opacity-0 text-4xl lg:text-5xl leading-snug tracking-wide"
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
