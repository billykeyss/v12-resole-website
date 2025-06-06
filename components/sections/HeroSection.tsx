"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { RocketLaunch, Speed, Verified, TrendingUp } from "@mui/icons-material";
import AnimatedSection from "../ui/AnimatedSection";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <AnimatedSection
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: isDark
          ? "linear-gradient(135deg, #1A202C 0%, #2D3748 100%)"
          : "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: 3,
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            V12 RESOLE
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "text.primary",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Expert Climbing Shoe Resole
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
              color: "text.secondary",
              fontWeight: 400,
              lineHeight: 1.7,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
            }}
          >
            Extend the life of your favorite climbing shoes with our
            professional resoling services. Premium quality, expert
            craftsmanship.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              mb: 5,
              flexWrap: "wrap",
            }}
          >
            <Chip
              icon={<Speed />}
              label="2-3 Week Turnaround"
              sx={{
                background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.875rem",
                px: 2,
                py: 1,
                height: "auto",
                "& .MuiChip-icon": {
                  color: "#FFFFFF",
                },
              }}
            />
            <Chip
              icon={<Verified />}
              label="Premium Rubber"
              sx={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.875rem",
                px: 2,
                py: 1,
                height: "auto",
                "& .MuiChip-icon": {
                  color: "#FFFFFF",
                },
              }}
            />
            <Chip
              icon={<TrendingUp />}
              label="Expert Craftsmanship"
              sx={{
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.05)",
                color: "text.primary",
                border: `1px solid ${theme.palette.divider}`,
                fontWeight: 600,
                fontSize: "0.875rem",
                px: 2,
                py: 1,
                height: "auto",
                "& .MuiChip-icon": {
                  color: theme.palette.primary.main,
                },
              }}
            />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              color: "text.secondary",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            🎉 Now offering monthly and annual subscriptions for exclusive
            benefits!
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<RocketLaunch />}
              sx={{
                fontSize: "1.1rem",
                px: 4,
                py: 2,
                fontWeight: 600,
                borderRadius: 2,
                background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Speed />}
              sx={{
                fontSize: "1.1rem",
                px: 4,
                py: 2,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                fontWeight: 600,
                borderRadius: 2,
                borderWidth: "1.5px",
                "&:hover": {
                  borderWidth: "1.5px",
                  backgroundColor: isDark
                    ? "rgba(59, 130, 246, 0.2)"
                    : "rgba(59, 130, 246, 0.05)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Track Order
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 200,
          height: 200,
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: 150,
          height: 150,
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          zIndex: 1,
        }}
      />
    </AnimatedSection>
  );
};

export default HeroSection;
