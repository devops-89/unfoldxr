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
          padding: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            color: "rgba(182, 236, 26, 0.50)",
            fontFamily: din.style.fontFamily,
            fontSize: 50,
            fontWeight: 900,
          }}
        >
          {number}
        </Typography>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: 25,
            fontWeight: 400,
            lineHeight: "39px",
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
