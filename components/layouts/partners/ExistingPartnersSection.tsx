import { din, helvetica } from "@/utils/fonts";
import { partnersPage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ExistingPartnersChip from "./components/ExistingPartnersChip";

const ExistingPartnersSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        minHeight: { md: "70vh" },
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
            fontSize: { xs: 28, md: 48 },
            lineHeight: "52px",
            textTransform: "uppercase",
            color: "#000",
            mb: { xs: 6, md: 8 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {partnersPage.existingPartnersSection.heading}
        </Typography>

        {/* Static Logo Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="center">
          {partnersPage.existingPartnersSection.existing_partners_chip_data.map(
            (val, i) => (
              <Grid 
                key={i} 
                size={{ xs: 6, sm: 4, md: 2 }}
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ExistingPartnersChip image={val.image} />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExistingPartnersSection;