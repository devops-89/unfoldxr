import React from "react";

import partnersHeroBg from "@/images/banner/partners/partners-hero-bg.png";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { partnersPage } from "@/utils/Website-Data";
import ContainedButton from "@/components/widgets/ContainedButton";
import OutlinedButton from "@/components/widgets/OutlinedButton";

const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${partnersHeroBg.src})`,
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
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}> 

              {/* Heading 1 */}
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
                {partnersPage.herosection.heading1}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  color: COLORS.WHITE,
                  fontSize: { xs: 16, md: 28 }, // 
                  fontWeight: 400,
                }}
              >
                {partnersPage.herosection.description}
              </Typography>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", md: "row" }} // 👈 stack on mobile
                alignItems={{ xs: "stretch", md: "center" }}
                spacing={2}
                sx={{ mt: 3 }}
              >
                <ContainedButton sx={{ width: { xs: "100%", md: "auto" } }}>
                  {partnersPage.herosection.cta1}
                </ContainedButton>

              </Stack>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;