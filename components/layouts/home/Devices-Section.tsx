import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DevicesCard from "./components/Devices-Card";

const DevicesSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "auto", md: "100vh" }, 
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "center",
        py: { xs: 6, md: 10 }, 
      }}
    >
      <Container maxWidth="lg">
        
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 64 }, 
            fontWeight: 900,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {homePage.devicesSection.heading}
        </Typography>

        {/* Grid */}
        <Grid container spacing={{ xs: 2, md: 2 }}>
          {homePage.devicesSection.data.map((val, i) => (
            <Grid
              key={i}
              size={{ xs: 12, md: val.gridSize }} 
            >
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