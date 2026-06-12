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

const PlaceholderSection = () => {
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
  const { placeholderSection: data } = meetAvaPage;

  return (
    <Box
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, pb: { xs: 8, md: 10 } }}
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
          spacing={4} 
          alignItems="center"
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 32, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: "52px",
                mb: 2,
              }}
            >
              {renderSpotlightText(data.heading)}
            </Typography>
            <Typography
              component={motion.p}
              variants={cardVariants}
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 18 },
                lineHeight: "30px",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "pre-line",
              }}
            >
              {data.description}
            </Typography>
          </Grid>
          <Grid 
            size={{ xs: 12, md: 5 }} 
            sx={{ textAlign: { xs: "center", md: "right" } }}
            component={motion.div}
            variants={cardVariants}
          >
            <Box
              sx={{
                maxWidth: "100%",
                width: { xs: 280, md: 370 },
                mx: "auto",
              }}
            >
              <Image
                src={data.image}
                alt="Mobile device displaying the AVA interface"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transform: "rotate(9deg)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlaceholderSection;
