import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const KnowledgeSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 32, md: 56 }, lineHeight: 1.12 }}>
              With UnfoldXR, turn expertise into scalable knowledge
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box component="ul" sx={{ m: 0, pl: 3 }}>
              <Typography component="li" sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 30 }, mb: 1.5 }}>
                Loss of expertise, and rework in training and onboarding drive up costs and time
              </Typography>
              <Typography component="li" sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 30 }, mb: 1.5 }}>
                Learning through manuals, shadowing, and disconnected content slows skill development
              </Typography>
              <Typography component="li" sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 30 } }}>
                Knowledge tied to individuals leads to gaps when experienced workers leave
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 4, fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 27 }, lineHeight: { xs: "32px", md: "44px" } }}>
          Resulting in inconsistent performance, longer training cycles, and repeated errors. UnfoldXR unifies the lifecycle - capture, structure, and apply knowledge, delivering faster learning, consistent execution, and scalable expertise.
        </Typography>
      </Container>
    </Box>
  );
};

export default KnowledgeSection;
