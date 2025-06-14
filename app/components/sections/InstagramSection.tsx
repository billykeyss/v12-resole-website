"use client";

import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { Instagram, OpenInNew } from "@mui/icons-material";
import { memo } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import {
  SECTION_STYLES,
  TYPOGRAPHY_STYLES,
  BUTTON_STYLES,
} from "../../styles/theme";

// Lightweight Instagram Post Component (replaces heavy embed)
const InstagramPost = memo(({ url, index }: { url: string; index: number }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        height: 400,
        borderRadius: 2,
        overflow: "hidden",
        border: `1px solid ${theme.palette.divider}`,
        background: isDark
          ? "rgba(45, 55, 72, 0.8)"
          : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: isDark
            ? "0 8px 25px rgba(228, 64, 95, 0.3)"
            : "0 8px 25px rgba(228, 64, 95, 0.2)",
        },
      }}
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      <Instagram
        sx={{
          fontSize: 80,
          mb: 2,
          background: "linear-gradient(45deg, #E4405F, #FF6B35, #FFDC80)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "text.primary",
          mb: 1,
        }}
      >
        V12 Resole Post #{index + 1}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "center",
          px: 3,
        }}
      >
        Click to view our latest work and updates on Instagram
      </Typography>
    </Box>
  );
});

InstagramPost.displayName = "InstagramPost";

const InstagramSection: React.FC = memo(() => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Simplified Instagram post references (no heavy embeds)
  const instagramPosts = [
    "https://www.instagram.com/v12resole/", // Direct to profile for now
    "https://www.instagram.com/v12resole/",
    "https://www.instagram.com/v12resole/",
  ];

  return (
    <AnimatedSection
      id="instagram"
      sx={{
        py: SECTION_STYLES.PADDING,
        background: SECTION_STYLES.BACKGROUNDS.DEFAULT(isDark),
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Instagram
            sx={{
              fontSize: 48,
              mr: 2,
              background: "linear-gradient(45deg, #E4405F, #FF6B35, #FFDC80)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              ...TYPOGRAPHY_STYLES.SECTION_TITLE,
              ...TYPOGRAPHY_STYLES.GRADIENT_TEXT(isDark),
              textAlign: "left",
              mb: 0,
            }}
          >
            Follow Us
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
            mb: 6,
          }}
        >
          See our latest work and connect with the V12 Resole community on
          Instagram
        </Typography>

        {/* Instagram Feed Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
            mb: 6,
          }}
        >
          {instagramPosts.map((url, index) => (
            <InstagramPost key={`instagram-${index}`} url={url} index={index} />
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          startIcon={<OpenInNew />}
          href="https://www.instagram.com/v12resole"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "1.1rem",
            px: 4,
            py: 2,
            fontWeight: 600,
            borderRadius: BUTTON_STYLES.BORDER_RADIUS,
            background: "linear-gradient(45deg, #E4405F, #FF6B35)",
            boxShadow: "0 8px 25px rgba(228, 64, 95, 0.4)",
            "&:hover": {
              background: "linear-gradient(45deg, #C13651, #E55A2B)",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 35px rgba(228, 64, 95, 0.5)",
            },
          }}
        >
          Visit @v12resole
        </Button>
      </Container>
    </AnimatedSection>
  );
});

InstagramSection.displayName = "InstagramSection";

export default InstagramSection;
