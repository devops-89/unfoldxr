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

        {/* Logos Grid */}
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {partnersPage.existingPartnersSection.existing_partners_chip_data.map(
            (val, i) => (
              <Grid
                key={i}
                size={{
                  xs: 6,
                  sm: 4,
                  md: 3,
                  lg: 2,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                  <ExistingPartnersChip image={val.image} />
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExistingPartnersSection;