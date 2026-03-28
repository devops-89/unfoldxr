import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const RealityNeedsSection = () => {
  const { realityNeedsSection: data } = industriesPage.automotive;
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 6 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 32, md: 54 }, lineHeight: 1.1, textTransform: "uppercase", fontWeight: 900, color: COLORS.BLACK, maxWidth: 1400 }}>
          {data.title}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: COLORS.CARD_BG_DARK, color: COLORS.WHITE, borderRadius: 4, height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography sx={{ fontFamily: din.style.fontFamily, textTransform: "uppercase", fontSize: { xs: 24, md: 32 }, color: COLORS.PRIMARY_GREEN, mb: 3 }}>
                  Automotive Realities
                </Typography>
                {data.realities.map((item) => (
                  <Typography key={item} sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 22 }, lineHeight: 1.5, mb: 1.5 }}>
                    - {item}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: COLORS.CARD_BG_DARK, color: COLORS.WHITE, borderRadius: 4, height: "100%" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography sx={{ fontFamily: din.style.fontFamily, textTransform: "uppercase", fontSize: { xs: 24, md: 32 }, color: COLORS.PRIMARY_GREEN, mb: 3 }}>
                  What It Needs
                </Typography>
                {data.needs.map((item) => (
                  <Typography key={item} sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 22 }, lineHeight: 1.5, mb: 1.5 }}>
                    - {item}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center", fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 28 }, mt: 8, maxWidth: 1200, mx: "auto", color: COLORS.BLACK, fontWeight: 500 }}>
          {data.bottomText}
        </Typography>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" sx={{ bgcolor: COLORS.PRIMARY_GREEN, color: COLORS.BLACK, px: 5, py: 1.5, borderRadius: "999px", fontFamily: din.style.fontFamily, fontSize: { xs: 16, md: 20 }, textTransform: "uppercase", "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 } }}>
            {data.ctaText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RealityNeedsSection;
