import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { OUTCOME_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const OutcomeCard = ({ number, label }: OUTCOME_CARD_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#272829",
          padding: { xs: "20px", md: "50px" }, 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: 4 }, 
          borderRadius: "20px",
          flexDirection: { xs: "column", md: "row" }, 
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Number */}
        <Typography
          sx={{
            color: "rgba(182, 236, 26, 0.50)",
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 50 },
            fontWeight: 900,
          }}
        >
          {number}
        </Typography>

        {/* Label */}
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 25 },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "39px" },
            color: COLORS.WHITE,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default OutcomeCard;