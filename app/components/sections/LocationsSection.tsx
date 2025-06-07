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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

// Fix for default markers in react-leaflet
interface LeafletIconDefault extends L.Icon.Default {
  _getIconUrl?: () => string;
}

// Fix Leaflet icons (safe to run now since component is client-side only)
delete (L.Icon.Default.prototype as LeafletIconDefault)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  coordinates: [number, number]; // [lat, lng]
}

const LocationsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [hoveredLocationIndex, setHoveredLocationIndex] = useState<
    number | null
  >(null);

  const locations: Location[] = [
    {
      name: "Agility Boulders",
      address: "1404 38th Ave",
      city: "Capitola",
      state: "CA",
      coordinates: [36.9741, -121.9552],
    },
    {
      name: "Bridges Rock Gym",
      address: "5635 San Diego St",
      city: "El Cerrito",
      state: "CA",
      coordinates: [37.9058, -122.2997],
    },
    {
      name: "Cliffs of Id",
      address: "2537 S Fairfax Ave",
      city: "Culver City",
      state: "CA",
      coordinates: [34.033, -118.3617],
    },
    {
      name: "Culver City",
      address: "9415 Culver Blvd",
      city: "Culver City",
      state: "CA",
      coordinates: [34.0259, -118.3957],
    },
    {
      name: "Diablo",
      address: "1220 Diamond Way # 140",
      city: "Concord",
      state: "CA",
      coordinates: [37.9779, -122.0311],
    },
    {
      name: "Dogpatch Boulders",
      address: "2573 3rd St",
      city: "San Francisco",
      state: "CA",
      coordinates: [37.7576, -122.389],
    },
    {
      name: "Four Bridges Outfitters",
      address: "315 N Market Station",
      city: "Chattanooga",
      state: "TN",
      coordinates: [35.0456, -85.3097],
    },
    {
      name: "LA Table Events",
      address: "9415 Culver Blvd",
      city: "Los Angeles",
      state: "CA",
      coordinates: [34.0259, -118.3957],
    },
    {
      name: "Madrock HQ",
      address: "12810 E Florence Ave",
      city: "Santa Fe Springs",
      state: "CA",
      coordinates: [33.9342, -118.0851],
    },
    {
      name: "Rocknasium",
      address: "720 Olive Dr S",
      city: "Davis",
      state: "CA",
      coordinates: [38.5382, -121.7617],
    },
    {
      name: "Rockreation - Los Angeles",
      address: "11866 La Grange Ave",
      city: "Los Angeles",
      state: "CA",
      coordinates: [34.0259, -118.4194],
    },
    {
      name: "Sender One Climbing - Westwood",
      address: "10887 Lindbrook Dr",
      city: "Los Angeles",
      state: "CA",
      coordinates: [34.0522, -118.4437],
    },
    {
      name: "Session Climbing",
      address: "965 S A St",
      city: "Santa Rosa",
      state: "CA",
      coordinates: [38.428, -122.7089],
    },
    {
      name: "V12 Santa Clara",
      address: "3330 E El Camino Real #203",
      city: "Santa Clara",
      state: "CA",
      coordinates: [37.3894, -121.95],
    },
    {
      name: "Studio",
      address: "396 S 1st St",
      city: "San Jose",
      state: "CA",
      coordinates: [37.3318, -121.8863],
    },
  ];

  // Create consistent custom icon for all locations
  const createCustomIcon = (index: number, isHovered: boolean = false) => {
    const bgColor = isHovered
      ? theme.palette.secondary.main
      : theme.palette.primary.main;
    const size = isHovered ? 28 : 24;
    const innerSize = isHovered ? 10 : 8;

    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="
          background: ${bgColor};
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease-in-out;
          transform: ${isHovered ? "scale(1.2)" : "scale(1)"};
        ">
          <div style="
            width: ${innerSize}px;
            height: ${innerSize}px;
            background: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  const MapComponent = () => {
    try {
      return (
        <MapContainer
          center={[39.8283, -98.5795]} // Geographic center of United States
          zoom={4} // Zoom level to show entire US
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
          zoomControl={true}
          attributionControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.coordinates}
              icon={createCustomIcon(index, hoveredLocationIndex === index)}
            >
              <Popup>
                <Box sx={{ minWidth: 200 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {location.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {location.address}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {location.city}, {location.state}
                  </Typography>
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      );
    } catch (error) {
      console.error("Map loading error:", error);
      return (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isDark ? "#2D3748" : "#F7FAFC",
            color: "text.secondary",
          }}
        >
          <Typography>Map unavailable</Typography>
        </Box>
      );
    }
  };

  return (
    <AnimatedSection
      id="locations"
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
          Partner Locations
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
          }}
        >
          Find convenient drop-off and pickup locations near you
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 4,
            height: { xs: "auto", lg: "600px" },
          }}
        >
          {/* Map */}
          <Card
            sx={{
              height: { xs: "400px", lg: "100%" },
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 3,
              overflow: "hidden",
              background: isDark
                ? "rgba(45, 55, 72, 0.8)"
                : "rgba(255, 255, 255, 0.9)",
            }}
          >
            <MapComponent />
          </Card>

          {/* Locations List */}
          <Box
            sx={{
              height: { xs: "auto", lg: "600px" },
              overflowY: "auto",
              pr: { lg: 1 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {locations.map((location, index) => (
                <Card
                  key={index}
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    background: isDark
                      ? "rgba(45, 55, 72, 0.6)"
                      : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-2px)",
                      boxShadow: isDark
                        ? "0 8px 25px rgba(0, 0, 0, 0.3)"
                        : "0 8px 25px rgba(59, 130, 246, 0.15)",
                    },
                  }}
                  onMouseEnter={() => setHoveredLocationIndex(index)}
                  onMouseLeave={() => setHoveredLocationIndex(null)}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {location.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 0.5,
                      }}
                    >
                      {location.address}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      {location.city}, {location.state}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default LocationsSection;
