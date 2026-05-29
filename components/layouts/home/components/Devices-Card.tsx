"use client";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { DEVICES_SECTION_DATA_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import StylizedDivider from "@/components/widgets/StylizedDivider";
import { motion } from "framer-motion";

interface DevicesCardProps extends DEVICES_SECTION_DATA_PROPS {
  isFirst?: boolean;
}

const DevicesCard = ({
  bgImg,
  heading,
  description,
  gridSize,
  isFirst = false,
  bgColor,
  textColor: overrideTextColor,
}: DevicesCardProps) => {
  const hasBg = Boolean(bgImg);
  const textColor = overrideTextColor || (hasBg ? COLORS.WHITE : COLORS.BLACK);
  const accentColor = textColor;

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -8, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      sx={{
        backgroundImage: hasBg ? `url(${bgImg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: bgColor || (hasBg ? "transparent" : "#D3DEE4"),
        borderRadius: "28px",
        height: { xs: "240px", md: "250px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        p: { xs: 3, md: 4 },
        overflow: "hidden",
        position: "relative",
        transition: "box-shadow 0.35s ease, background-position 0.8s ease",

        "&:hover": {
          boxShadow: "0px 20px 50px rgba(0,0,0,0.25)",
          backgroundPosition: "center 45%",
        },
    
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-120%",
          width: "60%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
          transform: "skewX(-20deg)",
        },
    
        "&:hover::after": {
          left: "130%",
          transition: "left 0.8s ease",
        },

      }}
    >
      {/* Gradient overlay for bg cards */}
      {hasBg && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: isFirst
              ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
              : "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
            borderRadius: "28px",
          }}
        />
      )}

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "100%", md: gridSize === 5 ? "100%" : "60%" },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 18, md: 18 },
            fontWeight: 900,
            color: textColor,
            textTransform: "uppercase",
            lineHeight: { xs: "28px", md: "30px" },
            letterSpacing: "0.52px",
          }}
        >
          {heading}
        </Typography>

        {/* Divider + dot */}
        <StylizedDivider color={accentColor} />

        {/* Description */}
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            color: textColor,
            fontSize: { xs: 13, md: 16 },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "24px" },
            letterSpacing: "0.52px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default DevicesCard;
