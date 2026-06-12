"use client";
import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Props {
  data: IndustryData["realityNeeds"];
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

const RealityNeedsSection = ({ data }: Props) => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

  const renderVerticalBlindsText = (text: string) => {
    if (!text) return null;
    
    const words = text.split(" ");
    const totalLength = text.length; 
    let globalIndex = 0; 

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

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
      sx={{
        bgcolor: COLORS.WHITE,
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
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
            fontSize: { xs: 28, md: 36},
            lineHeight: { xs: "35px", md: "42px" },
            textTransform: "uppercase",
            fontWeight: 900,  color: COLORS.BLACK,
            mb: 4,
          }}
        >
          {renderVerticalBlindsText(data.title)}
        </Typography>

        <Grid 
          container 
          columnSpacing={6} 
          rowSpacing={{ xs: 6, md: 6 }}
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 4 },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 18 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  lineHeight: { xs: "28px", md: "30px" },
                  letterSpacing: "0.52px",
                  mb: 2,
                }}
              >
                {data.realitiesTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {data.realities.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 16 },
                      lineHeight: { xs: "26px", md: "27px" },
                      letterSpacing: "0.52px",
                      display: "flex",
                      gap: 1.5,
                      "&::before": {
                        content: '"•"',
                        color: COLORS.WHITE,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 4 },
                height: "100%",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 18 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  lineHeight: { xs: "28px", md: "30px" },
                  letterSpacing: "0.52px",
                  mb: 2,
                  whiteSpace: "pre-line",
                }}
              >
                {data.needsTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {data.needs.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 16 },
                      lineHeight: { xs: "26px", md: "27px" },
                      letterSpacing: "0.52px",
                      display: "flex",
                      gap: 1.5,
                      "&::before": {
                        content: '"•"',
                        color: COLORS.WHITE,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 18, md: 26, lg: 18 },
            mt: { xs: 8, md: 10 },
            maxWidth: 1100,
            mx: "auto",
            color: COLORS.BLACK,
            fontWeight: 700,
            lineHeight: { xs: "28px", md: "30px" },
            letterSpacing: "0.52px",
            whiteSpace: "pre-line",
          }}
        >
          {data.bottomText}
        </Typography>

        {/* <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              px: { xs: 4, md: 6 },
              py: 1.5,
              borderRadius: "99px",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 14, md: 16, lg: 18 },
              fontWeight: 500,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: COLORS.PRIMARY_HOVER,
                boxShadow: "none",
              },
            }}
          >
            {data.ctaText}
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default RealityNeedsSection;
