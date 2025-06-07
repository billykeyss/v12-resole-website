"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import AnimatedSection from "../ui/AnimatedSection";
import { SECTION_STYLES, TYPOGRAPHY_STYLES } from "../../styles/theme";

const FAQSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const faqItems = [
    {
      question: "What is the turn-around time?",
      answer: `
        Half-Sole repair = 2-3 weeks
        Half-Sole & Rand repair = 3-4 weeks (depending on complexity or repair)
        Shipping = 4 to 5 weeks (depending on complexity of repair)
      `,
    },
    {
      question: "What rubber do you use?",
      answer:
        "We currently have Unparallel Real Honor, Vibram Grip, and Madrock Science Friction in stock, and our team selects accordingly based on the shoe.",
    },
    {
      question: "What thickness rubber do you use, and how soft are they?",
      answer: `
        Unparallel RH
        Rand = 2.2 mm
        Sole = 3.5 mm
        Durometer = 75 - 80 Shore Az

        Vibram Grip
        Rand = 1.8 mm
        Sole = 3.5 mm
        Durometer = 72-78 Shore A

        Mad Rock Science friction
        Rand = 2.2 mm
        Sole = 4.2 mm
        Durometer = 70-75 Shore A
      `,
    },
    {
      question: "What are the prices for the repairs?",
      answer: "Prices are up to date in our website at V12Resole.com",
    },
    {
      question: "How do I know which repair to select?",
      answer: `
        Send picture of your shoes to any of the following. We can take a look at provide guidance.
        Email = admin@v12resole.com
        Instagram = V12resole
        Text message = 408-930-6203
      `,
    },
  ];

  return (
    <AnimatedSection
      id="faq"
      sx={{
        py: SECTION_STYLES.PADDING,
        background: SECTION_STYLES.BACKGROUNDS.DEFAULT(isDark),
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_TITLE,
            ...TYPOGRAPHY_STYLES.GRADIENT_TEXT(isDark),
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="h6"
          sx={{
            ...TYPOGRAPHY_STYLES.SECTION_SUBTITLE,
          }}
        >
          Find answers to common questions about our resoling services
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "text.primary" }} />}
              sx={{
                "& .MuiAccordionSummary-content": {
                  color: "text.primary",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  whiteSpace: "pre-line",
                  lineHeight: 1.7,
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </AnimatedSection>
  );
};

export default FAQSection;
