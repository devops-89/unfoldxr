"use client";

import { Box } from "@mui/material";
import { COLORS } from "@/utils/enum";

import { SxProps, Theme } from "@mui/material";

interface VerticalStepperProps {
  itemsCount: number;
  activeIndex: number;
  sx?: SxProps<Theme>;
  baseColor?: string; // Color for inactive line/dots
  activeColor?: string; // Color for active line/dots
}

/**
 * A reusable vertical stepper component with a background line, 
 * dynamic progress markers (dots), and an active stretching line.
 */
const VerticalStepper = ({ 
  itemsCount, 
  activeIndex, 
  sx, 
  baseColor = "rgba(255, 255, 255, 0.1)",
  activeColor = COLORS.PRIMARY_GREEN
}: VerticalStepperProps) => {
  // Prevent division by zero if itemsCount is 1
  const steps = itemsCount > 1 ? itemsCount - 1 : 1;
  const progressPercentage = (activeIndex / steps) * 100;
  const inactiveDotColor = baseColor.includes("rgba") ? baseColor.replace("0.1", "0.2") : baseColor;

  return (
    <Box
      sx={{
        position: "relative",
        width: "2px",
        height: "100%",
        bgcolor: baseColor,
        borderRadius: "4px",
        ...sx,
      }}
    >
      {/* Background Dots */}
      {Array.from({ length: itemsCount }).map((_, idx) => (
        <Box
          key={idx}
          sx={{
            position: "absolute",
            left: "50%",
            top: `${(idx / steps) * 100}%`,
            transform: "translate(-50%, -50%)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            bgcolor: activeIndex >= idx ? activeColor : inactiveDotColor,
            transition: "all 0.4s ease",
            zIndex: 2,
          }}
        />
      ))}

      {/* Active Stretching Line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${progressPercentage}%`,
          bgcolor: activeColor,
          borderRadius: "4px",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: activeColor === COLORS.PRIMARY_GREEN ? `0 0 15px ${COLORS.PRIMARY_GREEN}40` : "none",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default VerticalStepper;
