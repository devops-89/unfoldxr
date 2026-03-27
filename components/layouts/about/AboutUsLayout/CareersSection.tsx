import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { CAREER_VALUES } from "./constants";

const CareersSection = () => (
  <Box sx={{ bgcolor: "#0b0b0b", color: "#fff", py: { xs: 8, md: 12 } }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
      <Typography sx={{ fontSize: { xs: 30, md: 64 }, fontWeight: 900, textTransform: "uppercase", mb: 2, fontFamily: din.style.fontFamily }}>Careers</Typography>
      <Typography sx={{ fontSize: { xs: 18, md: 36 }, lineHeight: 1.35, maxWidth: 1300, mb: 4, fontFamily: helvetica.style.fontFamily }}>
        At UnfoldXR, you will work at the intersection of AI, XR, enterprise systems, and human productivity.
      </Typography>
      <Grid container spacing={2.5}>
        {CAREER_VALUES.map((text, i) => (
          <Grid key={text} size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: "#272829", color: "#fff", borderRadius: 3 }}>
              <CardContent sx={{ p: 3, display: "flex", gap: 2, alignItems: "center" }}>
                <Typography sx={{ fontSize: { xs: 42, md: 90 }, color: "rgba(182,236,26,0.5)", fontWeight: 900, minWidth: 90, fontFamily: din.style.fontFamily }}>
                  {`0${i + 1}`}
                </Typography>
                <Typography sx={{ fontSize: { xs: 22, md: 36 }, textTransform: "uppercase", fontWeight: 700, fontFamily: helvetica.style.fontFamily }}>
                  {text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ mt: 4, mb: 0.5, fontSize: { xs: 18, md: 36 }, fontFamily: helvetica.style.fontFamily }}>
        If you believe technology should augment human potential, we would like to hear from you.
      </Typography>
      <Button variant="contained" sx={{ mt: 5, px: 4, py: 1.2, borderRadius: "999px", bgcolor: "#B6EC1A", color: "#000", fontWeight: 700, fontFamily: din.style.fontFamily, fontSize: { xs: 16, md: 23 }, "&:hover": { bgcolor: "#a7db18" } }}>
        Explore Open Roles
      </Button>
    </Container>
  </Box>
);

export default CareersSection;
