import { din, helvetica } from "@/utils/fonts";
import { partnersPage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ExistingPartnersChip from "./components/ExistingPartnersChip";

const ExistingPartnersSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: 32, md: 50 },
            lineHeight: 1.1,
            textTransform: "uppercase",
            color: "#000",
            mb: { xs: 6, md: 10 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {partnersPage.existingPartnersSection.heading}
        </Typography>

        {/* Infinite Marquee */}
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
            position: "relative",
            pt: 4,
            pb: 4,
            "&:hover .marquee-track": {
              animationPlayState: "paused",
            },
          }}
        >
          {/* We render TWO identical tracks that side-by-side animate to -100% */}
          {[...Array(2)].map((_, trackIndex) => (
            <Box
              key={trackIndex}
              className="marquee-track"
              sx={{
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                justifyContent: "space-around",
                minWidth: "100%",
                gap: { xs: 4, md: 8 },
                pr: { xs: 4, md: 8 },
                animation: "marquee 20s linear infinite",
                "@keyframes marquee": {
                  "0%": { transform: "translateX(0%)" },
                  "100%": { transform: "translateX(-100%)" },
                },
              }}
              aria-hidden={trackIndex !== 0}
            >
              {partnersPage.existingPartnersSection.existing_partners_chip_data.map(
                (val, i) => (
                  <Box key={i} sx={{ display: "flex" }}>
                    <ExistingPartnersChip image={val.image} />
                  </Box>
                )
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExistingPartnersSection;