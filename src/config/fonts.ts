import localFont from 'next/font/local';

export const fontSpring = localFont({
  src: [
    {
      path: "../assets/fonts/FontSpring-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/FontSpring-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/FontSpring-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/FontSpring-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/FontSpring-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-spring",
  display: "swap",
  preload: true,
});
