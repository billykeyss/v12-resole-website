"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import AnimatedSection from "../ui/AnimatedSection";

const InstagramSection: React.FC = () => {
  return (
    <AnimatedSection
      id="instagram"
      sx={{
        py: 8,
        backgroundColor: "#F8F9FA",
      }}
    >
      <Container maxWidth="lg" sx={{ px: 3 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            mb: 6,
            color: "#2C3E50",
          }}
        >
          Follow Us on Instagram
        </Typography>
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mb: 4, color: "#6C757D" }}
          >
            Instagram feed placeholder
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<Instagram />}
            sx={{
              px: 3,
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            Follow Us on Instagram
          </Button>
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default InstagramSection;
