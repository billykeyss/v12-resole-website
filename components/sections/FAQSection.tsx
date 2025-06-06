"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import AnimatedSection from "../ui/AnimatedSection";

const FAQSection: React.FC = () => {
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
        py: 8,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container maxWidth="md" sx={{ px: 3 }}>
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
          Frequently Asked Questions
        </Typography>
        {faqItems.map((item, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                "& .MuiAccordionSummary-content": {
                  color: "#2C3E50",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                sx={{
                  color: "#6C757D",
                  whiteSpace: "pre-line",
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
