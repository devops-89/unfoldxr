import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface ContainedButtonProps extends ButtonProps {}

const ContainedButton = ({ sx, children, ...props }: ContainedButtonProps) => {
  return (
    <Button
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
        "&:hover": {
          backgroundColor: COLORS.PRIMARY_GREEN,
          opacity: 0.9,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default ContainedButton;
