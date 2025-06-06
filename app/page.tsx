"use client";

import {
  Typography,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";

// Import all the new section components
import ModernNavigation from "../components/ui/ModernNavigation";
import FloatingCTA from "../components/ui/FloatingCTA";
import HeroSection from "../components/sections/HeroSection";
import OurWorkSection from "../components/sections/OurWorkSection";
import ValuesSection from "../components/sections/ValuesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import ServicesSection from "../components/sections/ServicesSection";
import LocationsSection from "../components/sections/LocationsSection";
import InstagramSection from "../components/sections/InstagramSection";
import FAQSection from "../components/sections/FAQSection";

// Modern SaaS-inspired theme with dark mode support
const createModernTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#3B82F6", // Modern blue
        light: "#60A5FA",
        dark: "#2563EB",
      },
      secondary: {
        main: "#8B5CF6", // Modern purple
        light: "#A78BFA",
        dark: "#7C3AED",
      },
      background: {
        default: darkMode ? "#1A202C" : "#FFFFFF",
        paper: darkMode ? "#2D3748" : "#FFFFFF",
      },
      text: {
        primary: darkMode ? "#F7FAFC" : "#0F172A",
        secondary: darkMode ? "#E2E8F0" : "#64748B",
      },
      divider: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
      grey: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#2D3748",
        900: "#1A202C",
      },
    },
    typography: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: "3.5rem",
        letterSpacing: "-0.025em",
        lineHeight: 1.1,
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 600,
        fontSize: "2rem",
        letterSpacing: "-0.015em",
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        letterSpacing: "-0.01em",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.25rem",
        letterSpacing: "-0.005em",
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
        letterSpacing: "0em",
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.7,
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
        fontWeight: 400,
      },
      button: {
        fontWeight: 600,
        letterSpacing: "0.025em",
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
            letterSpacing: "0.01em",
            padding: "12px 24px",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "none",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: darkMode
                ? "0 10px 25px rgba(59, 130, 246, 0.3)"
                : "0 10px 25px rgba(59, 130, 246, 0.2)",
            },
          },
          contained: {
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
            color: "#FFFFFF",
            "&:hover": {
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
            },
          },
          outlined: {
            borderWidth: "1.5px",
            "&:hover": {
              borderWidth: "1.5px",
              backgroundColor: darkMode
                ? "rgba(59, 130, 246, 0.1)"
                : "rgba(59, 130, 246, 0.05)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${
              darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.08)"
            }`,
            boxShadow: darkMode
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            backgroundColor: darkMode ? "#2D3748" : "#FFFFFF",
            "&:hover": {
              transform: "translateY(-4px)",
              borderColor: darkMode
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(59, 130, 246, 0.2)",
              boxShadow: darkMode
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: `1px solid ${
              darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.08)"
            }`,
            boxShadow: "none",
            backgroundColor: darkMode ? "#2D3748" : "#FFFFFF",
            "&:before": {
              display: "none",
            },
            "&:not(:last-child)": {
              marginBottom: 8,
            },
          },
        },
      },
    },
  });

export default function V12ResoleDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createModernTheme(darkMode), [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Modern gradient background */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: darkMode
              ? "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
              : "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
            zIndex: -1,
          }}
        />

        {/* Modern Navigation */}
        <ModernNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Modern Announcement Banner */}
        <Box
          sx={{
            position: "fixed",
            top: 64,
            left: 0,
            width: "100%",
            zIndex: 40,
            background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
            color: "#FFFFFF",
            py: 1,
            px: 2,
          }}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: "0.875rem",
                }}
              >
                🎉 Limited Time: Get 20% off your first resole with code CLIMB20
              </Typography>
            </Container>
          </motion.div>
        </Box>

        {/* Floating CTA - Updated for dark mode */}
        <FloatingCTA />

        {/* Main Content with proper spacing for fixed navigation */}
        <Box sx={{ pt: "104px" }}>
          <HeroSection />
          <OurWorkSection />
          <ValuesSection />
          <HowItWorksSection />
          <ServicesSection />
          <LocationsSection />
          <InstagramSection />
          <FAQSection />

          {/* Modern Footer */}
          <Box
            component="footer"
            sx={{
              background: darkMode
                ? "linear-gradient(135deg, #2D3748 0%, #1A202C 100%)"
                : "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
              py: 6,
              borderTop: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Container maxWidth="lg" sx={{ px: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  V12 Resole
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: { xs: "center", md: "right" },
                  }}
                >
                  &copy; 2024 V12 Resole. Crafted with precision for climbers.
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
