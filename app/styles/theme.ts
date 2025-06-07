import { createTheme } from "@mui/material";

// Section styling constants for consistency
export const SECTION_STYLES = {
  // Consistent padding for all sections - optimized for mobile
  PADDING: {
    xs: 6, // Reduced from 8 for mobile
    sm: 8,
    md: 12,
  },

  // Standard section backgrounds - all return actual background values
  BACKGROUNDS: {
    DEFAULT: (isDark: boolean) => (isDark ? "#1A202C" : "#FFFFFF"),
    SUBTLE: (isDark: boolean) =>
      isDark
        ? "linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.6) 100%)"
        : "linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
    ACCENT: (isDark: boolean) =>
      isDark
        ? "linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.9) 100%)"
        : "linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 1) 100%)",
  },

  // Standard spacing between sections - optimized for mobile
  SECTION_GAP: {
    xs: 4, // Reduced from 8 for mobile
    sm: 6,
    md: 8,
    lg: 12,
  },
} as const;

// Card styling constants
export const CARD_STYLES = {
  BORDER_RADIUS: 3,
  PADDING: {
    xs: 2.5, // Reduced from 3 for mobile
    sm: 3,
    md: 4,
  },
  SHADOW: (isDark: boolean) =>
    isDark
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
      : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.06)",
  BACKGROUND: (isDark: boolean) =>
    isDark ? "rgba(45, 55, 72, 0.8)" : "rgba(255, 255, 255, 0.9)",
  BACKDROP_FILTER: "blur(10px)",
  HOVER_TRANSFORM: "translateY(-4px)",
} as const;

// Typography styling constants
export const TYPOGRAPHY_STYLES = {
  SECTION_TITLE: {
    fontWeight: 700,
    textAlign: "center" as const,
    mb: { xs: 2, md: 3 },
    fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
    px: { xs: 2, sm: 0 },
  },
  SECTION_SUBTITLE: {
    textAlign: "center" as const,
    mb: { xs: 4, md: 6 },
    color: "text.secondary",
    maxWidth: "600px",
    mx: "auto",
    lineHeight: 1.6,
    fontSize: { xs: "1rem", md: "1.125rem" },
    px: { xs: 3, sm: 2, md: 0 },
  },
  GRADIENT_TEXT: (isDark: boolean) => ({
    background: isDark
      ? "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)"
      : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }),
} as const;

// Button styling constants
export const BUTTON_STYLES = {
  PRIMARY_GRADIENT: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  PRIMARY_GRADIENT_HOVER: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
  BORDER_RADIUS: 2,
  PADDING: {
    px: 4,
    py: 2,
  },
  SHADOW: "0 8px 25px rgba(59, 130, 246, 0.4)",
  SHADOW_HOVER: "0 12px 35px rgba(59, 130, 246, 0.5)",
} as const;

// Modern SaaS-inspired theme with dark mode support
export const createModernTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#3B82F6", // Modern blue
        light: "#60A5FA",
        dark: "#2563EB",
      },
      secondary: {
        main: "#8B5CF6", // Modern purple
        light: "#A78BFA",
        dark: "#7C3AED",
      },
      background: {
        default: darkMode ? "#1A202C" : "#FFFFFF",
        paper: darkMode ? "#2D3748" : "#FFFFFF",
      },
      text: {
        primary: darkMode ? "#F7FAFC" : "#0F172A",
        secondary: darkMode ? "#E2E8F0" : "#64748B",
      },
      divider: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
      grey: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#2D3748",
        900: "#1A202C",
      },
    },
    typography: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: "3.5rem",
        letterSpacing: "-0.025em",
        lineHeight: 1.1,
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 600,
        fontSize: "2rem",
        letterSpacing: "-0.015em",
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        letterSpacing: "-0.01em",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.25rem",
        letterSpacing: "-0.005em",
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
        letterSpacing: "0em",
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.7,
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
        fontWeight: 400,
      },
      button: {
        fontWeight: 600,
        letterSpacing: "0.025em",
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
            letterSpacing: "0.01em",
            padding: "12px 24px",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "none",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: darkMode
                ? "0 10px 25px rgba(59, 130, 246, 0.3)"
                : "0 10px 25px rgba(59, 130, 246, 0.2)",
            },
          },
          contained: {
            background: BUTTON_STYLES.PRIMARY_GRADIENT,
            color: "#FFFFFF",
            "&:hover": {
              background: BUTTON_STYLES.PRIMARY_GRADIENT_HOVER,
            },
          },
          outlined: {
            borderWidth: "1.5px",
            "&:hover": {
              borderWidth: "1.5px",
              backgroundColor: darkMode
                ? "rgba(59, 130, 246, 0.1)"
                : "rgba(59, 130, 246, 0.05)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: CARD_STYLES.BORDER_RADIUS * 4, // 12px
            border: `1px solid ${
              darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.08)"
            }`,
            boxShadow: CARD_STYLES.SHADOW(darkMode),
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            backgroundColor: CARD_STYLES.BACKGROUND(darkMode),
            backdropFilter: CARD_STYLES.BACKDROP_FILTER,
            "&:hover": {
              transform: CARD_STYLES.HOVER_TRANSFORM,
              borderColor: darkMode
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(59, 130, 246, 0.2)",
              boxShadow: darkMode
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: CARD_STYLES.BORDER_RADIUS * 4, // 12px
            border: `1px solid ${
              darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.08)"
            }`,
            boxShadow: "none",
            backgroundColor: CARD_STYLES.BACKGROUND(darkMode),
            backdropFilter: CARD_STYLES.BACKDROP_FILTER,
            "&:before": {
              display: "none",
            },
            "&:not(:last-child)": {
              marginBottom: 8,
            },
          },
        },
      },
    },
  });
