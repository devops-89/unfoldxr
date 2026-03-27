import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { AUTOMOTIVE_USE_CASES } from "./constants";

const UseCasesSection = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 6 } }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 34, md: 64 }, lineHeight: 1.05, textTransform: "uppercase", fontWeight: 900 }}>
              Key Use Cases Across Automotive Industry
            </Typography>
            <Button variant="contained" sx={{ mt: 3, borderRadius: "999px", bgcolor: "#B6EC1A", color: "#000", px: 3, "&:hover": { bgcolor: "#a8da18" } }}>
              Know More
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={1.5}>
              {AUTOMOTIVE_USE_CASES.map((label, i) => (
                <Box key={label} sx={{ border: "1px solid #d0d0d0", borderRadius: "39px", px: 2, py: 1.2, display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "#000", color: "#fff", display: "grid", placeItems: "center", fontFamily: din.style.fontFamily }}>
                    {`0${i + 1}`}
                  </Box>
                  <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontWeight: 700, fontSize: { xs: 16, md: 24 } }}>{label}</Typography>
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
