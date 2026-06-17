"use client";
import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Props {
  data: UseCaseData["platformSummary"];
}

// "Reveal Wipe" effect
const revealWipeVariant: Variants = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.2,
      // Framing Motion implementation of power3.inOut [0.645, 0.045, 0.355, 1.000]
      ease: [0.645, 0.045, 0.355, 1.0],
    },
  },
};

// Blur, opacity, and y-axis animation for description paragraphs
const blurInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Orchestrates the staggered entry of the description paragraphs
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between each child animating in
    },
  },
};

const PlatformSummarySection = ({ data }: Props) => {

  const sectionGridRef = useRef(null);
  const isSectionInView = useInView(sectionGridRef, { once: false, margin: "-100px" });

  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          bgcolor: COLORS.BG_LIGHT,
          borderRadius: { xs: "24px", md: "40px" },
          p: { xs: 3.5, md: 6 },
          overflow: "hidden",
        }}
      >
        <Grid 
          ref={sectionGridRef}
          container 
          spacing={{ xs: 4, md: 10 }} 
          alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component={motion.h2}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
              variants={revealWipeVariant}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 36 },
                lineHeight: { xs: "35px", md: "42px" },
                color: COLORS.BLACK,
              }}
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid 
            component={motion.div}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            size={{ xs: 12, md: 6 }}
          >
            <Typography
              component={motion.p}
              variants={blurInVariant}
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                lineHeight: { xs: "28px", md: "30px" },
                letterSpacing: "0.52px",
                color: COLORS.OVERLAY_07,
                mb: 2,
              }}
            >
              {data.description1}
            </Typography>
            <Typography
              component={motion.p}
              variants={blurInVariant}
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                lineHeight: { xs: "28px", md: 1.6 },
                color: COLORS.OVERLAY_07,
              }}
            >
              {data.description2}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlatformSummarySection;
