"use client";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  useTheme,
} from "@mui/material";
import {
  Recycling as Recycle,
  Schedule as Clock,
  Nature as Leaf,
  Build as Hammer,
  Group as Users,
  Favorite as Heart,
} from "@mui/icons-material";
import { memo, useMemo } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

// Memoized values data
const VALUES_DATA = [
  {
    icon: <Recycle sx={{ fontSize: 40 }} />,
    title: "Minimize Waste",
    description:
      "We're committed to reducing waste across all operations, from optimizing our resoling process to using recyclable and minimal packaging, ensuring we leave as little impact as possible.",
    color: "#10B981",
  },
  {
    icon: <Clock sx={{ fontSize: 40 }} />,
    title: "Extend Shoe Life",
    description:
      "Our mission is to extend the life of your climbing shoes, helping you get the most out of each pair and reducing the demand for new products through careful, high-quality repairs.",
    color: "#F59E0B",
  },
  {
    icon: <Leaf sx={{ fontSize: 40 }} />,
    title: "Eco-Friendly Practices",
    description:
      "We prioritize eco-friendly materials and processes to lower our ecological footprint and to support sustainable choices for climbers.",
    color: "#3B82F6",
  },
  {
    icon: <Hammer sx={{ fontSize: 40 }} />,
    title: "Craftsmanship Quality",
    description:
      "Every resole is handled with expert craftsmanship, ensuring each shoe performs as intended and feels just right, climb after climb.",
    color: "#8B5CF6",
  },
  {
    icon: <Users sx={{ fontSize: 40 }} />,
    title: "Customer Partnership",
    description:
      "We view every climber as a partner in sustainability. We work closely with our customers, offering tips and advice to keep shoes in top condition between resoles.",
    color: "#EF4444",
  },
  {
    icon: <Heart sx={{ fontSize: 40 }} />,
    title: "Community Engagement",
    description:
      "We're invested in the climbing community, supporting local events, partnering with climbing gyms, and educating climbers on sustainable practices and shoe care.",
    color: "#EC4899",
  },
] as const;

const ValuesSection: React.FC = memo(() => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const valueCards = useMemo(
    () =>
      VALUES_DATA.map((value) => (
        <Card
          key={value.title}
          sx={{
            height: "100%",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 3,
            background: isDark
              ? "rgba(45, 55, 72, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)", // Faster transition
            "&:hover": {
              borderColor: value.color,
              boxShadow: `0 8px 25px ${value.color}20`, // Reduced shadow intensity
              transform: "translateY(-2px)", // Reduced transform
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  background: `${value.color}15`,
                  color: value.color,
                  mr: 3,
                }}
              >
                {value.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                }}
              >
                {value.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
                fontSize: "0.95rem",
              }}
            >
              {value.description}
            </Typography>
          </CardContent>
        </Card>
      )),
    [theme, isDark]
  );

  return (
    <AnimatedSection
      id="values"
      sx={{
        py: SECTION_STYLES.PADDING,
        background: SECTION_STYLES.BACKGROUNDS.DEFAULT(isDark),
        position: "relative",
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
            Our Values
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
            }}
          >
            We&apos;re driven by principles that guide every aspect of our work,
            from craftsmanship to community impact.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {valueCards}
        </Box>
      </Container>
    </AnimatedSection>
  );
});

ValuesSection.displayName = "ValuesSection";

export default ValuesSection;
