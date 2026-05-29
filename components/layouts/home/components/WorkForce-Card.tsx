"use client";
import { din, helvetica } from "@/utils/fonts";
import { WORKFORCE_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkforceCard = ({ img, icon, heading, description }: WORKFORCE_CARD_PROPS) => {
  const Icon = icon;
  return (
    <Box
        component={motion.div}
        whileHover={{ y: -10, scale: 1.025 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="card"
        sx={{
        textAlign: "center",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        p: { xs: 1.5, md: 2 },
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
        border: "1px solid transparent",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, transparent 20%, rgba(182,236,26,0.14), transparent 75%)",
          opacity: 0,
          transform: "translateX(-35%)",
          transition: "opacity 0.35s ease, transform 0.55s ease",
        },
        "&:hover": {
          borderColor: "rgba(0,0,0,0.08)",
          boxShadow: "0 18px 45px rgba(0,0,0,0.10)",
        },
        "&:hover::before": {
          opacity: 1,
          transform: "translateX(35%)",
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
 {/* ICON */}
      <Box
        component={motion.div}
        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }}
        transition={{ duration: 0.45 }}
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
          img && <Image src={img} alt="" width={36} style={{ height: "auto" }} />
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
