import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WorkforceCard from "./components/WorkForce-Card";

const WorkForce = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.WHITE,
          p: 3,
          borderRadius: "10px",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              fontSize: 60,
            }}
          >
            {homePage.workforce.heading}
          </Typography>
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: 25,
              fonWeight: 400,
              mt: 2,
            }}
          >
            {homePage.workforce.description}
          </Typography>

          <Grid container sx={{ mt: 10 }} spacing={4}>
            {homePage.workforce.data.map((val, i) => (
              <Grid size={4} key={i} sx={{ mt: i == 1 ? 3 : 0 }}>
                <WorkforceCard
                  img={val.img}
                  heading={val.heading}
                  description={val.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default WorkForce;
