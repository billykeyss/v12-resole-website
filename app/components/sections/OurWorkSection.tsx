"use client";

import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState, memo, useMemo, useCallback } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

// Memoized slides data
const SLIDES = [
  {
    src: "/tc_pro.jpg",
    alt: "TC Pro Resole - Professional climbing shoe resoling",
    title: "TC PRO RESOLE",
  },
  {
    src: "/evolv_elektra.jpg", // Fixed typo from .jpq
    alt: "Evolv Elektra Resole - Expert shoe repair",
    title: "EVOLV ELEKTRA RESOLE",
  },
  {
    src: "/lasportiva_solutions.jpg",
    alt: "La Sportiva Solutions Resole - Premium resoling service",
    title: "LA SPORTIVA SOLUTIONS RESOLE",
  },
] as const;

const OurWorkSection: React.FC = memo(() => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === SLIDES.length - 1 ? 0 : prevSlide + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSlideData = useMemo(() => SLIDES[currentSlide], [currentSlide]);

  return (
    <AnimatedSection
      id="our-work"
      sx={{
        py: SECTION_STYLES.PADDING,
        background: SECTION_STYLES.BACKGROUNDS.DEFAULT(isDark),
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_TITLE,
            ...TYPOGRAPHY_STYLES.GRADIENT_TEXT(isDark),
          }}
        >
          Our Work
        </Typography>

        <Box sx={{ position: "relative", maxWidth: "900px", mx: "auto" }}>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              border: `2px solid ${theme.palette.primary.main}`,
              boxShadow: isDark
                ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                : "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
          >
            <Image
              src={currentSlideData.src}
              alt={currentSlideData.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 900px"
              priority={currentSlide === 0} // Prioritize first image
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {currentSlideData.title}
              </Typography>
            </Box>
          </Box>

          {/* Enhanced Navigation */}
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: -20,
              transform: "translateY(-50%)",
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
              width: 50,
              height: 50,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "translateY(-50%) scale(1.05)",
              },
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: -20,
              transform: "translateY(-50%)",
              backgroundColor: theme.palette.primary.main,
              color: "#FFFFFF",
              width: 50,
              height: 50,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "translateY(-50%) scale(1.05)",
              },
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Slide Indicators */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 3,
            }}
          >
            {SLIDES.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentSlide
                      ? theme.palette.primary.main
                      : isDark
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
});

OurWorkSection.displayName = "OurWorkSection";

export default OurWorkSection;
