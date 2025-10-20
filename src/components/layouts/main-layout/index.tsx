"use client";
import KBar from "@/components/shared/kbar";
import ScrollToTop from "@/components/shared/scroll-to-top";
import { motion } from "framer-motion";
import React, { type PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <KBar>
      <Header />
      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </KBar>
  );
};

export default MainLayout;
