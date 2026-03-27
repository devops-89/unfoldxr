import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Container, Typography } from "@mui/material";
import { AUTOMOTIVE_IMAGES } from "./constants";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative", minHeight: { xs: 560, md: 900 }, color: "#fff", overflow: "hidden" }}>
      <Box
        component="img"
        src={AUTOMOTIVE_IMAGES.hero}
        alt="Automotive operations"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.34)" }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 2.5, md: 6 }, py: { xs: 16, md: 30 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, fontWeight: 900, textTransform: "uppercase", maxWidth: 970 }}>
          Built for Automotive Operations Where Precision Is Non-Negotiable
        </Typography>
        <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 30 }, lineHeight: 1.45, mt: 3, maxWidth: 1500 }}>
          UnfoldXR is an AI-powered augmented reality platform for automotive manufacturing and service that combines
          real-time intelligence, guided execution, and scalable expertise for complex, high-precision operations.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            borderRadius: "999px",
            bgcolor: "#B6EC1A",
            color: "#000",
            px: 4,
            py: 1.2,
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 18, md: 22 },
            "&:hover": { bgcolor: "#a8da18" },
          }}
        >
          Request a Demo
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
