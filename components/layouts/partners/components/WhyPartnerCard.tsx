import { Box, Divider, Typography } from "@mui/material";
import { PARTNERS_WHY_PARTNER_CARD_PROPS } from "@/utils/types";

const WhyPartnerCard = ({ title, description }: PARTNERS_WHY_PARTNER_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        borderRadius: "10px",
        borderLeft:"2px solid #B6EC1A",
        p: 3,
        height: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#ffffff",
          fontWeight: 700,
          fontSize: 25,
        }}
      >
        {title}
      </Typography>

      <Divider sx={{borderBottom:2, width:"70%",my:2,color:"#FFFFFF"}} />

      <Typography
        sx={{
          color: "#CFCFCF",
          fontSize: 18,
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