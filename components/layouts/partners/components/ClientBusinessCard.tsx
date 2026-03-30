import { Box, Typography } from "@mui/material";

import { PARTNERS_CLIENT_BUSINESS_CARD_PROPS } from "@/utils/types";



const ClientBusinessCard: React.FC<PARTNERS_CLIENT_BUSINESS_CARD_PROPS> = ( {id, title,description} ) => {
  const formattedNumber = id.toString().padStart(2, "0");

  return (
    <Box display="flex" gap={2} alignItems="flex-start">
      {/* Number */}
      <Typography
        variant="h4"
        fontWeight={700}
        color="#B6FF00"
        minWidth="40px"
      >
        {formattedNumber}
      </Typography>

      {/* Content */}
      <Box>
  <Typography variant="body1">
    <Box component="span" fontWeight={700} color="white">
      {title} -{" "}
    </Box>

    <Box component="span" color="gray">
      {description}
    </Box>
  </Typography>
</Box>
    </Box>
  );
};

export default ClientBusinessCard;