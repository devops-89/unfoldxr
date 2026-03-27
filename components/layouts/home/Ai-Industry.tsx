import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import IndustryChip from "./components/Industry-Chip";

const AiIndustry = () => {
  return (
    <Box>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" },
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "center",
          py: { xs: 6, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          
          {/* Heading */}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 32, md: 64 },
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            {homePage.Ai_industry.heading}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 25 },
              fontWeight: 400,
              mt: 2,
            }}
          >
            {homePage.Ai_industry.description}
          </Typography>

          {/* Chips */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ mt: { xs: 4, md: 10 } }}
          >
            {homePage.Ai_industry.ai_industry_data.map((val, i) => (
              <Grid
                key={i}
                
                size={{
    xs: i === 2 ? 12 : 6,
    sm: i === 2 ? 12 : 6,
    md: "auto",
  }}
               
              >
                <Box display="flex" justifyContent="center">
                  <IndustryChip img={val.img} label={val.label} />
                </Box>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
    </Box>
  );
};

export default AiIndustry;