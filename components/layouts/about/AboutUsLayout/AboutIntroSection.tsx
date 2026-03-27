import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const AboutIntroSection = () => (
  <Box sx={{ bgcolor: "#000", py: { xs: 6, md: 10 } }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
      <Card sx={{ borderRadius: { xs: 3, md: "45px" }, boxShadow: "none", bgcolor: "#fff" }}>
        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ fontSize: { xs: 34, md: 64 }, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.05, fontFamily: din.style.fontFamily }}>
                About UnfoldXR
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <Typography sx={{ fontSize: { xs: 18, md: 28 }, lineHeight: 1.55, fontFamily: helvetica.style.fontFamily }}>
                  Frontline work runs the world. Yet most frontline teams still operate without real-time technological support. We are here to change that.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, md: 28 }, lineHeight: 1.55, fontFamily: helvetica.style.fontFamily }}>
                  UnfoldXR is a human productivity augmentation platform built to bring AI and Extended Reality into real-world operations. We deliver moment-of-work support that guides teams before, during, and after execution, creating one continuous system. We turn physical environments into intelligent workspaces.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, md: 28 }, lineHeight: 1.55, fontFamily: helvetica.style.fontFamily }}>
                  We exist to augment, not replace, human capability. Our platform is human-first and built to strengthen judgment, precision, and confidence where decisions happen.
                </Typography>
                <Typography sx={{ fontSize: { xs: 30, md: 49 }, lineHeight: 1.05, fontWeight: 700, fontFamily: helvetica.style.fontFamily }}>
                  Built for enterprises, UnfoldXR delivers measurable productivity, not experimental technology.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

export default AboutIntroSection;
