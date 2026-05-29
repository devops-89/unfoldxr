"use client";
import { din, helvetica } from "@/utils/fonts";
import { partnersPage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ExistingPartnersChip from "./components/ExistingPartnersChip";
import { motion } from "framer-motion";

const ExistingPartnersSection = () => {
  return (
    <Box
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      sx={{
        backgroundColor: "#F9F9F9",
        // minHeight: { md: "70vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
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
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontWeight: 900,
            fontSize: { xs: 28, md: 36 },
            lineHeight: "52px",
            textTransform: "uppercase",
            color: "#000",
            mb: { xs: 6, md: 6 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {partnersPage.existingPartnersSection.heading}
        </Typography>

        {/* Static Logo Grid */}
        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }} 
          justifyContent="center" 
          alignItems="center"
          component={motion.div}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {partnersPage.existingPartnersSection.existing_partners_chip_data.map(
            (val, i) => (
              <Grid 
                key={i} 
                size={{ xs: 6, sm: 4, md: 2 }}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
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