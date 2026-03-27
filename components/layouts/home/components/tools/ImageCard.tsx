import { Box, Typography } from "@mui/material";
import { IMAGE_CARD_PROPS } from "@/utils/types";

const ImageCard = ({ card }: { card: IMAGE_CARD_PROPS }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        color: "white",
        height: "200px",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${card.image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        flexDirection: "column",   
        justifyContent: "flex-start",
        gap: 0.5,                  
      }}
    >
      {/* Title */}
      <Typography
        fontWeight={700}
        fontSize={16}
        sx={{
          display: "-webkit-box",
          color: card.titleColor || "white",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {card.title}
      </Typography>

      {/* Description */}
      {card.description && (
        <Typography
          fontWeight={400}        
          fontSize={12}           
          sx={{
            opacity: 0.9,
            color: card.descriptionColor || "white",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {card.description}
        </Typography>
      )}
    </Box>
  );
};

export default ImageCard;