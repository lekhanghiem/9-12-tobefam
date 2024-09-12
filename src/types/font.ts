import { Lexend, Poppins, Roboto, Orbitron } from "next/font/google";

export const lexend = Lexend({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
