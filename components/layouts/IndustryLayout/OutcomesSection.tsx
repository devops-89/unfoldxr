"use client";
import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography, Stack, Container } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Props {
  data: IndustryData["outcomes"];
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

const OutcomesSection = ({ data }: Props) => {
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
      sx={{
        bgcolor: "#000000",
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "83%" }, mx: "auto", px: 0 }}
      >
        {/* Top Heading */}
        <Typography
          ref={headingRef}
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 30, lg: 35 },
            lineHeight: { xs: "35px", md: "60px" },
            textTransform: "uppercase",
            fontWeight: 900,
            color: COLORS.WHITE,
            mb: { xs: 6, md: 8 },
            maxWidth: "1000px",
          }}
        >
          {renderSpotlightText(data.titleLines.join(" "))}
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 6, md: 8 }} 
          alignItems="center"
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          {/* Left Side: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 250, md: 400, lg: 443 },
                borderRadius: "24px",
                overflow: "hidden",
                border: "8px solid #2A2A2A",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={data.image}
                alt={`${data.titleLines.join(" ")} illustration`}
                fill
                style={{
                  objectFit: "fill",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side: Stats */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={{ xs: 4, md: 5 }}>
              {data.metrics.map((metric, i) => (
                <Grid 
                  key={i} 
                  size={{ xs: 12, sm: 6 }}
                  component={motion.div}
                  variants={cardVariants}
                >
                  <Stack spacing={1}>
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        color: COLORS.PRIMARY_GREEN,
                        fontSize: { xs: 42, md: 48, lg: 36 },
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 15, md: 16, lg: 16 },
                        lineHeight: { xs: "28px", md: "24px" },
                        letterSpacing: "0.5px",
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 400,
                      }}
                    >
                      {metric.text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OutcomesSection;
