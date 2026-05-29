import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface ContainedButtonProps extends ButtonProps {}

const ContainedButton = ({ sx, children, ...props }: ContainedButtonProps) => {
  return (
    <Button
      component={motion.button}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      {...props}
      sx={{
        backgroundColor: COLORS.PRIMARY_GREEN,
        color: COLORS.BLACK,
        height: "62px",
        borderRadius: "100px",
        px: 3,
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.20)",
        textTransform: "initial",
        fontFamily: din.style.fontFamily,
        fontSize: 23,
        fontWeight: 500,
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          backgroundColor: COLORS.PRIMARY_GREEN,
          boxShadow: "0 8px 25px rgba(182, 236, 26, 0.4)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.4), transparent 72%)",
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

export default ContainedButton;
