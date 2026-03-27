import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AUTOMOTIVE_IMAGES, AUTOMOTIVE_OUTCOMES } from "./constants";

const OutcomesSection = () => {
  return (
    <Box sx={{ position: "relative", minHeight: { xs: 800, md: 1080 }, color: "#fff", overflow: "hidden" }}>
      <Box component="img" src={AUTOMOTIVE_IMAGES.outcomesBg} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.69)" }} />
      <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 2.5, md: 6 }, py: { xs: 7, md: 8 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 34, md: 64 }, lineHeight: 1.05, textTransform: "uppercase", fontWeight: 900, mb: 4 }}>
          Driving Measurable Outcomes in Automotive Operations
        </Typography>
        <Grid container spacing={3}>
          {AUTOMOTIVE_OUTCOMES.map((metric) => (
            <Grid key={metric.value + metric.text} size={{ xs: 12, md: 6 }}>
              <Box sx={{ border: "2px solid #1FFF0F", borderRadius: 2.5, p: 2.5 }}>
                <Typography sx={{ fontFamily: din.style.fontFamily, color: "#B6EC1A", fontSize: { xs: 36, md: 56 }, fontWeight: 900 }}>{metric.value}</Typography>
                <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 25 }, lineHeight: 1.45 }}>{metric.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OutcomesSection;
