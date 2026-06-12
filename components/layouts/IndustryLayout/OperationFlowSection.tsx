"use client";

import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import { useDemoModal } from "@/components/context/DemoModalContext";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Props {
  data: IndustryData["operationFlow"];
  ctaIcon?: string;
  ctaText?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

import EventNoteIcon from "@mui/icons-material/EventNote";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const phaseIcons = [
  <EventNoteIcon key="0" sx={{ fontSize: 20, color: "#000" }} />,
  <PrecisionManufacturingIcon key="1" sx={{ fontSize: 20, color: "#000" }} />,
  <FactCheckIcon key="2" sx={{ fontSize: 20, color: "#000" }} />,
];

const OperationFlowSection = ({ data, ctaIcon, ctaText }: Props) => {
  const { openModal } = useDemoModal();

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

  const renderSpotlightText = (text: string) => {
    if (!text) return null;
    
    const words = text.split(" ");
    const totalLength = text.length;
    const center = totalLength / 2;
    let globalIndex = 0;

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

      const letters = word.split("").map((char, charIndex) => {
        const currentIndex = globalIndex++;
        const distanceFromCenter = Math.abs(currentIndex - center);

        return (
          <Box
            key={charIndex}
            component={motion.span}
            initial={{ opacity: 0.1, scale: 0.8, filter: "blur(4px)" }}
            animate={isHeadingInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: distanceFromCenter * 0.025, 
              ease: "easeOut",
            }}
            sx={{ display: "inline-block" }}
          >
            {char}
          </Box>
        );
      });

      let spaceElement = null;
      if (hasSpace) {
        const spaceIndex = globalIndex++;
        const spaceDist = Math.abs(spaceIndex - center);
        spaceElement = (
          <Box
            component={motion.span}
            initial={{ opacity: 0.1, scale: 0.8, filter: "blur(4px)" }}
            animate={isHeadingInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: spaceDist * 0.025,
              ease: "easeOut",
            }}
            sx={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {" "}
          </Box>
        );
      }

      return (
        <Box
          key={wordIndex}
          component="span"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {letters}
          {spaceElement}
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 6, md: 10 } }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: 0,
        }}
      >
        <Typography
          ref={headingRef}
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 28, md: 48, lg: 36 },
            lineHeight: { xs: "35px", md: "52px" },
            textTransform: "uppercase",
            fontWeight: 900,
            maxWidth: 1000,
            mb: 4,
          }}
        >
          {renderSpotlightText(data.title)}
        </Typography>

        <Grid 
          container 
          columnSpacing={4} 
          rowSpacing={{ xs: 4, md: 4 }}
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          {data.phases.map((block, index) => (
            <Grid key={block.phase} size={{ xs: 12, md: 4 }}>
              <Box
                component={motion.div}
                variants={cardVariants}
                sx={{
                  bgcolor: "transparent",
                  borderRadius: "16px",
                  border: `1.5px solid ${COLORS.PRIMARY_GREEN}`,
                  p: { xs: 3, md: 3 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontSize: { xs: 20, md: 16, lg: 18 },
                      fontWeight: 700,
                      lineHeight: { xs: "28px", md: "30px" },
                      letterSpacing: "0.52px",
                      textTransform: "uppercase",
                      color: COLORS.WHITE,
                    }}
                  >
                    {block.phase}
                  </Typography>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: COLORS.PRIMARY_GREEN,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {phaseIcons[index] || phaseIcons[0]}
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "rgba(255,255,255,0.15)",
                    my: 1,
                    mb: 4,
                  }}
                />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {block.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: COLORS.PRIMARY_GREEN,
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        ✓
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: "rgba(255,255,255,0.8)",
                          fontSize: { xs: 14, md: 16 },
                          lineHeight: { xs: "24px", md: 1.4 },
                          letterSpacing: "0.52px",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 6 } }}>
          <Button
            variant="contained"
            onClick={() => openModal("industry_flow")}
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              px: 6,
              py: 1.5,
              borderRadius: "99px",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 16, md: 16 },
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: COLORS.PRIMARY_HOVER,
                boxShadow: "none",
              },
            }}
          >
            {ctaText || "Book a demo"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OperationFlowSection;
