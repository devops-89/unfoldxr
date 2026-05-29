"use client";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { OUTCOME_CARD_PROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import ContainedButton from "@/components/widgets/ContainedButton";
import { motion } from "framer-motion";

const OutcomeCard = ({ number, label, link }: OUTCOME_CARD_PROPS) => {
  const router = useRouter();
  return (
    <Box
      component={motion.div}
      initial="rest"
      whileHover="hover"
      animate="rest"
      sx={{
        backgroundColor: "#272829",
        px: { xs: 3, md: 4 },
        py: { xs: 3, md: 3 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2, md: 2 },
        borderRadius: "16px",
        minHeight: { xs: "auto", md: "110px" },
        transition: "all 0.3s ease", 
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 22px 45px rgba(0,0,0,0.25)",
        }, 
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 70%)",
          transform: "translateX(-100%)",
          transition: "transform 0.65s ease",
          pointerEvents: "none",
        },
        "&:hover::after": {
          transform: "translateX(100%)",
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: { xs: 2, md: 1 }, flex: 1 }}>
        {/* Number */}
        <Typography
          component={motion.div}
          variants={{
            rest: {
              scale: 1,
              y: 0,
            },
            hover: {
              scale: 1.1,
              y: -6,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 5,
              },
            },
          }}
          sx={{
            color: "rgba(182, 236, 26, 0.60)",
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 40, md: 36 },
            fontWeight: 900,
            lineHeight: { xs: "35px", md: "52px" },
            flexShrink: 0,
            minWidth: { xs: 40, md: 50 },
          }}
        >
          {number}
        </Typography>

        {/* Label */}
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 14, md: 18 },
            fontWeight: 900,
            lineHeight: { xs: "28px", md: "30px" },
            color: COLORS.WHITE,
            textTransform: "uppercase",
            letterSpacing: "0.52px",
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* CTA Button placed on right side */}
      <Box sx={{ flexShrink: 0, mt: { xs: 1, md: 0 }, alignSelf: { xs: "flex-end", md: "center" } }}>
        {link ? (
          <ContainedButton
            onClick={() => router.push(link)}
            sx={{
              width: "auto",
              minWidth: "120px",
              height: { xs: "36px", md: "42px" },
              fontSize: { xs: 12, md: 14 },
              fontWeight: 700,
              borderRadius: "100px",
              px: 2,
              transition: "all 0.3s ease",
              "&:hover": {
              transform: "translateX(6px)",
              },
            }}
          >
            Know More
          </ContainedButton>
        ) : (
          <ContainedButton
            sx={{
              width: "auto",
              minWidth: "120px",
              height: { xs: "36px", md: "42px" },
              fontSize: { xs: 12, md: 14 },
              fontWeight: 700,
              borderRadius: "100px",
              px: 2,
              transition: "all 0.3s ease", 
              "&:hover": {
              transform: "translateX(6px)",
              },                          
            }}
          >
            Know More
          </ContainedButton>
        )}
      </Box>
    </Box>
  );
};

export default OutcomeCard;
