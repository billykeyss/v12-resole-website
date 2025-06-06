"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";

const OurWorkSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/tc_pro.jpg",
    "/evolv_elektra.jpq",
    "/lasportiva_solutions.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <AnimatedSection
      id="our-work"
      sx={{
        py: 8,
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ px: 3 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            mb: 6,
            color: "#2C3E50",
          }}
        >
          Our Work
        </Typography>

        <Box sx={{ position: "relative", maxWidth: "900px", mx: "auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                borderRadius: "0px",
                overflow: "hidden",
                border: "2px solid #2E5B31",
                boxShadow: "0 0 30px rgba(46, 91, 49, 0.2)",
              }}
            >
              <Image
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  p: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#2E5B31", fontWeight: 700 }}
                >
                  PROFESSIONAL RESOLE #{currentSlide + 1}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: -20,
              transform: "translateY(-50%)",
              backgroundColor: "#8B4513",
              color: "#FFFFFF",
              width: 50,
              height: 50,
              "&:hover": {
                backgroundColor: "#A0522D",
                transform: "translateY(-50%) scale(1.05)",
              },
            }}
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
              )
            }
          >
            <ChevronLeft sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: -20,
              transform: "translateY(-50%)",
              backgroundColor: "#8B4513",
              color: "#FFFFFF",
              width: 50,
              height: 50,
              "&:hover": {
                backgroundColor: "#A0522D",
                transform: "translateY(-50%) scale(1.05)",
              },
            }}
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
              )
            }
          >
            <ChevronRight sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default OurWorkSection;
