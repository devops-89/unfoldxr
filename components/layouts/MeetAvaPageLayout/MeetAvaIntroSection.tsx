"use client";
import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import React, { useRef } from "react";
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

const MeetAvaIntroSection = () => {
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
  const { introSection: data } = meetAvaPage;

  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 4, md: 8 }} 
          alignItems="center"
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 48, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                lineHeight: { xs: "35px", md: "52px" },
                mb: 2,
              }}
            >
              {renderVerticalBlindsText(data.heading)}
            </Typography>
            {data.paragraphs.map((para, index) => (
              <Typography
                key={index}
                component={motion.p}
                variants={cardVariants}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 15, md: 18 },
                  color: COLORS.BLACK,
                  lineHeight: { xs: "28px", md: "30px" },
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                {para}
              </Typography>
            ))}
          </Grid>
          <Grid 
            size={{ xs: 12, md: 5 }} 
            sx={{ order: { xs: 2, md: 1 } }}
            component={motion.div}
            variants={cardVariants}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: { xs: 3, md: "45px" },
                overflow: "hidden",
              }}
            >
              <Image
                src={data.image}
                alt="Representation of AVA, the AI Virtual Assistant"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MeetAvaIntroSection;
