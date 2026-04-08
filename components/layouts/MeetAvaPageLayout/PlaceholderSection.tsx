import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const PlaceholderSection = () => {
  const { placeholderSection: data } = meetAvaPage;

  return (
    <Box
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, pb: { xs: 8, md: 12 } }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 48 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: "52px",
                mb: 2,
              }}
            >
              {data.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 22 },
                lineHeight: "30px",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "pre-line",
              }}
            >
              {data.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Box
              component="img"
              src={data.image}
              alt=""
              sx={{
                maxWidth: "100%",
                width: { xs: 280, md: 400 },
                height: "auto",
                transform: "rotate(9deg)",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlaceholderSection;
