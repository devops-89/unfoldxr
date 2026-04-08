import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { OUTCOME_CARD_PROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const OutcomeCard = ({ number, label }: OUTCOME_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#272829",
        px: { xs: 3, md: 5 },
        py: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: { xs: 2, md: 3 },
        borderRadius: "16px",
        minHeight: { xs: "auto", md: "140px" },
      }}
    >
      {/* Number */}
      <Typography
        sx={{
          color: "rgba(182, 236, 26, 0.60)",
          fontFamily: din.style.fontFamily,
          fontSize: { xs: 40, md: 70 },
          fontWeight: 900,
          lineHeight: 1,
          flexShrink: 0,
          minWidth: { xs: 50, md: 90 },
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
          lineHeight: { xs: "20px", md: "30px" },
          color: COLORS.WHITE,
          textTransform: "uppercase",
          letterSpacing:"0.52px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default OutcomeCard;