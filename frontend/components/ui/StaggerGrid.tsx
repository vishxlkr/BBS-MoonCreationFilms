"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
