import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OutcomeCard from "./components/Outcome-Card";
import ContainedButton from "@/components/widgets/ContainedButton";

const Outcome = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        py: { xs: 8, md: 8 },
        // minHeight: "75vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "95%", lg: "90%" },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 4, md: 8, xl: 10 } }}>
          {/* Heading */}
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 28, md: 36 },
              color: COLORS.WHITE,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: { xs: "38px", md: "52px" },
            }}
          >
            {homePage.outcome.heading}
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 14, md: 18 },
              color: COLORS.WHITE,
              fontWeight: 400,
              lineHeight: { xs: "22px", md: "30px" },
              letterSpacing: "0.52px",
              mt: 1,
              mb: 2,
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
                height: { xs: "45px", md: "60px" },
                fontSize: { xs: 16, md: 16 },
                lineHeight: "30px",
              }}
            >
              {homePage.outcome.cta}
            </ContainedButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Outcome;
