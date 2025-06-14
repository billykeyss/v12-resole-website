"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  sx?: object;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = memo(
  ({ children, sx, id = "" }) => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "-50px 0px",
      amount: 0.1,
    });

    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.3 },
        }}
        style={{
          ...sx,
          willChange: isInView ? "auto" : "transform, opacity",
        }}
      >
        {children}
      </motion.section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
