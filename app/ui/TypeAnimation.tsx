"use client";
import Typewriter from "typewriter-effect";

export default function TypeAnimation() {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Lucrative")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Quick")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Money-Making")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }}
    />
  );
}
