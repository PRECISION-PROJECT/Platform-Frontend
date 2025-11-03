"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const authRoutes = [
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
  "/email-confirm",
];

export const useHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthRoute = authRoutes.includes(pathname);

  return {
    isScrolled,
    isMenuOpen,
    isAuthRoute,
    setIsMenuOpen,
  };
};
