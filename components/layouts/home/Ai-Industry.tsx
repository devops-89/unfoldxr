import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import IndustryChip from "./components/Industry-Chip";

const AiIndustry = () => {
  return (
    <Box>
      <Box
        sx={{
          height: { xs: "auto", md: "100vh" }, // 👈 fix mobile height
          minHeight: { xs: "auto", md: "unset" },
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" }, // 👈 better flow
          justifyContent: "center",
          py: { xs: 6, md: 0 }, // 👈 add vertical spacing on mobile
        }}
      >
        <Container maxWidth="lg">
          
          {/* Heading */}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 32, md: 64 }, // 👈 responsive
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
              fontSize: { xs: 16, md: 25 }, // 👈 responsive
              fontWeight: 400,
              mt: 2,
            }}
          >
            {homePage.Ai_industry.description}
          </Typography>

          {/* Chips */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 1.5, md: 3 }} // 👈 tighter on mobile
            flexWrap="wrap"
            sx={{ mt: { xs: 4, md: 10 } }} // 👈 reduce gap
            rowGap={{ xs: 1.5, md: 2 }}
            justifyContent="center"
          >
            {homePage.Ai_industry.ai_industry_data.map((val, i) => (
              <IndustryChip img={val.img} label={val.label} key={i} />
            ))}
          </Stack>

        </Container>
      </Box>
    </Box>
  );
};

export default AiIndustry;