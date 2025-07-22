import localFont from "next/font/local";
import { Manrope } from "next/font/google";

export const eUkraine = localFont({
  src: [
    {
      path: "./e-ukraine/e-ukraine-ultralight_w.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./e-ukraine/e-ukraine-regular_w.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./e-ukraine/e-ukraine-medium_w.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./e-ukraine/e-ukraine-bold_w.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-e-ukraine",
  display: "swap",
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
