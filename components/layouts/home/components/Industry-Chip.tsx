import { COLORS } from "@/utils/enum";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { helvetica } from "@/utils/fonts";
import { INDUSTRY_CHIP_PROPS } from "@/utils/types";

const IndustryChip = ({ img, icon, label }: INDUSTRY_CHIP_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          border: "1px solid #D0D0D0",
          borderRadius: "39px",
          px: { xs: 1.5, md: 2 },
          py: { xs: 0.7, md: 1 },
          gap: { xs: 1, md: 2 },
          width: "fit-content",
          maxWidth: "100%",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            borderRadius: "50%",
            width: { xs: 24, md: 30 }, 
            height: { xs: 24, md: 30 },
            border: "1px solid rgba(255, 255, 255, 0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0, 
          }}
        >
          {img ? (
            <Image
              src={img}
              alt=""
              width={16}  
              height={16}
            />
          ) : icon ? (
            React.createElement(icon, {
              sx: { color: COLORS.WHITE, fontSize: { xs: 14, md: 16 } },
            })
          ) : null}
        </Box>

        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 10, md: 14 },
            fontWeight: 700, 
            color: COLORS.BLACK,
            whiteSpace: "nowrap",
            lineHeight: "30px", 
            letterSpacing:"0.52px",
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default IndustryChip;