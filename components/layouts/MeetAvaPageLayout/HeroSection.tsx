import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography, Container } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const HeroSection = () => {
  const { heroSection: data } = meetAvaPage;
  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 10 },
        pb: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "90%", md: "85%", lg: "83%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="stretch">
          <Grid
            size={{ xs: 12, md: 6.5, lg: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            {/* Small Label Title */}
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 14, md: 18, lg: 20 },
                fontWeight: 700,
                color: COLORS.WHITE,
                lineHeight: 1.2,
                mb: { xs: 3, md: 4 },
                letterSpacing: "0.02em",
                opacity: 0.9,
              }}
            >
              {data.title}
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 56, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.WHITE,
                  lineHeight: { xs: "35px", md: "52px" },
                  whiteSpace: "pre-line",
                  mb: 1,
              }}
            >
              {data.heading}
            </Typography>

            {/* Subheading / Description */}
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 18},
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
                maxWidth: { md: "90%", lg: "85%" },
              }}
            >
              {data.subHeading}
            </Typography>
          </Grid>

          {/* Right Section: Image */}
          <Grid
            size={{ xs: 12, md: 5.5, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "120%", md: "140%", lg: "150%" },
                maxWidth: { xs: 600, md: 1000, lg: 1200 },
                mr: { md: -10, lg: -25},
                mt: "auto",
              }}
            >
              <Box
                component="img"
                src={data.image}
                alt="Meet AVA"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  filter: "drop-shadow(0px 0px 50px rgba(162, 211, 37, 0.15))",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Background Decorative Blur (Optional, for premium feel) */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          bgcolor: "rgba(162, 211, 37, 0.05)",
          filter: "blur(150px)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default HeroSection;
