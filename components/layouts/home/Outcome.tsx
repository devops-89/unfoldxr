import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OutcomeCard from "./components/Outcome-Card";
import ContainedButton from "@/components/widgets/ContainedButton";

const Outcome = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, py: { xs: 8, md: 12 }, minHeight: "85vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 56 },
            color: COLORS.WHITE,
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          {homePage.outcome.heading}
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 14, md: 24 },
            color: COLORS.WHITE,
            fontWeight: 400,
            mt: 1,
            mb: 5,
            opacity: 0.8,
          }}
        >
          {homePage.outcome.subHeading}
        </Typography>

        {/* 2x2 Cards Grid */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {homePage.outcome.data.map((val, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <OutcomeCard number={val.number} label={val.description} />
              
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <ContainedButton
            sx={{
              width: { xs: "100%", md: "auto" },
              height: { xs: "45px", md: "62px" },
              fontSize: { xs: 16, md: 23 },
            }}
          >
            {homePage.outcome.cta}
          </ContainedButton>
        </Box>

      </Container>
    </Box>
  );
};

export default Outcome;