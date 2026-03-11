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
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontSize: 64,
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            {homePage.Ai_industry.heading}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: helvetica.style.fontFamily,
              fontSize: 25,
              fontWeight: 400,
              mt: 2,
            }}
          >
            {homePage.Ai_industry.description}
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={3}
            flexWrap={"wrap"}
            sx={{ mt: 10 }}
            rowGap={2}
            justifyContent={"center"}
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
