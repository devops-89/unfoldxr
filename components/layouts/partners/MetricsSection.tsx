"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MetricCard from "./components/MetricCard";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
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

const MetricsSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: "#fff",
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
          px: { xs: 0, md: 3 },
        }}
      >
        <Grid container spacing={7} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              sx={{
                fontSize: { xs: 32, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                lineHeight: { xs: 1.1, md: "52px" },
              }}
            >
              <ScrollRevealText text={partnersPage.metricsSection.heading} />
            </Typography>

            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
            >
            <Typography
              component={motion.p}
              variants={cardVariants}
              sx={{
                mt: 2,
                fontSize: { xs: 18, md: 18 },
                color: COLORS.BLACK,
                lineHeight: "30px",
                maxWidth: { xs: "500px", md: "100%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {partnersPage.metricsSection.description}
            </Typography>
            </Box>
          </Grid>

          {/* RIGHT SIDE (CARDS) */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid 
              container 
              spacing={{ xs: 5, md: 5 }}
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
            >
              {partnersPage.metricsSection.metrics_card_data.map(
                (card, index) => (
                  <Grid size={{ ...card.gridSize }} key={index} component={motion.div} variants={cardVariants}>
                    <MetricCard
                      title={card.title}
                      description={card.description}
                      gridSize={card.gridSize}
                    />
                  </Grid>
                ),
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MetricsSection;
