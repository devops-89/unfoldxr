import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WorkforceCard from "./components/WorkForce-Card";

const WorkForce = () => {
  return (
    <Box>
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            px: { xs: 4, sm: 6, md: 10 },
            pt: { xs: 5, md: 10 },
            pb: { xs: 6, md: 10 },
            borderRadius: "15px",
            height: { xs: "auto", md: "72vh" },
            minHeight: { xs: "auto", md: "unset" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { xs: "80%", md: "100%" },
            mx: "auto",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Heading */}
            <Typography
              sx={{
                color: "#000",
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 32, md: 64 },
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "normal",
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {homePage.workforce.heading}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#000",
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 28 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: "46px" },
                mt: { xs: 2, md: 3 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {homePage.workforce.description}
            </Typography>

            {/* Cards */}
            <Grid
              container
              sx={{ mt: { xs: 4, md: 10 } }} 
              spacing={4}
            >
              {homePage.workforce.data.map((val, i) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }} 
                  key={i}
                  sx={{
                    mt: { xs: 0, md: i == 1 ? 3 : 0 }, 
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkForce;
