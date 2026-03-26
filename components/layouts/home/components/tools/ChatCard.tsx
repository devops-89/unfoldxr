

import { Box, Stack, Typography } from "@mui/material";
import { CHAT_CARD_PROPS } from "@/utils/types";

const ChatCard = ({ card }: { card: CHAT_CARD_PROPS }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#F5F5F5",
        height: "100%",
      }}
    >
      <Typography fontWeight={700}>{card.title}</Typography>

      <Typography fontSize={14} color="gray" my={1}>
        {card.description}
      </Typography>

      <Stack spacing={1}>
        <Box sx={{ bgcolor: "#D1FAE5", p: 1, borderRadius: 2, width: "70%" }} />
        <Box sx={{ bgcolor: "#E5E7EB", p: 1, borderRadius: 2, width: "50%" }} />
      </Stack>
    </Box>
  );
};

export default ChatCard;