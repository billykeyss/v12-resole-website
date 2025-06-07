"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button, useTheme } from "@mui/material";
import { RocketLaunch } from "@mui/icons-material";
import { useEffect, useState } from "react";

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 100,
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<RocketLaunch />}
            sx={{
              background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              color: "#FFFFFF",
              fontWeight: 700,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              boxShadow: isDark
                ? "0 8px 32px rgba(59, 130, 246, 0.6)"
                : "0 8px 32px rgba(59, 130, 246, 0.3)",
              "&:hover": {
                transform: "scale(1.05) translateY(-2px)",
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                boxShadow: isDark
                  ? "0 12px 40px rgba(59, 130, 246, 0.7)"
                  : "0 12px 40px rgba(59, 130, 246, 0.4)",
              },
            }}
          >
            START YOUR RESOLE
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
