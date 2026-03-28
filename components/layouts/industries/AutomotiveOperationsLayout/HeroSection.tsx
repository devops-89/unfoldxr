import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Container, Typography } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const HeroSection = () => {
  const { heroSection: data } = industriesPage.automotive;
  return (
    <Box sx={{ position: "relative", minHeight: { xs: 560, md: 850 }, color: COLORS.WHITE, overflow: "hidden" }}>
      <Box
        component="img"
        src={data.image}
        alt=""
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 2.5, md: 6 }, py: { xs: 16, md: 25 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 34, md: 64 }, lineHeight: 1.05, fontWeight: 900, textTransform: "uppercase", maxWidth: 950 }}>
          {data.title}
        </Typography>
        <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 24 }, lineHeight: 1.5, mt: 3, maxWidth: 1200 }}>
          {data.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 5,
            borderRadius: "999px",
            bgcolor: COLORS.PRIMARY_GREEN,
            color: COLORS.BLACK,
            px: 5,
            py: 1.5,
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 18, md: 22 },
            textTransform: "uppercase",
            "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 },
          }}
        >
          Request a Demo
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
