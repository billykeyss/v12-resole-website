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
import { useEffect, useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

const OurWorkSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
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
          <div
            style={{
              width: "100%",
              height: "500px",
              position: "relative",
              borderRadius: `${theme.shape.borderRadius}px`,
              overflow: "hidden",
              border: `2px solid ${theme.palette.primary.main}`,
              boxShadow: isDark
                ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                : "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
          >
            <Image
              src={slides[currentSlide]}
              alt={`Professional Resole ${currentSlide + 1}`}
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
                PROFESSIONAL RESOLE #{currentSlide + 1}
              </Typography>
            </Box>
          </div>

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
