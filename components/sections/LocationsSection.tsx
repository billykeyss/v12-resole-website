"use client";

import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { LocationOn as MapPin } from "@mui/icons-material";
import AnimatedSection from "../ui/AnimatedSection";

const LocationsSection: React.FC = () => {
  const locations = [
    "San Francisco, CA",
    "Boulder, CO",
    "Seattle, WA",
    "New York, NY",
  ];

  return (
    <AnimatedSection
      id="locations"
      sx={{
        py: 8,
        backgroundColor: "#FFFFFF",
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
          Our Locations
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          {locations.map((location, index) => (
            <Card key={index} sx={{ boxShadow: 2 }}>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <MapPin sx={{ mr: 1, color: "#2E5B31" }} />
                <Typography variant="body2" sx={{ color: "#2C3E50" }}>
                  {location}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default LocationsSection;
