import { COLORS } from "@/utils/enum";
import { helvetica } from "@/utils/fonts";
import { FUTURE_WORK_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const FutureWorkCard = ({
  label,
  value,
  description,
}: FUTURE_WORK_CARD_PROPS) => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: 25,
            fontWeight: 700,
            lineHeight: "37px",
            textTransform: "uppercase",
            color: COLORS.PRIMARY_GREEN,
          }}
        >
          {label} -{" "}
          <Typography
            component={"span"}
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: 25,
              fontWeight: 400,
              lineHeight: "37px",
              color: COLORS.PRIMARY_GREEN,
              textTransform: "uppercase",
            }}
          >
            {value}
          </Typography>
        </Typography>

        <Typography
          sx={{
            color: COLORS.WHITE,
            textAlign: "justify",
            fontFamily: helvetica.style.fontFamily,
            fontSize: 18,
            lineHeight: "30px",
            letterSpacing: "0.05px",
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FutureWorkCard;
