import { Box, Typography } from "@mui/material";
import { IMAGE_CARD_PROPS } from "@/utils/types";
import { helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const ImageCard = ({ card }: { card: IMAGE_CARD_PROPS }) => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: "16px",
        height: { xs: "200px", md: "240px" },
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${card.image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 1,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        backgroundColor: card.titleColor === "#000000" ? "#F5F5F5" : "transparent",
      }}
    >
      {card.titleColor !== "#000000" && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />
      )}

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: 18, md: 22 },
            color: card.titleColor || COLORS.WHITE,
            lineHeight: {xs:"24px", md:"30px"},
            mb: 1,
            letterSpacing:"0.52px",
          }}
        >
          {card.title}
        </Typography>

        {card.description && (
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 14, md: 18 },
              color: card.descriptionColor || "rgba(255, 255, 255, 0.8)",
              lineHeight: { xs: "24px", md: "30px" },
              letterSpacing: "0.52px",
            }}
          >
            {card.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageCard;