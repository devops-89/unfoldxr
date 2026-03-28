import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const PlaceholderSection = () => {
  const { placeholderSection: data } = meetAvaPage;

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
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
              {data.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 28 },
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {data.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={data.image}
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
