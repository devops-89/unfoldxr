import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Button, ButtonProps } from "@mui/material";
import React from "react";
interface ContainedButtonProps extends ButtonProps {}

const OutlinedButton = ({ sx, children, ...props }: ContainedButtonProps) => {
  return (
    <Button
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
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
