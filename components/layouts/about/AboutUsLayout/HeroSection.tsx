import { Button, Container, Stack, Typography, Box } from "@mui/material";
import { din } from "@/utils/fonts";
import { ABOUT_IMAGES } from "./constants";

const HeroSection = () => (
  <Box
    sx={{
      position: "relative",
      minHeight: { xs: 560, md: 720 },
      display: "flex",
      alignItems: "center",
      color: "#fff",
      overflow: "hidden",
    }}
  >
    <Box
      component="img"
      src={ABOUT_IMAGES.hero}
      alt="Frontline worker with AR headset"
      sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.48)" }}
    />
    <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 3, md: 6 } }}>
      <Stack spacing={4} sx={{ maxWidth: 820 }}>
        <Typography sx={{ fontSize: { xs: 38, md: 90 }, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", fontFamily: din.style.fontFamily }}>
          An intelligent work platform built for the frontline.
        </Typography>
        <Button variant="contained" sx={{ width: "fit-content", px: 4, py: 1.2, borderRadius: "999px", bgcolor: "#B6EC1A", color: "#000", fontWeight: 700, fontFamily: din.style.fontFamily, fontSize: { xs: 16, md: 22 }, "&:hover": { bgcolor: "#a7db18" } }}>
          Schedule a Demo
        </Button>
      </Stack>
    </Container>
  </Box>
);

export default HeroSection;
