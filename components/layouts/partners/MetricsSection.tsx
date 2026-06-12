"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MetricCard from "./components/MetricCard";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MetricsSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const renderVerticalBlindsText = (text: string) => {
    if (!text) return null;
    
    const words = text.split(" ");
    const totalLength = text.length; 
    let globalIndex = 0; 

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

      const letters = word.split("").map((char, charIndex) => {
        const currentIndex = globalIndex++;
        const distanceFromEdge = Math.min(currentIndex, totalLength - 1 - currentIndex);

        return (
          <Box
            key={charIndex}
            component={motion.span}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isSectionInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + (distanceFromEdge * 0.04), 
              ease: "easeOut",
            }}
            sx={{
              display: "inline-block",
              transformOrigin: "center", 
            }}
          >
            {char}
          </Box>
        );
      });

      let spaceElement = null;
      if (hasSpace) {
        const spaceIndex = globalIndex++;
        const spaceDist = Math.min(spaceIndex, totalLength - 1 - spaceIndex);
        spaceElement = (
          <Box
            component={motion.span}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isSectionInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + (spaceDist * 0.04),
              ease: "easeOut",
            }}
            sx={{ display: "inline-block", transformOrigin: "center", whiteSpace: "pre" }}
          >
            {" "}
          </Box>
        );
      }

      return (
        <Box
          key={wordIndex}
          component="span"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {letters}
          {spaceElement}
        </Box>
      );
    });
  };

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
              {renderVerticalBlindsText(partnersPage.metricsSection.heading)}
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
