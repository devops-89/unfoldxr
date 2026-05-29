"use client";
import { COLORS } from "@/utils/enum";
import { helvetica } from "@/utils/fonts";
import { FUTURE_WORK_CARD_PROPS } from "@/utils/types";
import { Box, Typography, Collapse } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const FutureWorkCard = ({
  label,
  value,
  description,
  isActive,
  onClick,
}: FUTURE_WORK_CARD_PROPS) => {
  return (
    <Box
      component={motion.div}
      onClick={onClick}
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      sx={{
        cursor: "pointer",
        position: "relative",
        pl: { xs: 3, md: 5 },
        transition: "all 0.3s ease",
        opacity: isActive ? 1 : 1,
        "&:hover": { opacity: isActive ? 1 : 0.78 },
      }}
    >
      {/* Vertical Active Bar */}
      {isActive && (
        <Box
          component={motion.div}
          layoutId="future-work-active-bar"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            bgcolor: COLORS.PRIMARY_GREEN,
            borderRadius: "10px",
            transformOrigin: "top",
            boxShadow: "0 0 18px rgba(182,236,26,0.55)",
          }}
        />
      )}

      <Typography
        sx={{
          fontFamily: helvetica.style.fontFamily,
          fontSize: { xs: 16, md: 18 },
          fontWeight: 700,
          lineHeight: { xs: "28px", md: "30px" },
          letterSpacing: "0.52px",
          textTransform: "uppercase",
          color: isActive ? COLORS.PRIMARY_GREEN : COLORS.WHITE,
          textAlign: "left",
          mb: 1,
        }}
      >
        {label} -{" "}
        <Typography
          component={"span"}
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18 },
            fontWeight: 400,
            lineHeight: { xs: "28px", md: "30px" },
            letterSpacing: "0.52px",
            color: COLORS.WHITE,
            textTransform: "uppercase",
          }}
        >
          {value}
        </Typography>
      </Typography>

      <Collapse in={isActive}>
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          sx={{
            color: COLORS.WHITE,
            textAlign: "left",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 14, md: 16 },
            lineHeight: { xs: "26px", md: "30px" },
            letterSpacing: "0.05px",
            fontWeight: 400,
            mt: 1,
          }}
        >
          {description}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default FutureWorkCard;
