import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const UseCasesSection = () => {
  const { useCasesSection: data } = industriesPage.automotive;
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 6 } }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 32, md: 64 }, lineHeight: 1.1, textTransform: "uppercase", fontWeight: 900, color: COLORS.BLACK }}>
              {data.title}
            </Typography>
            <Button variant="contained" sx={{ mt: 5, borderRadius: "999px", bgcolor: COLORS.PRIMARY_GREEN, color: COLORS.BLACK, px: 4, py: 1.2, fontFamily: din.style.fontFamily, fontSize: 18, textTransform: "uppercase", "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 } }}>
              {data.ctaText}
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {data.items.map((label, i) => (
                <Box key={label} sx={{ border: "1px solid #E0E0E0", borderRadius: "100px", px: 3, py: 1.5, display: "flex", alignItems: "center", gap: 2.5, transition: "all 0.3s ease", "&:hover": { borderColor: COLORS.PRIMARY_GREEN, bgcolor: COLORS.PRIMARY_GREEN_ALPHA_05 } }}>
                  <Box sx={{ width: 48, height: 48, minWidth: 48, borderRadius: "50%", bgcolor: COLORS.BLACK, color: COLORS.WHITE, display: "grid", placeItems: "center", fontFamily: din.style.fontFamily, fontSize: 20, fontWeight: 700 }}>
                    {`0${i + 1}`}
                  </Box>
                  <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontWeight: 700, fontSize: { xs: 16, md: 22 }, color: COLORS.BLACK }}>{label}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UseCasesSection;
