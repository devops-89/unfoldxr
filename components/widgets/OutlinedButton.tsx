import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface ContainedButtonProps extends ButtonProps {}

const OutlinedButton = ({ sx, children, ...props }: ContainedButtonProps) => {
  return (
    <Button
      component={motion.button}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      {...props}
      sx={{
        border: "2px solid #B6EC1A",
        borderRadius: "64px",
        height: 62,
        px: 4,
        color: COLORS.PRIMARY_GREEN,
        fontFamily: din.style.fontFamily,
        fontSize: 23,
        textTransform: "initial",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(182, 236, 26, 0.08)",
          boxShadow: "0 8px 25px rgba(182, 236, 26, 0.2)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.2), transparent 72%)",
          transform: "translateX(-120%)",
          transition: "transform 0.65s ease",
          zIndex: 0,
        },
        "&:hover::after": {
          transform: "translateX(120%)",
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
