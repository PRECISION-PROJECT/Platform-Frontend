"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
