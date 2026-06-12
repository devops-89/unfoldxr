"use client";
import { Box, Grid, Typography, Button } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
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

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }, 
  },
};

const MeetAva = () => {
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
  const data = homePage.productPage.meetAva;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10, lg: 15 },
        position: "relative",
        overflow: "hidden",
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%", lg: "83%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 6, md: 8 }} 
          alignItems="flex-start"
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 40, lg: 48 },
                lineHeight: { xs: "35px", md: "48px", lg: "52px" },
                maxWidth: "100%",
                whiteSpace: "pre-line",
              }}
            >
              {renderSpotlightText(data.title)}
            </Typography>
            <Typography
              component={motion.p}
              variants={cardVariants}
              sx={{
                mt: 4,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 19 },
                lineHeight: { xs: "28px", md: "32px" },
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: 720,
                letterSpacing: "0.52px",
              }}
            >
              {data.description.replace("The perfect work buddy.", "")}
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: COLORS.WHITE }}
              >
                The perfect work buddy.
              </Box>
            </Typography>
            <Box sx={{ mt: 6 }}>
              <Button
                component={motion.a}
                variants={buttonVariants}
                initial="hidden"
                animate={isHeadingInView ? "visible" : "hidden"}
                href={data.ctaLink}
                sx={{
                  bgcolor: COLORS.PRIMARY_GREEN,
                  color: COLORS.BLACK,
                  borderRadius: 99,
                  px: { xs: 4, md: 5 },
                  py: 1.5,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: COLORS.PRIMARY_HOVER,
                    boxShadow: "none",
                  },
                }}
              >
                {data.cta}
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              position: "relative",
            }}
            component={motion.div}
            variants={cardVariants}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "350px", md: "500px", lg: "650px" },
              }}
            >
              <Image
                src={data.img}
                alt={`${data.title.replace(/\n/g, ' ')} illustration`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  animation: "float 6s ease-in-out infinite",
                  filter: "drop-shadow(0px 0px 80px rgba(160, 32, 240, 0.25))",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Decorative Background Blur */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          bgcolor: "rgba(160, 32, 240, 0.08)",
          filter: "blur(180px)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default MeetAva;
