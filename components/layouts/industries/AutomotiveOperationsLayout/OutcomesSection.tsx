import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const OutcomesSection = () => {
  const { outcomesSection: data } = industriesPage.automotive;
  return (
    <Box sx={{ position: "relative", minHeight: { xs: 800, md: 950 }, color: COLORS.WHITE, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <Box component="img" src={data.image} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <Box sx={{ position: "absolute", inset: 0, bgcolor: COLORS.BLACK_OVERLAY_DARK }} />
      
      <Container maxWidth="xl" sx={{ position: "relative", px: { xs: 2, md: 6 }, py: { xs: 8, md: 10 } }}>
        <Box sx={{ border: `1.5px solid ${COLORS.PRIMARY_GREEN}`, borderRadius: 4, p: { xs: 3, md: 8 }, pt: { xs: 6, md: 8 }, position: "relative" }}>
          
          <Grid container spacing={6} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 32, md: 64 }, lineHeight: 1.1, textTransform: "uppercase", fontWeight: 900, maxWidth: 500 }}>
                {data.title}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={{ xs: 4, md: 6 }}>
                {data.metrics.map((metric, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <Stack spacing={1}>
                      <Typography sx={{ fontFamily: din.style.fontFamily, color: COLORS.PRIMARY_GREEN, fontSize: { xs: 40, md: 64 }, fontWeight: 900, lineHeight: 1 }}>
                        {metric.value}
                      </Typography>
                      <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 24 }, lineHeight: 1.4, color: COLORS.WHITE }}>
                        {metric.text}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OutcomesSection;
