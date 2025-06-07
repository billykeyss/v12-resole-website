"use client";

import { Box, Fab } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionInView = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 10 && rect.bottom >= 10;
        }
        return false;
      });
      if (sectionInView) {
        setActiveSection(sectionInView.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <Box
      sx={{
        position: "fixed",
        right: 2,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {sections.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Fab
              size="small"
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
              sx={{
                width: 50,
                height: 50,
                backgroundColor:
                  activeSection === section.id ? "#2E5B31" : "#FFFFFF",
                color: activeSection === section.id ? "#FFFFFF" : "#2E5B31",
                border: `2px solid ${
                  activeSection === section.id ? "#2E5B31" : "#E9ECEF"
                }`,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              title={section.title}
            >
              {section.icon}
            </Fab>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default TableOfContents;
