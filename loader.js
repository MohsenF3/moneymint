"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://thumbs.wbm.im")) return src;
  return `https://moneymintt.netlify.app/${src}?w=${width}&q=${quality || 75}`;
}
