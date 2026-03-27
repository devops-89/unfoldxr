import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MEET_AVA_IMAGES } from "./constants";

const PlaceholderSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 32, md: 64 },
                fontWeight: 900,
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Placeholder heading
            </Typography>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 28 },
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              *content will be given by team UnfoldXR
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={MEET_AVA_IMAGES.phonePlaceholder}
              alt=""
              sx={{
                maxWidth: "100%",
                width: { xs: 280, md: 420 },
                height: "auto",
                transform: "rotate(9deg)",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlaceholderSection;
