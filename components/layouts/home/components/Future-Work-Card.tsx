import { COLORS } from "@/utils/enum";
import { helvetica } from "@/utils/fonts";
import { FUTURE_WORK_CARD_PROPS } from "@/utils/types";
import { Box, Typography, Collapse } from "@mui/material";
import React from "react";

const FutureWorkCard = ({
  label,
  value,
  description,
  isActive,
  onClick,
}: FUTURE_WORK_CARD_PROPS) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        position: "relative",
        pl: { xs: 3, md: 5 },
        transition: "all 0.3s ease",
        opacity: isActive ? 1 : 0.4,
        "&:hover": {
          opacity: isActive ? 1 : 0.7,
        },
      }}
    >
      {/* Vertical Active Bar */}
      {isActive && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "4px",
            bgcolor: COLORS.PRIMARY_GREEN,
            borderRadius: "10px",
          }}
        />
      )}

      <Typography
        sx={{
          fontFamily: helvetica.style.fontFamily,
          fontSize: { xs: 16, md: 18 },
          fontWeight: 700,
          lineHeight: { xs: "24px", md: "30px" },
          letterSpacing: "0.52px",
          textTransform: "uppercase",
          color: isActive ? COLORS.PRIMARY_GREEN : COLORS.WHITE,
          textAlign: "left",
          mb: 1,
        }}
      >
        {label} -{" "}
        <Typography
          component={"span"}
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18 },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "30px" },
            letterSpacing: "0.52px",
            color: isActive ? COLORS.PRIMARY_GREEN : COLORS.WHITE,
            textTransform: "uppercase",
          }}
        >
          {value}
        </Typography>
      </Typography>

      <Collapse in={isActive}>
        <Typography
          sx={{
            color: COLORS.WHITE,
            textAlign: "left",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 14, md: 16 },
            lineHeight: { xs: "22px", md: "30px" },
            letterSpacing: "0.05px",
            fontWeight: 400,
            mt: 1,
          }}
        >
          {description}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default FutureWorkCard;
