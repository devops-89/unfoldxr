import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DevicesCard from "./components/Devices-Card";

const DevicesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        //minHeight: "85vh",
        //display: "flex",
        //alignItems: "center",
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
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 30, md: 36 },
              fontWeight: 900,
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 3, md: 5 },
              lineHeight: { xs: "38px", md: "52px" },
            }}
          >
            {homePage.devicesSection.heading}
          </Typography>

          {/* 2x2 Grid */}
          <Grid container spacing={{ xs: 2, md: 2 }}>
            {homePage.devicesSection.data.map((val, i) => (
              <Grid key={i} size={{ xs: 12, md: val.gridSize }}>
                <DevicesCard
                  bgImg={val.bgImg}
                  bgColor={val.bgColor}
                  textColor={val.textColor}
                  img={val.img}
                  heading={val.heading}
                  description={val.description}
                  gridSize={val.gridSize}
                  isFirst={i === 0}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DevicesSection;
