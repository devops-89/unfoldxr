"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import WhyPartnerCard from "./components/WhyPartnerCard";
import { partnersPage } from "@/utils/Website-Data";
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

const WhyPartnerSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const renderSpotlightText = (text: string) => {
    if (!text) return null;
    
    const words = text.split(" ");
    const totalLength = text.length;
    const center = totalLength / 2;
    let globalIndex = 0;

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

      const letters = word.split("").map((char, charIndex) => {
        const currentIndex = globalIndex++;
        const distanceFromCenter = Math.abs(currentIndex - center);

        return (
          <Box
            key={charIndex}
            component={motion.span}
            initial={{ opacity: 0.1, scale: 0.8, filter: "blur(4px)" }}
            animate={isSectionInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: distanceFromCenter * 0.025, 
              ease: "easeOut",
            }}
            sx={{ display: "inline-block" }}
          >
            {char}
          </Box>
        );
      });

      let spaceElement = null;
      if (hasSpace) {
        const spaceIndex = globalIndex++;
        const spaceDist = Math.abs(spaceIndex - center);
        spaceElement = (
          <Box
            component={motion.span}
            initial={{ opacity: 0.1, scale: 0.8, filter: "blur(4px)" }}
            animate={isSectionInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: spaceDist * 0.025,
              ease: "easeOut",
            }}
            sx={{ display: "inline-block", whiteSpace: "pre" }}
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
          {renderSpotlightText(partnersPage.whyPartnerSection.heading)}
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
