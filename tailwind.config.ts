import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#101010",
          accent: "#008475",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#F8FAE5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
