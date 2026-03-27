import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const PlatformSummarySection = () => {
  return (
    <Box sx={{ bgcolor: "#f2f5f7", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#e9edf0", borderRadius: "28px", p: { xs: 3, md: 7 } }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 28, md: 56 }, lineHeight: 1.12 }}>
                One Platform to Capture, Train, and Improve
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 17, md: 27 }, lineHeight: { xs: "30px", md: "44px" } }}>
                UnfoldXR unifies knowledge capture, training delivery, real-time guidance, and performance tracking into one continuous system. By embedding AI and augmented reality into everyday work, it transforms learning from a one-time event into an ongoing, measurable capability.
              </Typography>
              <Typography sx={{ mt: 2, fontFamily: helvetica.style.fontFamily, fontSize: { xs: 17, md: 27 }, lineHeight: { xs: "30px", md: "44px" } }}>
                This is the future of workforce development practical, embedded, and built for real operations.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PlatformSummarySection;
