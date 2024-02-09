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
        mytheme: {
          primary: "#b900ff",
          secondary: "#008475",
          accent: "#00c500",
          neutral: "#032617",
          "base-100": "#292929",
          info: "#00e5ff",
          success: "#00c491",
          warning: "#bf6f00",
          error: "#ff8d9c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
