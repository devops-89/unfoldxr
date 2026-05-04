import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { din, helvetica } from "@/utils/fonts";
import { WORKFORCE_CARD_PROPS } from "@/utils/types";
import { motion } from "framer-motion";

const WorkforceCard = ({ img, icon, heading, description }: WORKFORCE_CARD_PROPS) => {
  const Icon = icon;
  return (
    <Box 
        className="card"
        sx={{
        textAlign: "center",
        borderRadius: "16px",
        transition: "all 0.25s ease",
    
        border: "1px solid transparent",
    
        "&:hover": {
          transform: "translateY(-4px) scale(1.02)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
 {/* ICON */}
      <Box
        sx={{
          height: { xs: 60, md: 40 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon ? (
          <Icon sx={{ fontSize: { xs: 40, md: 48 }, color: "#000" }} />
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
