import React from "react";
import banner from "@/images/banner/homePage/hero.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
          height: "100vh",
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={8}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 64,
                  textTransform: "uppercase",
                  WebkitTextStroke: "4px",
                  WebkitTextStrokeColor: COLORS.WHITE,
                  color: COLORS.TRANSPARENT,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                }}
              >
                {homePage.herosection.heading1}
              </Typography>
              <Typography
                sx={{
                  fontSize: 64,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: COLORS.WHITE,
                  my: 2,
                }}
              >
                {homePage.herosection.heading2}
              </Typography>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  color: COLORS.WHITE,
                  fontSize: 28,
                  fontWeight: 400,
                }}
              >
                {homePage.herosection.description}
              </Typography>
              <Stack
                direction="row"
                alignItems={"center"}
                spacing={2}
                sx={{ mt: 3 }}
              >
                <ContainedButton>{homePage.herosection.cta1}</ContainedButton>

                <OutlinedButton>{homePage.herosection.cta2}</OutlinedButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
