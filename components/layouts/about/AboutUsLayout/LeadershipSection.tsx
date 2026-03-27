import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { ABOUT_IMAGES } from "./constants";

const LeadershipSection = () => (
  <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2.5, md: 5 } }}>
    <Typography sx={{ fontSize: { xs: 30, md: 64 }, fontWeight: 900, textTransform: "uppercase", mb: 5, fontFamily: din.style.fontFamily }}>
      Leadership
    </Typography>
    <Grid container spacing={5} alignItems="center">
      <Grid size={{ xs: 12, md: 4.2 }}>
        <Box component="img" src={ABOUT_IMAGES.leaderOne} alt="Ankush Jagga" sx={{ width: "100%", borderRadius: 3, bgcolor: "#f4f4f4" }} />
      </Grid>
      <Grid size={{ xs: 12, md: 7.8 }}>
        <Typography sx={{ fontSize: { xs: 28, md: 52 }, fontWeight: 900, textTransform: "uppercase", fontFamily: din.style.fontFamily }}>
          Ankush Jagga
        </Typography>
        <Typography sx={{ fontSize: { xs: 20, md: 30 }, letterSpacing: 0.5, mb: 2, fontFamily: din.style.fontFamily }}>CEO & Co-Founder</Typography>
        <Typography sx={{ fontSize: { xs: 17, md: 24 }, lineHeight: 1.65, fontFamily: helvetica.style.fontFamily }}>
          Ankush is a visionary entrepreneur focused on bringing AI to deskless workers globally. With 23+ years of enterprise
          technology experience, he has built and scaled products with measurable business impact and leads UnfoldXR with a
          long-term, human-first AI vision.
        </Typography>
      </Grid>
    </Grid>

    <Grid container spacing={5} alignItems="center" sx={{ mt: 1 }}>
      <Grid size={{ xs: 12, md: 7.8 }}>
        <Typography sx={{ fontSize: { xs: 28, md: 52 }, fontWeight: 900, textTransform: "uppercase", fontFamily: din.style.fontFamily }}>
          Ritesh Gangnani
        </Typography>
        <Typography sx={{ fontSize: { xs: 20, md: 30 }, letterSpacing: 0.5, mb: 2, fontFamily: din.style.fontFamily }}>Co-founder & Head Architect</Typography>
        <Typography sx={{ fontSize: { xs: 17, md: 24 }, lineHeight: 1.65, fontFamily: helvetica.style.fontFamily }}>
          Ritesh leads AI and technology strategy at UnfoldXR. With deep expertise in AI, ML, and computer vision, he has built
          production-grade AI systems and scalable infrastructure that powers next-generation frontline experiences.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 4.2 }}>
        <Box component="img" src={ABOUT_IMAGES.leaderTwo} alt="Ritesh Gangnani" sx={{ width: "100%", borderRadius: 3, bgcolor: "#f4f4f4" }} />
      </Grid>
    </Grid>
  </Container>
);

export default LeadershipSection;
