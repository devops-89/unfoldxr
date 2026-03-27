import { COLORS } from "@/utils/enum";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { helvetica } from "@/utils/fonts";
import { INDUSTRY_CHIP_PROPS } from "@/utils/types";

const IndustryChip = ({ img, label }: INDUSTRY_CHIP_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // 👈 better for text flow
          border: "1px solid #D0D0D0",
          borderRadius: "39px",

          // ✅ responsive spacing
          px: { xs: 1.5, md: 2 },
          py: { xs: 0.7, md: 1 },
          gap: { xs: 1, md: 2 },

          // ✅ prevent overflow
          maxWidth: "100%",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            borderRadius: "50%",
            width: { xs: 28, md: 40 },   // 👈 smaller on mobile
            height: { xs: 28, md: 40 },
            border: "1px solid rgba(255, 255, 255, 0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0, // 👈 prevents shrinking
          }}
        >
          <Image
            src={img}
            alt=""
            width={16}  // 👈 smaller icon mobile
            height={16}
          />
        </Box>

        {/* Label */}
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,

            // ✅ responsive font
            fontSize: { xs: 13, md: 20 },
            fontWeight: 400,

            // ✅ handle long text properly
            whiteSpace: "normal",     // allow wrap
            lineHeight: 1.2,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default IndustryChip;