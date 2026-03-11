import { COLORS } from "@/utils/enum";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import healthcare from "@/images/banner/homePage/ai-industry/healthcare.png";
import { helvetica } from "@/utils/fonts";
import { INDUSTRY_CHIP_PROPS } from "@/utils/types";
const IndustryChip = ({ img, label }: INDUSTRY_CHIP_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #D0D0D0",
          borderRadius: "39px",
          px: 2,
          py: 1,
          gap: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            borderRadius: "50%",
            width: 40,
            height: 40,
            border: "1px solid rgba(255, 255, 255, 0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={img} alt="" width={20} />
        </Box>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default IndustryChip;
