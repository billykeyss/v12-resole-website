"use client";

import {
  Box,
  Container,
  Typography,
  Tab,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";

const ServicesSection: React.FC = () => {
  const [servicesTabValue, setServicesTabValue] = useState("single");

  return (
    <AnimatedSection
      id="services"
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
          Our Services and Membership Options
        </Typography>
        <TabContext value={servicesTabValue}>
          <Box sx={{ borderBottom: 2, borderColor: "#E9ECEF", mb: 4 }}>
            <TabList
              onChange={(e, newValue) => setServicesTabValue(newValue)}
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
              <Tab label="Single Service" value="single" />
              <Tab label="Membership" value="membership" />
            </TabList>
          </Box>
          <TabPanel value="single" sx={{ px: 0 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, 1fr)",
                },
                gap: 3,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: 600,
                      }}
                    >
                      Sole Repair
                    </Typography>
                  }
                  subheader="Replacement of rubber on the front sole. Restore the grip of your climbing shoes."
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#2C3E50",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $55
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6C757D", mb: 1 }}>
                    Estimated Lead Time: 2-3 weeks
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#2C3E50",
                    }}
                  >
                    Available Rubber Options:
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Unparallel Real Honor" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Vibram Grip" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Madrock Science Friction" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button variant="contained" fullWidth size="large">
                    Order Sole Repair
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: 600,
                      }}
                    >
                      Rand Repair
                    </Typography>
                  }
                  subheader="Replacement of rubber on the rand and front sole. Fix the rand for better performance."
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#2C3E50",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $65
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6C757D", mb: 1 }}>
                    Estimated Lead Time: 3-4 weeks
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#2C3E50",
                    }}
                  >
                    Includes:
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Rand repair" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Sole replacement" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText primary="Choice of rubber options (same as Sole Repair)" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button variant="contained" fullWidth size="large">
                    Order Rand Repair
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value="membership" sx={{ px: 0 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, 1fr)",
                },
                gap: 3,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: 600,
                      }}
                    >
                      Monthly Membership
                    </Typography>
                  }
                  subheader="Flexible benefits for climbers"
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#2C3E50",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $4.99/month
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#28A745" }} />
                      </ListItemIcon>
                      <ListItemText primary="Free shipping on all orders" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#28A745" }} />
                      </ListItemIcon>
                      <ListItemText primary="Free rand repair" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button variant="contained" fullWidth size="large">
                    Subscribe Monthly
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2C3E50",
                        fontWeight: 600,
                      }}
                    >
                      Annual Membership
                    </Typography>
                  }
                  subheader="Best value for dedicated climbers"
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#2C3E50",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $60/year
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#28A745" }} />
                      </ListItemIcon>
                      <ListItemText primary="Free shipping on all orders" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#28A745" }} />
                      </ListItemIcon>
                      <ListItemText primary="Free rand repair" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#28A745" }} />
                      </ListItemIcon>
                      <ListItemText primary="One free shoe repair (Sole + Rand)" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button variant="contained" fullWidth size="large">
                    Subscribe Annually
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </TabPanel>
        </TabContext>
      </Container>
    </AnimatedSection>
  );
};

export default ServicesSection;
