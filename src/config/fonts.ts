import localFont from 'next/font/local';

export const fontSpring = localFont({
  src: [
    {
      path: "../assets/fonts/Fontspring-DEMO-span-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-thinitalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/Fontspring-DEMO-span-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-spring",
  display: "swap",
  preload: true,
});
