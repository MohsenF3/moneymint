import { Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const oswald = Oswald({ subsets: ["latin"] });
export const vazir = localFont({ src: "../../public/fonts/Vazir-Light.woff2" });
