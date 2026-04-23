"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { useDemoModal } from "@/components/context/DemoModalContext";

const HeroSection = () => {
  const { heroSection: data } = meetAvaPage;
  const { openModal } = useDemoModal();

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 18, md: 4 },
        pb: 0,
        position: "relative",
        overflow: "hidden",
        "@keyframes fadeInUp": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
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
              animation: "fadeInUp 1s ease-out forwards",
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
                letterSpacing: "0.05em",
                opacity: 0.9,
                textTransform: "uppercase",
              }}
            >
              {data.title}
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 26, md: 50, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.WHITE,
                lineHeight: { xs: "1.1", md: "1.1" },
                whiteSpace: "pre-line",
                mb: 4,
              }}
            >
              {data.heading}
            </Typography>

            {/* Subheading / Description */}
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 19 },
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
              alignItems: "flex-start",
              position: "relative",
              animation: "fadeInUp 1.2s ease-out forwards",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "120%", md: "140%", lg: "150%" },
                maxWidth: { xs: 600, md: 1000, lg: 1200 },
                mr: { md: -10, lg: -25 },
                mt: { xs: 4, md: 0 },
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
                  filter: "drop-shadow(0px 0px 80px rgba(162, 211, 37, 0.25))",
                  animation: "float 6s ease-in-out infinite",
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
          top: "10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          bgcolor: "rgba(162, 211, 37, 0.08)",
          filter: "blur(180px)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default HeroSection;
