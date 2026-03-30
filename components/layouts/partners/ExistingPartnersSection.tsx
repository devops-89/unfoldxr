import { din, helvetica } from "@/utils/fonts";
import { partnersPage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ExistingPartnersChip from "./components/ExistingPartnersChip";

const ExistingPartnersSection = () => {
  return (
    <Box>
      <Box
        sx={{
          height: { xs: "auto", md: "70vh" },
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
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 20, md: 40 },
              textTransform: "uppercase",
              fontWeight: 900,
              color:"#000000"
            }}
          >
            {partnersPage.existingPartnersSection.heading}
          </Typography>

          
          {/* Chips */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ mt: { xs: 2, md: 5 } }}
          >
            {partnersPage.existingPartnersSection.existing_partners_chip_data.map((val, i) => (
              <Grid
                key={i}
                
                size={{
    xs: i === 2 ? 12 : 6,
    sm: i === 2 ? 12 : 6,
    md: "auto",
  }}
               
              >
                <Box display="flex" justifyContent="center">
                  <ExistingPartnersChip image={val.image}  />
                </Box>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
    </Box>
  );
};

export default ExistingPartnersSection;