import { Box, Typography } from "@mui/material";
import { PARTNERS_CLIENT_BUSINESS_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";

const ClientBusinessCard: React.FC<PARTNERS_CLIENT_BUSINESS_CARD_PROPS> = ({
  id,
  title,
  description,
}) => {
  const formattedNumber = id.toString().padStart(2, "0");

  return (
    <Box display="flex" gap={3} alignItems="center">
      {/* Number */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 40 },
          fontWeight: 900,
          color: COLORS.PRIMARY_HOVER,
          minWidth: { xs: "50px", md: "70px" },
          lineHeight: 1,
        }}
      >
        {formattedNumber}
      </Typography>

      {/* Content */}
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 18 },
            lineHeight: 1.4,
            color: "#fff",
          }}
        >
          <Box component="span" sx={{ fontWeight: 800, textTransform: "uppercase" }}>
            {title}
          </Box>
          <Box component="span" sx={{ fontWeight: 400, mx: 1 }}>
            -
          </Box>
          <Box component="span" sx={{ fontWeight: 400, opacity: 0.9 }}>
            {description}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default ClientBusinessCard;