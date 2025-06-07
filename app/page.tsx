"use client";

import {
  Typography,
  Box,
  Container,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";

// Import the centralized theme
import { createModernTheme, SECTION_STYLES } from "./styles/theme";

// Import all the new section components
import ModernNavigation from "./components/ui/ModernNavigation";
import FloatingCTA from "./components/ui/FloatingCTA";
import HeroSection from "./components/sections/HeroSection";
import OurWorkSection from "./components/sections/OurWorkSection";
import ValuesSection from "./components/sections/ValuesSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import ServicesSection from "./components/sections/ServicesSection";
import InstagramSection from "./components/sections/InstagramSection";
import FAQSection from "./components/sections/FAQSection";
import AboutUsSection from "./components/sections/AboutUsSection";

// Dynamic import for LocationsSection to prevent SSR issues with Leaflet
const LocationsSection = dynamic(
  () => import("./components/sections/LocationsSection"),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          py: SECTION_STYLES.PADDING,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <Typography>Loading map...</Typography>
      </Box>
    ),
  }
);

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

        {/* Modern Announcement Banner */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 50,
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

        {/* Modern Navigation */}
        <Box sx={{ mt: "40px" }}>
          <ModernNavigation
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </Box>

        {/* Floating CTA - Updated for dark mode */}
        <FloatingCTA />

        {/* Main Content with proper spacing for fixed navigation */}
        <Box sx={{ pt: "144px" }}>
          <HeroSection />

          {/* Apply consistent spacing between all sections */}
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <ServicesSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <HowItWorksSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <OurWorkSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <ValuesSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <LocationsSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <InstagramSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <FAQSection />
          </Box>
          <Box sx={{ mb: SECTION_STYLES.SECTION_GAP }}>
            <AboutUsSection />
          </Box>

          {/* Modern Footer */}
          <Box
            component="footer"
            sx={{
              background: SECTION_STYLES.BACKGROUNDS.DEFAULT(darkMode),
              py: { xs: 4, md: 6 }, // Mobile-responsive padding
              borderTop: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
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
