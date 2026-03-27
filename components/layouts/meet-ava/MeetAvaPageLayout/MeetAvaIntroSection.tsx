import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MEET_AVA_IMAGES } from "./constants";

const MeetAvaIntroSection = () => {
  return (
    <Box sx={{ bgcolor: "#f7f7f7", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box component="img" src={MEET_AVA_IMAGES.introImage} alt="Meet AVA" sx={{ width: "100%", borderRadius: { xs: 3, md: "45px" }, display: "block" }} />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 36, md: 64 }, fontWeight: 900, textTransform: "uppercase", color: "#000", mb: 3 }}>
              Meet AVA,
            </Typography>
            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 }, color: "#000", lineHeight: 1.55, textAlign: "justify", mb: 2 }}>
              Named after our co-founder Ankush Jagga&apos;s daughter, AVA is more than an acronym. When you build something that
              carries the name of someone you love, you build it with care, responsibility, and a long-term vision.
            </Typography>
            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 }, color: "#000", lineHeight: 1.55, textAlign: "justify", mb: 2 }}>
              AVA is not just an assistant. It is an agentic AI, designed to understand context, make decisions, and move work
              forward. Built into UnfoldXR, AVA stands beside frontline teams when work feels complex or uncertain. It diagnoses
              intelligently, guides thoughtfully, and adapts in real time.
            </Typography>
            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 }, color: "#000", lineHeight: 1.55, textAlign: "justify" }}>
              Rooted in curiosity, care, and creativity, AVA has one purpose: not to replace human capability, but to strengthen
              it - helping every worker perform with clarity, confidence, and growth.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetAvaIntroSection;
