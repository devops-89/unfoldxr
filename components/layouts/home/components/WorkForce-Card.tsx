import React from "react";
import increase from "@/images/banner/homePage/workforce/increase-productivity.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { din, helvetica } from "@/utils/fonts";
import { WORKFORCE_CARD_PROPS } from "@/utils/types";

const WorkforceCard = ({ img, heading, description }: WORKFORCE_CARD_PROPS) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          height: { xs: 60, md: 80 },
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Image src={img} alt="" width={48} />
      </Box>
      <Typography
        sx={{
          color: "#000",
          fontFamily: din.style.fontFamily,
          fontWeight: 700,
          fontSize: { xs: 16, md: 22 },
          lineHeight: { xs: 1.2, md: "30px" },
          letterSpacing: "0.52px",
          textTransform: "uppercase",
          my: { xs: 1.5, md: 3 },
          textAlign: "center",
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          color: "#000",
          fontFamily: helvetica.style.fontFamily,
          fontWeight: 400,
          fontSize: { xs: 14, md: 18 },
          lineHeight: { xs: 1.4, md: "30px" },
          textAlign: "center",
          letterSpacing: "0.52px",
          whiteSpace: "pre-line",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default WorkforceCard;
