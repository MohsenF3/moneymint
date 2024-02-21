"use client";

import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/home/text-generate-effect";

export default function Home() {
  const noise = createNoise3D();

  // this is the background color

  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(10px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(10px)`;
    };
    render();
  };

  const waveColors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
  const drawWave = (n: number) => {
    nt += 0.002;
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle =
      localStorage.getItem("theme") === "dark" ? "#101010" : "#F8FAE5";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* wavy background */}

      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>

      <div className="w-full h-full flex flex-col text-center items-center justify-center">
        {/* title with animation*/}

        <TextGenerateEffect />

        {/* buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.2 }}
          className="z-10"
        >
          <Link href="/about" className="btn btn-accent mr-3">
            About Us
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact
          </Link>
        </motion.div>
      </div>
    </>
  );
}
