import { Box, Typography } from "@mui/material";
import { PARTNERS_WHY_PARTNER_CARD_PROPS } from "@/utils/types";

const WhyPartnerCard = ({ title, description }: PARTNERS_WHY_PARTNER_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        borderRadius: "10px",
        p: 3,
        height: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#B6EC1A",
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#CFCFCF",
          fontSize: 14,
          mt: 1,
          lineHeight: "22px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default WhyPartnerCard;