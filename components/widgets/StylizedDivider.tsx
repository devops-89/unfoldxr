import React from "react";
import { Box, Divider, Stack, SxProps, Theme } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";

interface StylizedDividerProps {
  color?: string;
  width?: string | number | object;
  dotSize?: number;
  sx?: SxProps<Theme>;
}

const StylizedDivider: React.FC<StylizedDividerProps> = ({
  color = COLORS.WHITE,
  width = { xs: "50px", md: "60px" },
  dotSize = 6,
  sx,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ my: 1.5, ...sx }}
    >
      <Divider
        sx={{
          backgroundColor: color,
          borderWidth: "2px",
          width: width,
          borderRadius: "30px",
          borderColor: "transparent",
        }}
      />
      <Circle sx={{ color: color, fontSize: dotSize }} />
    </Stack>
  );
};

export default StylizedDivider;
