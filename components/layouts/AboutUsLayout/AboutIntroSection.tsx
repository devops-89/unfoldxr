"use client";
import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
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

const AboutIntroSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.1 });

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
            animate={isSectionInView ? { opacity: 1, scaleX: 1 } : {}}
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
            animate={isSectionInView ? { opacity: 1, scaleX: 1 } : {}}
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
    sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 10 } }}
  >
    <Container
      maxWidth={false}
      sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
    >
      <Card
        ref={sectionRef}
        sx={{
          borderRadius: { xs: 3, md: "40px" },
          boxShadow: "none",
          bgcolor: COLORS.WHITE,
          pb: { xs: 6, md: 6, lg: 8 },
        }}
      >
        <CardContent
          sx={{ px: { xs: 3, md: 10 }, py: { xs: 4, md: 10, lg: 10 } }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: 34, md: 36, lg: 36 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: "52px",
                  fontFamily: din.style.fontFamily,
                  color: COLORS.BLACK,
                }}
              >
                {renderVerticalBlindsText(aboutPage.introSection.heading)}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack 
                spacing={4}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate={isSectionInView ? "visible" : "hidden"}
              >
                {aboutPage.introSection.paragraphs.map((text, idx) => (
                  <Typography
                    key={idx}
                    component={motion.p}
                    variants={cardVariants}
                    sx={{
                      fontSize: { xs: 18, md: 18, lg: 18 },
                      lineHeight: "28px",
                      fontWeight: 400,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      textAlign: "left",
                    }}
                  >
                    {text}
                  </Typography>
                ))}
                <Typography
                  component={motion.p}
                  variants={cardVariants}
                  sx={{
                    fontSize: { xs: 24, md: 18, lg: 18 },
                    lineHeight: "28px",
                    fontWeight: 700,
                    fontFamily: helvetica.style.fontFamily,
                    color: COLORS.BLACK,
                    textAlign: "left",
                    mt: { xs: 2, md: 1 },
                  }}
                >
                  {aboutPage.introSection.highlight}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  </Box>
  );
};
export default AboutIntroSection;
