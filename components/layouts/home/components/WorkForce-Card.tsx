import React from "react";
import increase from "@/images/banner/homePage/workforce/increase-productivity.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { din, helvetica } from "@/utils/fonts";
import { WORKFORCE_CARD_PROPS } from "@/utils/types";
const WorkforceCard = ({ img, heading, description }: WORKFORCE_CARD_PROPS) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Image src={img} alt="" width={40} />
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: din.style.fontFamily,
          fontWeight: 700,
          my: 3,
          textTransform: "uppercase",
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: helvetica.style.fontFamily,
          fontWeight: 400,
        }}
      >
        {description}{" "}
      </Typography>
    </Box>
  );
};

export default WorkforceCard;
