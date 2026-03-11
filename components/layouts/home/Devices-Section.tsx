import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { GridOff } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DevicesCard from "./components/Devices-Card";

const DevicesSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: 64,
            fontWeight: 900,
          }}
        >
          {homePage.devicesSection.heading}
        </Typography>

        <Grid container spacing={2}>
          {homePage.devicesSection.data.map((val, i) => (
            <Grid size={val.gridSize}>
              <DevicesCard
                bgImg={val.bgImg}
                img={val.img}
                heading={val.heading}
                description={val.description}
                gridSize={val.gridSize}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DevicesSection;
