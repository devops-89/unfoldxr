"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import WhyPartnerCard from "./components/WhyPartnerCard";
import { partnersPage } from "@/utils/Website-Data";
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

const WhyPartnerSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: "#000",
        // minHeight: { md: "90vh" },
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
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: 28, md: 36 },
            fontWeight: 900,
            mb: { xs: 6, md: 4 },
            textTransform: "uppercase",
            lineHeight: "52px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <ScrollRevealText text={partnersPage.whyPartnerSection.heading} />
        </Typography>

        <Grid 
          container 
          rowSpacing={{ xs: 6, md: 3 }} 
          columnSpacing={3}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
        >
          {partnersPage.whyPartnerSection.why_partner_card_data.map(
            (card, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i} component={motion.div} variants={cardVariants}>
                <WhyPartnerCard {...card} />
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPartnerSection;
