"use client";

import {
  Box,
  Container,
  Typography,
  Step,
  Stepper,
  StepLabel,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocalShipping,
  Build,
  Verified,
  ArrowForward,
} from "@mui/icons-material";
import AnimatedSection from "../ui/AnimatedSection";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

const HowItWorksSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const steps = [
    {
      label: "Ship Your Shoes",
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      description:
        "Securely package and ship your climbing shoes to our facility using our prepaid shipping label.",
      color: "#3B82F6",
    },
    {
      label: "Expert Assessment",
      icon: <Build sx={{ fontSize: 40 }} />,
      description:
        "Our craftsmen assess your shoes and select the best rubber and repair approach for optimal performance.",
      color: "#8B5CF6",
    },
    {
      label: "Professional Resole",
      icon: <Verified sx={{ fontSize: 40 }} />,
      description:
        "We carefully remove old rubber and apply new, high-quality rubber with precision and attention to detail.",
      color: "#10B981",
    },
    {
      label: "Return Shipping",
      icon: <ArrowForward sx={{ fontSize: 40 }} />,
      description:
        "Your refreshed shoes are shipped back to you, ready for your next climbing adventure.",
      color: "#F59E0B",
    },
  ];

  return (
    <AnimatedSection
      id="how-it-works"
      sx={{
        py: SECTION_STYLES.PADDING,
        background: SECTION_STYLES.BACKGROUNDS.DEFAULT(isDark),
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
          How It Works
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
          }}
        >
          Simple, reliable process to get your climbing shoes back in perfect
          condition
        </Typography>

        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, sm: 4 },
            }}
          >
            {steps.map((step, index) => (
              <Card
                key={index}
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  background: isDark
                    ? "rgba(45, 55, 72, 0.8)"
                    : "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: step.color,
                    boxShadow: `0 20px 40px ${step.color}20`,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: { xs: 2, sm: 3 },
                      flexDirection: { xs: "column", sm: "row" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <Box
                      sx={{
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 2,
                        background: `${step.color}15`,
                        color: step.color,
                        mr: { xs: 0, sm: 3 },
                        mb: { xs: 2, sm: 0 },
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      }}
                    >
                      {index + 1}. {step.label}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
            <Stepper
              alternativeLabel
              sx={{
                mb: 6,
                "& .MuiStepConnector-line": {
                  borderTopWidth: 2,
                  borderColor: theme.palette.divider,
                },
                "& .MuiStepLabel-label": {
                  fontWeight: 600,
                  color: "text.primary",
                },
              }}
            >
              {steps.map((step, index) => (
                <Step key={index} completed>
                  <StepLabel
                    StepIconComponent={() => (
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          boxShadow: `0 8px 20px ${step.color}40`,
                        }}
                      >
                        {step.icon}
                      </Box>
                    )}
                  >
                    {step.label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 3,
              }}
            >
              {steps.map((step, index) => (
                <Card
                  key={index}
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    background: isDark
                      ? "rgba(45, 55, 72, 0.8)"
                      : "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: step.color,
                      boxShadow: `0 20px 40px ${step.color}20`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "text.primary",
                      }}
                    >
                      Step {index + 1}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </AnimatedSection>
  );
};

export default HowItWorksSection;
