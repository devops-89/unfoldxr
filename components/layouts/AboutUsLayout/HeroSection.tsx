import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "@/images/about-us/about-homepage.png";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import ContainedButton from "@/components/widgets/ContainedButton";
const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `${COLORS.BLACK_OVERLAY}, url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "100vh", md: "auto" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          py: { xs: 6, md: 0 },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, px: { xs: 3, md: 6 } }}>
          <Grid container>
            <Grid size={{ xs: 12, lg: 9 }} sx={{ ml: { xs: 0, lg: "86px" }, mt  : { md: "25vh" } }}>
              <Typography
                sx={{
                  fontSize: { xs: 40, md: 90 },
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: COLORS.WHITE,
                  lineHeight: { xs: 1.2, md: "112px" },
                  mb: 4,
                  background: COLORS.WHITE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {aboutPage.herosection.heading}
              </Typography>
              <ContainedButton sx={{ width: { xs: "100%", md: "auto" } }}>
                {aboutPage.herosection.cta}
              </ContainedButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default HeroSection;

