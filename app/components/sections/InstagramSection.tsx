"use client";

import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { Instagram, OpenInNew } from "@mui/icons-material";
import { useEffect } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import {
  SECTION_STYLES,
  TYPOGRAPHY_STYLES,
  BUTTON_STYLES,
} from "../../styles/theme";

// Instagram Embed Component
const InstagramEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    // Load Instagram embed script
    interface WindowWithInstagram extends Window {
      instgrm?: {
        Embeds: {
          process(): void;
        };
      };
    }

    const windowWithInstagram = window as WindowWithInstagram;

    if (typeof window !== "undefined" && windowWithInstagram.instgrm) {
      windowWithInstagram.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        "& iframe": {
          maxWidth: "100% !important",
        },
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "400px",
          minWidth: "326px",
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      />
    </Box>
  );
};

const InstagramSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Example Instagram post URLs - replace with your actual posts
  const instagramPosts = [
    "https://www.instagram.com/p/EXAMPLE1/", // Replace with actual post URL
    "https://www.instagram.com/p/EXAMPLE2/", // Replace with actual post URL
    "https://www.instagram.com/p/EXAMPLE3/", // Replace with actual post URL
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
            <InstagramEmbed key={index} url={url} />
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
};

export default InstagramSection;
