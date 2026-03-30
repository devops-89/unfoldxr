import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS } from "@/utils/types";

const ExistingPartnersChip: React.FC<PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS> = ({ image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        borderRadius: "39px",
        px: { xs: 2, md: 3 },
        py: { xs: 1, md: 1.5 },
        
      }}
    >
      <Image
        src={image}
        alt="partner"
        style={{
          height: "20px",
          width: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default ExistingPartnersChip;