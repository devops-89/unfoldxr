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
          // height: { xs: "auto", md: "45vh" },
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "center",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 28, md: 36 },
              textTransform: "uppercase",
              fontWeight: 900,
              lineHeight: { xs: "35px", md: "52px" },
            }}
          >
            {homePage.Ai_industry.heading}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              letterSpacing: "0.52px",
              lineHeight: { xs: "28px", md: "30px" },
              fontWeight: 400,
              mt: 1,
            }}
          >
            {homePage.Ai_industry.description}
          </Typography>

          {/* Chips - Fluid Layout */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 1.5, md: 2 },
              mt: { xs: 4, md: 6 },
              maxWidth: "90%",
              mx: "auto",
            }}
          >
            {homePage.Ai_industry.ai_industry_data.map((val, i) => (
              <IndustryChip key={i} img={val.img} icon={val.icon} label={val.label} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AiIndustry;
