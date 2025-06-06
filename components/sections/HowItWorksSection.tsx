"use client";

import {
  Box,
  Container,
  Typography,
  Tab,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Inventory as BoxIcon,
  Notifications as Bell,
  LocalShipping as Package,
  LocalShipping as Truck,
  ContentCut as Scissors,
} from "@mui/icons-material";
import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";

const HowItWorksSection: React.FC = () => {
  const [tabValue, setTabValue] = useState("inPerson");

  const howItWorksSteps = {
    inPerson: [
      {
        title: "Place Order",
        description:
          "For Foster City, order online. For Santa Clara, order online or scan QR code on-site. For gyms, scan QR code on-site. See Locations page for hours and details.",
        icon: ShoppingCart,
      },
      {
        title: "Drop Off",
        description:
          "Visit the local drop-off location to get your shoes in the queue.",
        icon: BoxIcon,
      },
      {
        title: "Receive Notification",
        description:
          "Once your resole is complete, you will receive a notification via text or email.",
        icon: Bell,
      },
      {
        title: "Pick Up",
        description:
          "Return to the drop off location to grab your shoes. Climb on!",
        icon: Package,
      },
    ],
    shipped: [
      {
        title: "Place Order",
        description:
          "Visit our website and select the 'Ship-In Resole' option. Choose your repair type and provide shipping details.",
        icon: ShoppingCart,
      },
      {
        title: "Ship Your Shoes",
        description:
          "Pack your shoes securely and ship them to our facility using the provided shipping label.",
        icon: Truck,
      },
      {
        title: "Resole Process",
        description:
          "Our expert craftsmen will carefully resole your shoes according to your specifications.",
        icon: Scissors,
      },
      {
        title: "Return Shipping",
        description:
          "Once complete, we'll ship your newly resoled shoes back to you. Track your package online.",
        icon: Package,
      },
    ],
  };

  return (
    <AnimatedSection
      id="how-it-works"
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
          How It Works
        </Typography>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 2, borderColor: "#E9ECEF", mb: 4 }}>
            <TabList
              onChange={(e, newValue) => setTabValue(newValue)}
              centered
              sx={{
                "& .MuiTab-root": {
                  color: "#6C757D",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "#2E5B31",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#2E5B31",
                  height: 3,
                },
              }}
            >
              <Tab label="In-Person Orders" value="inPerson" />
              <Tab label="Shipped Orders" value="shipped" />
            </TabList>
          </Box>
          <TabPanel value="inPerson" sx={{ px: 0 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {howItWorksSteps.inPerson.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card sx={{ height: "100%" }}>
                    <CardHeader
                      avatar={
                        <Box
                          sx={{
                            p: 1.5,
                            backgroundColor: "#2E5B31",
                            borderRadius: 2,
                            color: "#FFFFFF",
                          }}
                        >
                          <step.icon sx={{ fontSize: 28 }} />
                        </Box>
                      }
                      title={
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#2C3E50",
                            fontWeight: 600,
                          }}
                        >
                          #{index + 1} {step.title}
                        </Typography>
                      }
                      sx={{ pb: 1 }}
                    />
                    <CardContent sx={{ pt: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6C757D", lineHeight: 1.5 }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </TabPanel>
          <TabPanel value="shipped" sx={{ px: 0 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {howItWorksSteps.shipped.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card sx={{ height: "100%" }}>
                    <CardHeader
                      avatar={
                        <Box
                          sx={{
                            p: 1.5,
                            backgroundColor: "#8B4513",
                            borderRadius: 2,
                            color: "#FFFFFF",
                          }}
                        >
                          <step.icon sx={{ fontSize: 28 }} />
                        </Box>
                      }
                      title={
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#2C3E50",
                            fontWeight: 600,
                          }}
                        >
                          #{index + 1} {step.title}
                        </Typography>
                      }
                      sx={{ pb: 1 }}
                    />
                    <CardContent sx={{ pt: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6C757D", lineHeight: 1.5 }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </TabPanel>
        </TabContext>
      </Container>
    </AnimatedSection>
  );
};

export default HowItWorksSection;
