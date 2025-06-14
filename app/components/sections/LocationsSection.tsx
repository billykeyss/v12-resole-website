"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Theme,
} from "@mui/material";
import AnimatedSection from "../ui/AnimatedSection";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState, useMemo, useCallback, memo } from "react";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

// Fix for default markers in react-leaflet
interface LeafletIconDefault extends L.Icon.Default {
  _getIconUrl?: () => string;
}

// Fix Leaflet icons (safe to run now since component is client-side only)
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as LeafletIconDefault)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  coordinates: [number, number]; // [lat, lng]
}

// Memoize locations data
const LOCATIONS: Location[] = [
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

// Memoized Map Component
const MapComponent = memo(
  ({
    center,
    zoom,
    locations,
    hoveredLocationIndex,
    theme,
  }: {
    center: [number, number];
    zoom: number;
    locations: Location[];
    hoveredLocationIndex: number | null;
    theme: Theme;
  }) => {
    // Create consistent custom icon for all locations
    const createCustomIcon = useCallback(
      (index: number, isHovered: boolean = false) => {
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
      },
      [theme]
    );

    try {
      return (
        <MapContainer
          center={center}
          zoom={zoom}
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
              key={`${location.name}-${index}`}
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
            background: "rgba(0,0,0,0.1)",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Map temporarily unavailable
          </Typography>
        </Box>
      );
    }
  }
);

MapComponent.displayName = "MapComponent";

const LocationsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [hoveredLocationIndex, setHoveredLocationIndex] = useState<
    number | null
  >(null);
  const [focusedLocation, setFocusedLocation] = useState<{
    center: [number, number];
    zoom: number;
  }>({
    center: [39.8283, -98.5795], // Default center (US center)
    zoom: 4, // Default zoom
  });

  const handleLocationClick = useCallback((location: Location) => {
    setFocusedLocation({
      center: location.coordinates,
      zoom: 13, // Closer zoom when focusing on specific location
    });
  }, []);

  const handleLocationHover = useCallback((index: number | null) => {
    setHoveredLocationIndex(index);
  }, []);

  const locationCards = useMemo(
    () =>
      LOCATIONS.map((location, index) => (
        <Card
          key={`card-${location.name}-${index}`}
          onClick={() => handleLocationClick(location)}
          onMouseEnter={() => handleLocationHover(index)}
          onMouseLeave={() => handleLocationHover(null)}
          sx={{
            cursor: "pointer",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            background: isDark
              ? "rgba(45, 55, 72, 0.8)"
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              borderColor: theme.palette.primary.main,
              boxShadow: isDark
                ? "0 8px 25px rgba(59, 130, 246, 0.3)"
                : "0 8px 25px rgba(59, 130, 246, 0.2)",
            },
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                fontSize: "1rem",
                color: "text.primary",
              }}
            >
              {location.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 0.5 }}
            >
              {location.address}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {location.city}, {location.state}
            </Typography>
          </CardContent>
        </Card>
      )),
    [theme, isDark, handleLocationClick, handleLocationHover]
  );

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
          Our Locations
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
          }}
        >
          Find V12 Resole services at partner locations across the country
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 4,
            height: { xs: "auto", lg: "600px" },
          }}
        >
          {/* Locations List */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 2,
              maxHeight: { xs: "none", lg: "600px" },
              overflowY: { xs: "visible", lg: "auto" },
              pr: { xs: 0, lg: 1 },
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: isDark
                  ? "rgba(45, 55, 72, 0.3)"
                  : "rgba(0,0,0,0.1)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: theme.palette.primary.main,
                borderRadius: "4px",
                "&:hover": {
                  background: theme.palette.primary.dark,
                },
              },
            }}
          >
            {locationCards}
          </Box>

          {/* Map */}
          <Box
            sx={{
              height: { xs: "400px", lg: "600px" },
              borderRadius: 2,
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
              "& .leaflet-container": {
                height: "100%",
                borderRadius: 2,
              },
            }}
          >
            <MapComponent
              center={focusedLocation.center}
              zoom={focusedLocation.zoom}
              locations={LOCATIONS}
              hoveredLocationIndex={hoveredLocationIndex}
              theme={theme}
            />
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
};

export default memo(LocationsSection);
