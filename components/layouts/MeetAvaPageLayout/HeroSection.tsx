import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
const HeroSection = () => {
  const { heroSection: data } = meetAvaPage;
  return (
    <Box sx={{ bgcolor: COLORS.BLACK, pt: { xs: 14, md: 18 }, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
        <Box
          sx={{
            position: "relative",
            bgcolor: COLORS.CARD_BG_DARK,
            borderRadius: { xs: 3, md: "40px" },
            overflow: "hidden",
            minHeight: { xs: 520, md: 620 },
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3, md: 5 }, zIndex: 1 }}>
              <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 22, md: 36 }, fontWeight: 700, color: COLORS.WHITE, mb: 10, mt: { xs: 2, md: 4 } }}>
                {data.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 64 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: COLORS.WHITE,
                  lineHeight: 1.05,
                }}
              >
                {data.heading}
              </Typography>
              <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 }, color: COLORS.WHITE, lineHeight: 1.55, mt: 3, maxWidth: 620 }}>
                {data.subHeading}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                position: "relative",
                minHeight: { xs: 280, md: 600 },
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={data.image}
                alt=""
                sx={{
                  width: { xs: "90%", md: "110%" },
                  maxWidth: { md: 620 },
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  mr: { md:-15 },
                  mb: { md: -2 },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
