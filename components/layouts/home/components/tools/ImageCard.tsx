"use client";
import { Box, Typography } from "@mui/material";
import { IMAGE_CARD_PROPS } from "@/utils/types";
import { helvetica, din } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import { motion } from "framer-motion";

const ImageCardContent = ({ card }: { card: IMAGE_CARD_PROPS }) => (
  <Box
    component={motion.div}
    whileHover={{ y: -8, scale: 1.025 }}
    transition={{ type: "spring", stiffness: 240, damping: 22 }}
    sx={{
      p: { xs: 2.5, md: 3 },
      borderRadius: "16px",
      height: { xs: "180px", md: "210px" },
      position: "relative",
      overflow: "hidden",
      backgroundImage:
        card.image && !card.video
          ? `url(${typeof card.image === "string" ? card.image : card.image.src})`
          : "none",
      backgroundSize: card.backgroundSize || "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: 1,
      boxShadow:
        card.titleColor === "#000000"
          ? "0px 6px 30px rgba(0, 0, 0, 0.12)"
          : "0px 4px 20px rgba(0, 0, 0, 0.05)",
      backgroundColor: card.bgColor
        ? card.bgColor
        : card.titleColor === "#000000"
          ? "#F8F9FA"
          : "transparent",
      border:
        card.titleColor === "#000000" ? "1px solid rgba(0,0,0,0.05)" : "none",
      transition: "box-shadow 0.35s ease, background-size 0.55s ease",
      "&:hover": {
        backgroundSize: card.backgroundSize ? card.backgroundSize : "108%",
        boxShadow: "0px 24px 55px rgba(0,0,0,0.22)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.22), transparent 70%)",
        transform: "translateX(-120%)",
        transition: "transform 0.75s ease",
        zIndex: 3,
        pointerEvents: "none",
      },
      "&:hover::after": {
        transform: "translateX(120%)",
      },
    }}
  >
    {/* Video Background */}
    {card.video && (
      <Box
        component={motion.video}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        autoPlay
        loop
        muted
        playsInline
        src={card.video}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    )}

    {/* Overlay for better text readability */}
    {!card.video && (
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            card.titleColor !== "#000000"
              ? "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 60%)"
              : "linear-gradient(0deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 60%)",
          zIndex: 1,
        }}
      />
    )}

    {!card.video && (
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {card.tag ? (
          <Box
            sx={{
              alignSelf: "flex-start",
              bgcolor: card.titleColor === "#000000" ? "#000000" : "#B6EC1A",
              px: 2,
              py: 0.5,
              borderRadius: "100px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: 12,
                fontWeight: 900,
                color: card.titleColor === "#000000" ? "#B6EC1A" : "#000000",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {card.tag}
            </Typography>
          </Box>
        ) : (
          <Box />
        )}
        <Box>
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 16 },
              fontWeight: 700,
              color: card.titleColor || COLORS.WHITE,
              mb: 1,
              textTransform: "none",
              lineHeight: { xs: "24px", md: "20px" },
              letterSpacing: "0.52px",
            }}
          >
            {card.title}
          </Typography>

          {card.description && (
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 13, md: 15 },
                fontWeight: 400,
                lineHeight: { xs: "22px", md: "20px" },
                color: card.descriptionColor || "rgba(255, 255, 255, 0.8)",
              }}
            >
              {card.description}
            </Typography>
          )}
        </Box>
      </Box>
    )}
  </Box>
);

const ImageCard = ({ card }: { card: IMAGE_CARD_PROPS }) => {
  if (card.link) {
    return (
      <Link
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            textDecoration: "none",
            display: "block",
            color: "inherit",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.02)", textDecoration: "none" },
          }}
        >
          <ImageCardContent card={card} />
        </Box>
      </Link>
    );
  }
  return <ImageCardContent card={card} />;
};

export default ImageCard;
