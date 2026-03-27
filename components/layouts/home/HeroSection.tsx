import React from "react";
import banner from "@/images/banner/homePage/hero.png";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import ContainedButton from "@/components/widgets/ContainedButton";
import OutlinedButton from "@/components/widgets/OutlinedButton";

const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "auto", md: "100vh" }, // 👈 fix mobile height
          minHeight: { xs: "100vh", md: "auto" }, // 👈 still full screen feel
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          py: { xs: 6, md: 0 }, // 👈 spacing for mobile
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}> {/* 👈 full width on mobile */}
              
              {/* Heading 1 */}
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 64 }, // 👈 responsive text
                  textTransform: "uppercase",
                  WebkitTextStroke: { xs: "2px", md: "4px" }, // 👈 thinner on mobile
                  WebkitTextStrokeColor: COLORS.WHITE,
                  color: COLORS.TRANSPARENT,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                }}
              >
                {homePage.herosection.heading1}
              </Typography>

              {/* Heading 2 */}
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 64 },
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: COLORS.WHITE,
                  my: 2,
                }}
              >
                {homePage.herosection.heading2}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  color: COLORS.WHITE,
                  fontSize: { xs: 16, md: 28 }, // 👈 readable mobile
                  fontWeight: 400,
                }}
              >
                {homePage.herosection.description}
              </Typography>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", md: "row" }} // 👈 stack on mobile
                alignItems={{ xs: "stretch", md: "center" }}
                spacing={2}
                sx={{ mt: 3 }}
              >
                <ContainedButton sx={{ width: { xs: "100%", md: "auto" } }}>
                  {homePage.herosection.cta1}
                </ContainedButton>

                <OutlinedButton sx={{ width: { xs: "100%", md: "auto" } }}>
                  {homePage.herosection.cta2}
                </OutlinedButton>
              </Stack>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;