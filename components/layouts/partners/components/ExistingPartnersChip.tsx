import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS } from "@/utils/types";

const ExistingPartnersChip: React.FC<PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS> = ({
  image,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FFFFFF",
        borderRadius: "16px",
        height: "100px",
        width: "100%",
        px: 3,
        py: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "40px" }}>
        <Image
          src={image}
          alt="Partner company logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default ExistingPartnersChip;
