"use client";
import { din, helvetica } from "@/utils/fonts";
import { partnersPage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import ExistingPartnersChip from "./components/ExistingPartnersChip";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ExistingPartnersSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <Box
      ref={sectionRef}
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
          <ScrollRevealText text={partnersPage.existingPartnersSection.heading} />
        </Typography>

        {/* Static Logo Grid */}
        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }} 
          justifyContent="center" 
          alignItems="center"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
        >
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
                component={motion.div}
                variants={cardVariants}
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