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
  useTheme,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [servicesTabValue, setServicesTabValue] = useState("single");

  return (
    <AnimatedSection
      id="services"
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
          Services & Pricing
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
          }}
        >
          Professional resoling services and membership options for dedicated
          climbers.
        </Typography>

        <TabContext value={servicesTabValue}>
          <Box
            sx={{ borderBottom: `2px solid ${theme.palette.divider}`, mb: 4 }}
          >
            <TabList
              onChange={(e, newValue) => setServicesTabValue(newValue)}
              centered
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {
                  color: "text.secondary",
                  fontWeight: 600,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  textTransform: "none",
                  borderRadius: 1,
                  mx: { xs: 0.5, md: 1 },
                  minHeight: 48,
                  "&.Mui-selected": {
                    color: theme.palette.primary.main,
                    background: isDark
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(59, 130, 246, 0.05)",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: theme.palette.primary.main,
                  height: 3,
                  borderRadius: 2,
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
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  background: isDark
                    ? "rgba(45, 55, 72, 0.6)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: theme.palette.primary.main,
                    boxShadow: isDark
                      ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                      : "0 20px 40px rgba(59, 130, 246, 0.15)",
                  },
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      Sole Repair
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      Replacement of rubber on the front sole. Restore the grip
                      of your climbing shoes.
                    </Typography>
                  }
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $55
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 3 }}
                  >
                    Estimated Lead Time: 2-3 weeks
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "text.primary",
                    }}
                  >
                    Available Rubber Options:
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle
                          sx={{
                            color: theme.palette.primary.main,
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Unparallel Real Honor" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle
                          sx={{
                            color: theme.palette.primary.main,
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Vibram Grip" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle
                          sx={{
                            color: theme.palette.primary.main,
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Madrock Science Friction" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Order Sole Repair
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  background: isDark
                    ? "rgba(45, 55, 72, 0.6)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: theme.palette.secondary.main,
                    boxShadow: isDark
                      ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                      : "0 20px 40px rgba(139, 92, 246, 0.15)",
                  },
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      Rand Repair
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      Replacement of rubber on the rand and front sole. Fix the
                      rand for better performance.
                    </Typography>
                  }
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $65
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 3 }}
                  >
                    Estimated Lead Time: 3-4 weeks
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "text.primary",
                    }}
                  >
                    Includes:
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle
                          sx={{
                            color: theme.palette.secondary.main,
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Rand repair" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle
                          sx={{
                            color: theme.palette.secondary.main,
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Sole replacement" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle
                          sx={{
                            color: theme.palette.secondary.main,
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Choice of rubber options (same as Sole Repair)" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
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
                pt: 2,
                overflow: "visible",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  background: isDark
                    ? "rgba(45, 55, 72, 0.6)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: theme.palette.primary.main,
                    boxShadow: isDark
                      ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                      : "0 20px 40px rgba(59, 130, 246, 0.15)",
                  },
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      Monthly Membership
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      Flexible benefits for climbers
                    </Typography>
                  }
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0, flex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $4.99
                    <Typography
                      component="span"
                      variant="h6"
                      sx={{ color: "text.secondary" }}
                    >
                      /month
                    </Typography>
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Free shipping on all orders" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Free rand repair" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    Subscribe Monthly
                  </Button>
                </CardActions>
              </Card>

              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  border: `2px solid ${theme.palette.secondary.main}`,
                  background: isDark
                    ? "rgba(139, 92, 246, 0.1)"
                    : "rgba(139, 92, 246, 0.05)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: isDark
                      ? "0 20px 40px rgba(139, 92, 246, 0.3)"
                      : "0 20px 40px rgba(139, 92, 246, 0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 12,
                    background:
                      "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    color: "#FFFFFF",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    zIndex: 10,
                  }}
                >
                  BEST VALUE
                </Box>
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      Annual Membership
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      Best value for dedicated climbers
                    </Typography>
                  }
                  sx={{ pb: 1 }}
                />
                <CardContent sx={{ pt: 0, flex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    $60
                    <Typography
                      component="span"
                      variant="h6"
                      sx={{ color: "text.secondary" }}
                    >
                      /year
                    </Typography>
                  </Typography>
                  <List dense>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Free shipping on all orders" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Free rand repair" />
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#10B981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="One free shoe repair (Sole + Rand)" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
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
