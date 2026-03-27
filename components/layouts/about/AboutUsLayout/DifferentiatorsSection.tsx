import { Box, Container, Stack, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { ABOUT_IMAGES } from "./constants";

const DifferentiatorsSection = () => (
  <Box sx={{ bgcolor: "#050505", color: "#fff", py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
    <Box component="img" src={ABOUT_IMAGES.difference} alt="What makes UnfoldXR different" sx={{ position: "absolute", right: 0, top: 0, height: "100%", opacity: 0.22, display: { xs: "none", md: "block" } }} />
    <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 2.5, md: 5 } }}>
      <Typography sx={{ fontSize: { xs: 30, md: 64 }, fontWeight: 900, textTransform: "uppercase", maxWidth: 740, fontFamily: din.style.fontFamily }}>
        What Makes UnfoldXR Different?
      </Typography>
      <Stack spacing={3} sx={{ mt: 4, maxWidth: 860 }}>
        <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 700, textTransform: "uppercase", fontFamily: din.style.fontFamily }}>Built for the 80% Workforce</Typography>
        <Typography sx={{ fontSize: { xs: 18, md: 28 }, lineHeight: 1.55, fontFamily: helvetica.style.fontFamily }}>Designed for frontline teams, not desk users. Intelligence delivered where real work happens.</Typography>
        <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 700, textTransform: "uppercase", pt: 1, fontFamily: din.style.fontFamily }}>Built for Every Stage of Work</Typography>
        <Typography sx={{ fontSize: { xs: 18, md: 28 }, lineHeight: 1.55, fontFamily: helvetica.style.fontFamily }}>From planning to execution to reporting. One connected, continuous workflow.</Typography>
        <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 700, textTransform: "uppercase", pt: 1, fontFamily: din.style.fontFamily }}>Creating the Future of Work</Typography>
        <Typography sx={{ fontSize: { xs: 18, md: 28 }, lineHeight: 1.55, fontFamily: helvetica.style.fontFamily }}>
          Innovation is a continuous process and we are determined to change how the future of work looks. Human expertise,
          augmented by technology.
        </Typography>
      </Stack>
    </Container>
  </Box>
);

export default DifferentiatorsSection;
