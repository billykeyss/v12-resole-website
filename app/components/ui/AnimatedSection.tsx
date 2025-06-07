"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  sx?: object;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  sx,
  id = "",
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{ ...sx }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
