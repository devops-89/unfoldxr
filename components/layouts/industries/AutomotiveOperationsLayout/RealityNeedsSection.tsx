import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { AUTOMOTIVE_NEEDS, AUTOMOTIVE_REALITIES } from "./constants";

const RealityNeedsSection = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 6 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 34, md: 58 }, lineHeight: 1.08, textTransform: "uppercase", fontWeight: 900, color: "#000", maxWidth: 1650 }}>
          We Understand Automotive Operations and What It Takes to Run Them at Scale
        </Typography>

        <Grid container spacing={2.5} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: "#272829", color: "#fff", borderRadius: 2.5, boxShadow: "0 4px 10px rgba(182,236,26,0.25)" }}>
              <CardContent sx={{ p: 3.5 }}>
                <Typography sx={{ fontFamily: din.style.fontFamily, textTransform: "uppercase", fontSize: { xs: 26, md: 34 }, color: "#B6EC1A", mb: 1.5 }}>
                  Automotive Realities
                </Typography>
                {AUTOMOTIVE_REALITIES.map((item) => (
                  <Typography key={item} sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 17, md: 25 }, lineHeight: 1.45, mb: 1.4 }}>
                    - {item}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: "#272829", color: "#fff", borderRadius: 2.5, boxShadow: "0 4px 10px rgba(182,236,26,0.25)" }}>
              <CardContent sx={{ p: 3.5 }}>
                <Typography sx={{ fontFamily: din.style.fontFamily, textTransform: "uppercase", fontSize: { xs: 26, md: 34 }, color: "#B6EC1A", mb: 1.5 }}>
                  What It Needs
                </Typography>
                {AUTOMOTIVE_NEEDS.map((item) => (
                  <Typography key={item} sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 17, md: 25 }, lineHeight: 1.45, mb: 1.4 }}>
                    - {item}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography sx={{ textAlign: "center", fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 34 }, mt: 4 }}>
          UnfoldXR is designed specifically for these realities.
          <br />
          We bring intelligence into execution, without adding complexity.
        </Typography>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button variant="contained" sx={{ bgcolor: "#B6EC1A", color: "#000", px: 4, py: 1.2, borderRadius: "999px", fontFamily: din.style.fontFamily, fontSize: { xs: 16, md: 20 }, "&:hover": { bgcolor: "#a8da18" } }}>
            Watch How UnfoldXR Augments Automotive Operations
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RealityNeedsSection;
