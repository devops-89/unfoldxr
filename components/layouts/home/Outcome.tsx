import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OutcomeCard from "./components/Outcome-Card";
import ContainedButton from "@/components/widgets/ContainedButton";

const Outcome = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.BLACK,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: din.style.fontFamily,
              fontSize: 64,
              color: COLORS.WHITE,
              fontWeight: 900,
            }}
          >
            {homePage.outcome.heading}
          </Typography>
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: 36,
              color: COLORS.WHITE,
            }}
          >
            {homePage.outcome.subHeading}
          </Typography>

          <Grid container spacing={4} mt={4}>
            {homePage.outcome.data.map((val, i) => (
              <Grid size={6} key={i}>
                <OutcomeCard number={val.number} label={val.description} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <ContainedButton>{homePage.outcome.cta}</ContainedButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Outcome;
