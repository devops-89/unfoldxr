"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { helvetica, inter, din } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";

interface Props {
  data: UseCaseData["businessResults"];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BusinessResultsSection = ({ data }: Props) => {

  // Hook setup to watch scroll tracking for the heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });
  // Hook setup for the cards section animation
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

  // The seal-proof Word-Wrapped Vertical Blinds helper function
  /*
  const renderVerticalBlindsText = (text: string) => {
    if (!text) return null;
    
    const words = text.split(" ");
    const totalLength = text.length; 
    let globalIndex = 0; 

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

      // 1. Map out letters for the current word
      const letters = word.split("").map((char, charIndex) => {
        const currentIndex = globalIndex++;
        const distanceFromEdge = Math.min(currentIndex, totalLength - 1 - currentIndex);

        return (
          <Box
            key={charIndex}
            component={motion.span}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + (distanceFromEdge * 0.04), 
              ease: "easeOut",
            }}
            sx={{
              display: "inline-block",
              transformOrigin: "center", 
            }}
          >
            {char}
          </Box>
        );
      });

      // 2. Map out spaces securely
      let spaceElement = null;
      if (hasSpace) {
        const spaceIndex = globalIndex++;
        const spaceDist = Math.min(spaceIndex, totalLength - 1 - spaceIndex);
        spaceElement = (
          <Box
            component={motion.span}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + (spaceDist * 0.04),
              ease: "easeOut",
            }}
            sx={{ display: "inline-block", transformOrigin: "center", whiteSpace: "pre" }}
          >
            {" "}
          </Box>
        );
      }

      // 3. Keep words unified into responsive inline blocks
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
  */

  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          ref={headingRef}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 36 },
            lineHeight: { xs: "35px", md: "42px" },
            mb: { xs: 6, md: 6 },
            maxWidth: 900,
          }}
        >
          {/* {renderVerticalBlindsText("Business Results You Can Measure")} */}
          {/* <ScrollRevealText text="Business Results You Can Measure" /> */}
          Business Results You Can Measure
        </Typography>

        <Box
          // ref={cardsRef}
          // component={motion.div}
          // variants={containerVariants}
          // initial="hidden"
          // animate={isCardsInView ? "visible" : "hidden"}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 4, md: 3 },
            gridAutoRows: "1fr",
          }}
        >
          {data.items.map((item, index) => (
              <Box
                key={index}
                // component={motion.div}
                // variants={cardVariants}
                // whileHover={{ y: -5 }}
                sx={{
                  bgcolor: COLORS.CHARCOAL,
                  color: COLORS.WHITE,
                  borderRadius: "28px",
                  p: { xs: 2.5, md: 3.5 },
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 800,
                    fontSize: { xs: 20, md: 18 },
                    textTransform: "uppercase",
                    lineHeight: { xs: "28px", md: "24px" },
                    letterSpacing: "0.52px",
                    color: COLORS.PRIMARY_GREEN,
                    mb: 2.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: { xs: "26px", md: "24px" },
                    color: COLORS.WHITE_ALPHA_80,
                    letterSpacing: "0.52px",
                    mb: 2
                  }}
                >
                  {item.description}
                </Typography>

              </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessResultsSection;
