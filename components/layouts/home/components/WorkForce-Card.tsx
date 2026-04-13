import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { din, helvetica } from "@/utils/fonts";
import { WORKFORCE_CARD_PROPS } from "@/utils/types";

const WorkforceCard = ({ img, icon, heading, description }: WORKFORCE_CARD_PROPS) => {
  const Icon = icon;
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          height: { xs: 60, md: 40 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
        }}
      >
        {icon ? (
          <Icon sx={{ fontSize: { xs: 40, md: 48 } }} />
        ) : (
          img && <Image src={img} alt="" width={36} />
        )}
      </Box>
      <Typography
        sx={{
          color: "#000",
          fontFamily: din.style.fontFamily,
          fontWeight: 700,
          fontSize: { xs: 16, md: 22 },
          lineHeight: { xs: "28px", md: "30px" },
          letterSpacing: "0.52px",
          textTransform: "uppercase",
          my: { xs: 1.5, md: 2 },
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
          lineHeight: { xs: "24px", md: "30px" },
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
