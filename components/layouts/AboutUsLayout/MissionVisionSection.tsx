"use client";
import React, { useRef } from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion, useInView, Variants } from "framer-motion";

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
const MissionVisionSection = () => {
  const { missionVisionSection: data } = aboutPage;

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, margin: "-100px" });

  const renderSpotlightText = (text: string, isInView: boolean = isSectionInView) => {
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
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
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
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
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
      ref={sectionRef}
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 24, md: 18, lg: 18 },
            fontWeight: 700,
            lineHeight: "28px",
            mb: 1.5,
            fontFamily: din.style.fontFamily,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 38, md: 36, lg: 36 },
            lineHeight: { xs: 1.1, md: "52px" },
            textTransform: "uppercase",
            color: COLORS.PRIMARY_GREEN,
            fontWeight: 900,
            maxWidth: 1488,
            fontFamily: din.style.fontFamily,
          }}
        >
          {renderSpotlightText(data.heading, isSectionInView)}
        </Typography>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
        >
        <Typography
          component={motion.p}
          variants={cardVariants}
          sx={{
            mt: 1,
            maxWidth: 920,
            fontSize: { xs: 20, md: 18, lg: 18 },
            lineHeight: { xs: 1.25, md: "28px" },
            fontFamily: helvetica.style.fontFamily,
            fontWeight: 400,
          }}
        >
          {data.subHeading}
        </Typography>
        <Box
          component={motion.div}
          variants={cardVariants}
          sx={{
            mt: 4,
            bgcolor: COLORS.CARD_BG_DARK,
            borderRadius: "20px",
            p: { xs: 3, md: 3 },
            maxWidth: 1661,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, md: 18, lg: 18 },
              lineHeight: { xs: 1.45, md: "28px" },
              fontFamily: helvetica.style.fontFamily,
              color: COLORS.TEXT_GREY,
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            {data.description}
          </Typography>
        </Box>
        </Box>
        <Typography
          ref={cardsRef}
          sx={{
            fontSize: { xs: 28, md: 36, lg: 36 },
            fontWeight: 700,
            lineHeight: "52px",
            mt: 6,
            mb: 2,
            fontFamily: din.style.fontFamily,
          }}
        >
          {renderSpotlightText(data.brandDnaTitle, isCardsInView)}
        </Typography>
        <Stack
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 3 }}
          alignItems="stretch"
        >
          {data.brandDna.map((item, idx) => (
            <Box key={idx} sx={{ flex: 1 }} component={motion.div} variants={cardVariants}>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: COLORS.CARD_BG_DARK,
                  color: COLORS.WHITE,
                  borderRadius: "20px",
                  p: { xs: 4, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  minHeight: { xs: 240, md: 240 },
                  justifyContent: "space-between",
                  gap: { xs: 4, md: 2 },
                  mb: { xs: 3, md: 0 },
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.2)",
                    borderColor: "rgba(182, 236, 26, 0.3)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    color: COLORS.TEXT_GREY,
                    lineHeight: { xs: 1.4, md: "28px" },
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    // bgcolor: COLORS.PRIMARY_GREEN,
                    px: 2,
                    py: 0.8,
                    borderRadius: "4px",
                    width: "fit-content",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 14, md: 25 },
                      fontWeight: 900,
                      lineHeight: 1.2,
                      fontFamily: din.style.fontFamily,
                      textTransform: "uppercase",
                      color: COLORS.PRIMARY_GREEN,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default MissionVisionSection;
