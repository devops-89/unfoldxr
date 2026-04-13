import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { DEVICES_SECTION_DATA_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import StylizedDivider from "@/components/widgets/StylizedDivider";

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
