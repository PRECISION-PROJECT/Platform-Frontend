"use client";
import React, { type PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";
import KBar from "@/components/shared/kbar";

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
    </KBar>
  );
};

export default MainLayout;
