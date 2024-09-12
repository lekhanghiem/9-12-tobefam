"use client";

import { motionProps } from "@/types/types";
import { motion } from "framer-motion";

const FlipAnimateCardsBox = ({ children, idx }: motionProps) => {
  const item = {
    hidden: { rotateY: 180, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      key={idx}
      variants={item}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FlipAnimateCardsBox;
