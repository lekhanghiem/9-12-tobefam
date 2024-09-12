"use client";

import { motion } from "framer-motion";
import { motionProps } from "@/types/types";

const FlipAnimationX = ({
  children,
  className,
  initial = { opacity: 0, rotateX: 180 },
  animate = { opacity: 1, rotateX: 0 },
  transition = { duration: 1 }
}: motionProps & {
  initial?: object;
  animate?: object;
  transition?: object;
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      transition={transition}
      style={{ perspective: "1000px" }} // Add perspective to enhance 3D effect
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d", // Ensure 3D transformations are applied
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlipAnimationX;
