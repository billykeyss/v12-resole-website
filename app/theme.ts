import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc2626", // red-600
      light: "#f87171", // red-400
      dark: "#991b1b", // red-800
    },
    secondary: {
      main: "#fed7aa", // orange-200
      light: "#fef3e8", // orange-50
      dark: "#ea580c", // orange-600
    },
    background: {
      default: "#fef3e8", // orange-50
      paper: "#ffffff",
    },
    text: {
      primary: "#dc2626", // red-600
      secondary: "#4b5563", // gray-600
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
