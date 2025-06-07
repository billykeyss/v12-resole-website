"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import AnimatedSection from "../ui/AnimatedSection";
import {
  SECTION_STYLES,
  TYPOGRAPHY_STYLES,
  CARD_STYLES,
} from "../../styles/theme";

const AboutUsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection
        id="about"
        sx={{
          py: SECTION_STYLES.PADDING,
          background: SECTION_STYLES.BACKGROUNDS.DEFAULT(isDark),
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                ...TYPOGRAPHY_STYLES.SECTION_TITLE,
                ...TYPOGRAPHY_STYLES.GRADIENT_TEXT(isDark),
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
              }}
            >
              Strengthening the relationship between climber and cobbler
            </Typography>
          </Box>

          {/* Three main sections in a grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              gap: 4,
              mb: 8,
            }}
          >
            {/* Mission Section */}
            <Card
              sx={{
                borderRadius: CARD_STYLES.BORDER_RADIUS,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: CARD_STYLES.SHADOW(isDark),
                background: CARD_STYLES.BACKGROUND(isDark),
                backdropFilter: CARD_STYLES.BACKDROP_FILTER,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: CARD_STYLES.PADDING, height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "primary.main",
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "text.primary",
                  }}
                >
                  The Dream
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.primary",
                    mb: 2,
                  }}
                >
                  For us and most climbers, the dream is to send climbs all day.
                  The secret to finishing your project is trusting your feet. A
                  broken shoe is broken trust.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.primary",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  V12 Resole wants to help.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.primary",
                  }}
                >
                  Through strengthening the relationship between climber and
                  cobbler, we&apos;re bringing resole services to your local
                  gym.
                </Typography>
              </CardContent>
            </Card>

            {/* Purpose Section */}
            <Card
              sx={{
                borderRadius: CARD_STYLES.BORDER_RADIUS,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: CARD_STYLES.SHADOW(isDark),
                background: CARD_STYLES.BACKGROUND(isDark),
                backdropFilter: CARD_STYLES.BACKDROP_FILTER,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: CARD_STYLES.PADDING, height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "secondary.main",
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  Our Purpose
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "text.primary",
                  }}
                >
                  The Community
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.primary",
                  }}
                >
                  Climbing was born from appreciation for nature and adventure.
                  We believe in leaving the outdoors better than we found it. In
                  today&apos;s economy, we make conscious efforts to reduce
                  waste by presenting resoling as an alternative to buying new
                  shoes. We&apos;re excited to build relationships with partners
                  who share these values.
                </Typography>
              </CardContent>
            </Card>

            {/* Craftsmanship Section */}
            <Card
              sx={{
                borderRadius: CARD_STYLES.BORDER_RADIUS,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: CARD_STYLES.SHADOW(isDark),
                background: CARD_STYLES.BACKGROUND(isDark),
                backdropFilter: CARD_STYLES.BACKDROP_FILTER,
                height: "100%",
              }}
            >
              <CardContent sx={{ p: CARD_STYLES.PADDING, height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "primary.main",
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  Our Craftsmanship
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "text.primary",
                  }}
                >
                  The Quality
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.primary",
                  }}
                >
                  Every resole is handled with expert precision and care. We use
                  only the highest quality rubber compounds and our craftsmen
                  have years of experience in shoe repair and restoration.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </AnimatedSection>
    </>
  );
};

export default AboutUsSection;
