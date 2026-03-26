

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { DARK_CARD_PROPS } from "@/utils/types";

const DarkCard = ({ card }: { card: DARK_CARD_PROPS }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#0A0A0A",
        color: "white",
        height: "100%",
      }}
    >
      <Typography fontWeight={700}>{card.title}</Typography>

      <Typography fontSize={14} color="gray" my={1}>
        {card.description}
      </Typography>

      <Image
        src={card.image}
        alt="ai"
        width={300}
        height={150}
        style={{ width: "100%", borderRadius: 8 }}
      />
    </Box>
  );
};

export default DarkCard;