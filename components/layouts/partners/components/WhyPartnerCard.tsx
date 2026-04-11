import { Box, Divider, Typography } from "@mui/material";
import { PARTNERS_WHY_PARTNER_CARD_PROPS } from "@/utils/types";

const WhyPartnerCard = ({ title, description }: PARTNERS_WHY_PARTNER_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1F21",
        borderRadius: "20px",
        borderLeft: "4px solid #B6EC1A",
        p: { xs: 4, md: 4 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography
        sx={{
          color: "#ffffff",
          fontWeight: 800,
          fontSize: { xs: 22, md: 18 },
          lineHeight: "30px",
        }}
      >
        {title}
      </Typography>

      <Divider
        sx={{
          borderBottom: 2,
          width: "40%",
          my: 2,
          borderColor: "rgba(255, 255, 255, 0.8)",
          mx: { xs: "auto", md: 0 },
        }}
      />

      <Typography
        sx={{
          color: "#BDBDBD",
          fontSize: 16,
          lineHeight: "30px",
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default WhyPartnerCard;