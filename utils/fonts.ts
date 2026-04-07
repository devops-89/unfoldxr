import localFont from "next/font/local";
import { Inter } from "next/font/google";
export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helvetica/Helvetica.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/helvetica/Helvetica-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/helvetica/helvetica_light.ttf",
      weight: "400",
    },
  ],
});

export const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
});

export const din = localFont({
  src: [
    {
      path: "../public/fonts/din/dinnextw1g_medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/din/dinnextw1g.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/din/dinnextw1g_bold.otf",
      weight: "900",
    },
  ],
});
