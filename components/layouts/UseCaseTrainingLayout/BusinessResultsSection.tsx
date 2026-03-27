import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { helvetica, inter, din } from "@/utils/fonts";
import { results } from "./data";

const BusinessResultsSection = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 32, md: 64 }, maxWidth: 760 }}>
          Business Results You Can Measure
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {results.map((item) => (
            <Grid key={item} size={{ xs: 12, md: 4 }}>
              <Box sx={{ bgcolor: "#272829", color: "#fff", borderRadius: "20px", p: 3, minHeight: 360, display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: { xs: 22, md: 32 }, lineHeight: 1.2 }}>{item}</Typography>
                <Typography sx={{ mt: 2, color: "#d3d3d3", fontFamily: helvetica.style.fontFamily }}>
                  Operational outcomes improve with structured workflow execution, contextual guidance, and measurable performance tracking.
                </Typography>
                <Button sx={{ mt: "auto", bgcolor: "#b6ec1a", color: "#000", borderRadius: 99, alignSelf: "flex-start", textTransform: "none" }}>Learn More</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessResultsSection;
