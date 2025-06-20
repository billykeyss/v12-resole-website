"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  DarkMode,
  LightMode,
  RocketLaunch,
} from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";

interface ModernNavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ModernNavigation: React.FC<ModernNavigationProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Home", href: "/", type: "page" },
    { label: "Services", href: "#services", type: "section" },
    { label: "Our Work", href: "#our-work", type: "section" },
    { label: "How It Works", href: "#how-it-works", type: "section" },
    { label: "Locations", href: "#locations", type: "section" },
    { label: "FAQ", href: "#faq", type: "section" },
    { label: "About Us", href: "#about", type: "section" },
  ];

  const handleNavigation = (href: string, type: string) => {
    if (type === "page") {
      // Navigate to different page
      window.location.href = href;
    } else {
      // Scroll to section on current page
      scrollToSection(href);
    }
    handleMenuClose();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: darkMode
          ? "rgba(26, 32, 44, 0.98)"
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${
          darkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.1)"
        }`,
        color: darkMode ? "#FFFFFF" : "#0F171F",
        boxShadow: darkMode
          ? "0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.1)"
          : "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0, sm: 2 }, justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/", "page");
              }}
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: darkMode ? "#FFFFFF" : "#0F171F",
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                cursor: "pointer",
              }}
            >
              V12 Resole
            </Typography>
          </motion.div>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavigation(item.href, item.type)}
                sx={{
                  color: darkMode ? "#FFFFFF" : "#0F171F",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                color: darkMode ? "#FFFFFF" : "#0F171F",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(255, 255, 255, 0.25)"
                    : "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>

            <Button
              variant="contained"
              startIcon={<RocketLaunch />}
              onClick={() => handleNavigation("#services", "section")}
              sx={{
                display: { xs: "none", sm: "flex" },
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 2,
                backgroundColor: "#3B82F6",
                border: "1px solid transparent",
                "&:hover": {
                  backgroundColor: "#2563EB",
                  border: `1px solid ${darkMode ? "#60A5FA" : "#1D4ED8"}`,
                  boxShadow: darkMode
                    ? "0 4px 15px rgba(59, 130, 246, 0.4)"
                    : "0 4px 15px rgba(59, 130, 246, 0.3)",
                },
              }}
            >
              Get Started
            </Button>

            {/* Mobile Menu */}
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                display: { xs: "flex", md: "none" },
                color: darkMode ? "#FFFFFF" : "#0F171F",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: darkMode ? "#1A202C" : "#FFFFFF",
            border: `1px solid ${
              darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)"
            }`,
            borderRadius: 2,
            mt: 1,
            minWidth: 200,
            boxShadow: darkMode
              ? "0 10px 25px rgba(0, 0, 0, 0.6), 0 4px 10px rgba(255, 255, 255, 0.1)"
              : "0 10px 25px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => handleNavigation(item.href, item.type)}
            sx={{
              color: darkMode ? "#FFFFFF" : "#0F171F",
              "&:hover": {
                backgroundColor: darkMode
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default ModernNavigation;
