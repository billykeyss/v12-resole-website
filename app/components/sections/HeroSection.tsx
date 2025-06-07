"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
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
        minHeight: { xs: "100vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        background: "transparent",
        overflow: "hidden",
        py: 0,
        mt: "-144px",
        pt: "144px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: 3,
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 800,
            mb: 4,
            background: isDark
              ? "linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #F472B6 100%)"
              : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            mt: { xs: 4, md: 6 },
          }}
        >
          V12 RESOLE
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 5,
            color: isDark ? "#F7FAFC" : "text.primary",
            fontSize: { xs: "1.75rem", md: "2.5rem" },
          }}
        >
          Expert Climbing Shoe Resole
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 6,
            maxWidth: "700px",
            mx: "auto",
            color: isDark ? "#E2E8F0" : "text.secondary",
            fontWeight: 400,
            lineHeight: 1.7,
            fontSize: { xs: "1.1rem", md: "1.25rem" },
          }}
        >
          Extend the life of your favorite climbing shoes with our professional
          resoling services. Premium quality, expert craftsmanship.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            mb: 8,
            mt: 4,
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: <Speed />,
              label: "2-3 Week Turnaround",
              gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
            },
            {
              icon: <Verified />,
              label: "Premium Rubber",
              gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
            },
            {
              icon: <TrendingUp />,
              label: "Expert Craftsmanship",
              gradient: null,
            },
          ].map((chip, index) => (
            <Chip
              key={index}
              icon={chip.icon}
              label={chip.label}
              sx={{
                background:
                  chip.gradient ||
                  (isDark
                    ? "rgba(45, 55, 72, 0.8)"
                    : "rgba(248, 250, 252, 0.8)"),
                color: chip.gradient
                  ? "#FFFFFF"
                  : isDark
                  ? "#F7FAFC"
                  : "text.primary",
                border: !chip.gradient
                  ? `1px solid ${theme.palette.divider}`
                  : "none",
                fontWeight: 600,
                fontSize: "0.875rem",
                px: 2,
                py: 1,
                height: "auto",
                backdropFilter: "blur(10px)",
                boxShadow: isDark
                  ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                  : "0 2px 10px rgba(0, 0, 0, 0.1)",
                "& .MuiChip-icon": {
                  color: chip.gradient ? "#FFFFFF" : theme.palette.primary.main,
                },
              }}
            />
          ))}
        </Box>

        <Typography
          variant="h6"
          sx={{
            mb: 8,
            mt: 4,
            color: isDark ? "#E2E8F0" : "text.secondary",
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
            mt: 6,
            mb: { xs: 6, md: 8 },
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
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 35px rgba(59, 130, 246, 0.5)",
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
              color: isDark ? "#F7FAFC" : theme.palette.primary.main,
              fontWeight: 600,
              borderRadius: 2,
              borderWidth: "2px",
              backgroundColor: isDark ? "rgba(45, 55, 72, 0.3)" : "transparent",
              backdropFilter: "blur(10px)",
              "&:hover": {
                borderWidth: "2px",
                backgroundColor: isDark
                  ? "rgba(59, 130, 246, 0.2)"
                  : "rgba(59, 130, 246, 0.05)",
                transform: "translateY(-2px)",
                boxShadow: isDark
                  ? "0 8px 25px rgba(59, 130, 246, 0.3)"
                  : "0 8px 25px rgba(59, 130, 246, 0.2)",
              },
            }}
          >
            Track Order
          </Button>
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default HeroSection;
