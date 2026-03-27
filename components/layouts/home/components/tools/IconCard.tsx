// components/tools/IconCard.tsx

import { Box, Stack, Typography } from "@mui/material";
import { ICON_CARD_PROPS } from "@/utils/types";
import Image from "next/image";

const IconCard = ({ card }: { card: ICON_CARD_PROPS }) => {
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
      <Typography fontWeight={700} mb={2}>
        {card.title}
      </Typography>

      <Stack direction="row" spacing={2}>
       

{card.icons.map((icon, i) => (
  <Box
    key={i}
    sx={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "#1F1F1F",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src={icon}
      alt="icon"
      width={20}
      height={20}
    />
  </Box>
))}
      </Stack>
    </Box>
  );
};

export default IconCard;