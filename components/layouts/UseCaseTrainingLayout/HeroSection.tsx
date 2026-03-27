import { Box, Button, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { hero } from "./data";

const HeroSection = () => {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", color: "#fff", display: "flex", alignItems: "center" }}>
      <Box component="img" src={hero} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.60)" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: { xs: 12, md: 14 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 34, md: 64 }, lineHeight: 1.1, maxWidth: 760 }}>
          Training, Onboarding & Knowledge Capture
        </Typography>
        <Typography sx={{ mt: 2, fontFamily: din.style.fontFamily, fontWeight: 700, fontSize: { xs: 22, md: 36 } }}>
          The Strongest Teams Learn in the Flow of Work.
        </Typography>
        <Typography sx={{ mt: 2, fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 }, lineHeight: { xs: "30px", md: "44px" }, maxWidth: 1020 }}>
          UnfoldXR brings AI- and augmented reality-powered intelligence into learning and capability building and makes it available right at the moment of work.
        </Typography>
        <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button sx={{ bgcolor: "#b6ec1a", color: "#000", borderRadius: 99, px: 4, py: 1.5, fontFamily: din.style.fontFamily, fontSize: 22, textTransform: "none", "&:hover": { bgcolor: "#b6ec1a" } }}>
            Watch in action
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#b6ec1a", color: "#b6ec1a", borderRadius: 99, px: 4, py: 1.5, fontFamily: din.style.fontFamily, fontSize: 22, textTransform: "none" }}>
            Request a Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
