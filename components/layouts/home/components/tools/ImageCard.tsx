

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGE_CARD_PROPS } from "@/utils/types";

const ImageCard = ({ card }: { card: IMAGE_CARD_PROPS }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        background: "linear-gradient(135deg, #a855f7, #ec4899)",
        color: "white",
        height: "100%",
      }}
    >
      <Typography fontWeight={700} mb={1}>
        {card.title}
      </Typography>

      <Image
        src={card.image}
        alt="img"
        width={300}
        height={200}
        style={{ width: "100%", borderRadius: 12 }}
      />
    </Box>
  );
};

export default ImageCard;