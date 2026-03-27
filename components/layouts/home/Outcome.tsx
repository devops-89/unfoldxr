import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OutcomeCard from "./components/Outcome-Card";
import ContainedButton from "@/components/widgets/ContainedButton";

const Outcome = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.BLACK,
          height: { xs: "auto", md: "100vh" }, // 👈 fix mobile overflow
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "center",
          py: { xs: 6, md: 0 }, // 👈 spacing for mobile
        }}
      >
        <Container maxWidth="lg">
          
          {/* Heading */}
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 32, md: 64 }, // 👈 responsive
              color: COLORS.WHITE,
              fontWeight: 900,
            }}
          >
            {homePage.outcome.heading}
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 18, md: 36 },
              color: COLORS.WHITE,
            }}
          >
            {homePage.outcome.subHeading}
          </Typography>

          {/* Cards */}
          <Grid container spacing={{ xs: 2, md: 4 }} mt={4}>
            {homePage.outcome.data.map((val, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}> {/* 👈 stack on mobile */}
                <OutcomeCard number={val.number} label={val.description} />
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <ContainedButton sx={{ width: { xs: "100%", md: "auto" } }}>
              {homePage.outcome.cta}
            </ContainedButton>
          </Box>

        </Container>
      </Box>
    </Box>
  );
};

export default Outcome;