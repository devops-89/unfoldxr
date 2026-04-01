import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { DEVICES_SECTION_DATA_PROPS } from "@/utils/types";
import { Circle } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface DevicesCardProps extends DEVICES_SECTION_DATA_PROPS {
  isFirst?: boolean;
}

const DevicesCard = ({
  bgImg,
  heading,
  description,
  gridSize,
  isFirst = false,
}: DevicesCardProps) => {
  const hasBg = Boolean(bgImg);
  const textColor = hasBg ? COLORS.WHITE : COLORS.BLACK;
  const accentColor = hasBg ? COLORS.WHITE : COLORS.BLACK;

  return (
    <Box
      sx={{
        backgroundImage: hasBg ? `url(${bgImg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: hasBg ? "transparent" : "#D3DEE4",
        borderRadius: "28px",
        height: { xs: "260px", md: "210px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: isFirst ? "flex-end" : "flex-start",
        alignItems: "flex-start",
        p: { xs: 3, md: 5 },
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

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: gridSize === 5 ? "100%" : "60%" }}>
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 18, md: 30 },
            fontWeight: 900,
            color: textColor,
            textTransform: "uppercase",
            lineHeight: { xs: "26px", md: "38px" },
          }}
        >
          {heading}
        </Typography>

        {/* Divider + dot */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1.5 }}>
          <Divider
            sx={{
              backgroundColor: accentColor,
              borderWidth: "2px",
              width: { xs: "50px", md: "60px" },
              borderRadius: "30px",
            }}
          />
          <Circle sx={{ color: accentColor, fontSize: 6 }} />
        </Stack>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            color: textColor,
            fontSize: { xs: 13, md: 18 },
            fontWeight: 400,
            lineHeight: { xs: "20px", md: "26px" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default DevicesCard;