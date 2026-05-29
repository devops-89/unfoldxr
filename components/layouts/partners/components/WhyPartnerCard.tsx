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
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 22px 45px rgba(0,0,0,0.22)",
          borderColor: "rgba(182, 236, 26, 0.3)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 72%)",
          transform: "translateX(-120%)",
          transition: "transform 0.65s ease",
          zIndex: 0,
        },
        "&:hover::after": {
          transform: "translateX(120%)",
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
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