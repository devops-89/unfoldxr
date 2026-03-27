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
            fontSize: { xs: 16, md: 25 }, 
            fontWeight: 700,
            lineHeight: { xs: "24px", md: "37px" },
            textTransform: "uppercase",
            color: COLORS.PRIMARY_GREEN,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {label} -{" "}
          <Typography
            component={"span"}
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 25 },
              fontWeight: 400,
              lineHeight: { xs: "24px", md: "37px" },
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
            textAlign: { xs: "center", md: "justify" }, 
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 14, md: 18 },
            lineHeight: { xs: "22px", md: "30px" },
            letterSpacing: "0.05px",
            fontWeight: 400,
            mt: { xs: 1, md: 0 },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FutureWorkCard;