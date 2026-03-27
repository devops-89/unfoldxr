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
          p: { xs: 2, md: 3 },
          borderRadius: "10px",
          height: { xs: "auto", md: "80vh" }, // 👈 fix mobile height
          minHeight: { xs: "auto", md: "unset" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              fontSize: { xs: 32, md: 60 }, // 👈 responsive text
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {homePage.workforce.heading}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 25 },
              fontWeight: 400,
              mt: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {homePage.workforce.description}
          </Typography>

          {/* Cards */}
          <Grid
            container
            sx={{ mt: { xs: 4, md: 10 } }} // 👈 reduce gap on mobile
            spacing={4}
          >
            {homePage.workforce.data.map((val, i) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }} // 👈 responsive grid
                key={i}
                sx={{
                  mt: { xs: 0, md: i == 1 ? 3 : 0 }, // 👈 keep desktop offset
                }}
              >
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