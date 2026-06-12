"use client";
import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EastIcon from "@mui/icons-material/East";
import { useDemoModal } from "@/components/context/DemoModalContext";
import Image from "next/image";
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

const SupportYourOperations = () => {
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
  const data = homePage.productPage.supportOperations;
  const { openModal } = useDemoModal();

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${COLORS.BLACK} 70%, ${COLORS.WHITE} 30%)`,
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        ref={cardsRef}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <Box
          sx={{
            mb: { xs: 6, md: 8 },
            maxWidth: "900px",
            alignSelf: "flex-start",
          }}
        >
          <Typography
            ref={headingRef}
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: { xs: "1.2", md: "1.1" },
              fontSize: { xs: 24, md: 36, lg: 40 },
              color: COLORS.WHITE,
              mb: 4,
              textAlign: "left",
            }}
          >
            {renderSpotlightText(data.lifecycle.title)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            {data.lifecycle.stages.map((stage, i) => (
              <Typography
                key={i}
                component={motion.p}
                variants={cardVariants}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  color: COLORS.WHITE,
                  opacity: 0.9,
                  textAlign: "left",
                }}
              >
                {stage}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Video/Image Content */}
        <Box
          component={motion.div}
          variants={cardVariants}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: { xs: 4, md: 8 },
            overflow: "hidden",
            position: "relative",
            boxShadow: "0px 20px 60px rgba(0,0,0,0.5)",
            aspectRatio: { xs: "16/10", md: "16/9" },
            alignSelf: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <Image
              src={data.lifecycle.bg}
              alt={`${data.lifecycle.title} illustration`}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Overlay for better text visibility (optional but recommended for glassy effects) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.2)",
            }}
          />

          {/* View Case Study Button */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              bgcolor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "100px",
              pl: 1,
              pr: 2.5,
              py: 1,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                transform: "translate(-50%, -50%) scale(1.05)",
              },
              justifyContent: "center",
            }}
            onClick={() => openModal("home_hero")}
            textAlign={"center"}
          >
            {/* <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: COLORS.WHITE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PlayArrowIcon sx={{ color: COLORS.BLACK, fontSize: 24 }} />
            </Box> */}
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textAlign: "center",
                pl: 2,
              }}
            >
              Connect to see UnfoldXR in Action{" "}
              {/* <EastIcon sx={{ fontSize: 16 }} /> */}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SupportYourOperations;
