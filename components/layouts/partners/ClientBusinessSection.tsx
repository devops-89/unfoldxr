"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ClientBusinessCard from "./components/ClientBusinessCard";
import { partnersPage } from "@/utils/Website-Data";
import Image from "next/image";
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
const ClientBusinessSection = () => {
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
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
        overflow: "visible",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          mt: 3,
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
          zIndex: 1,
          mb: 4,
        }}
      >
        <Grid container spacing={4} alignItems="stretch">
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box maxWidth="700px">
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 28, md: 36 },
                  lineHeight: "52px",
                  textTransform: "uppercase",
                  mb: 4,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {renderSpotlightText(partnersPage.clientBusinessSection.title)}
              </Typography>

              <Stack 
                spacing={4}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate={isSectionInView ? "visible" : "hidden"}
              >
                {partnersPage.clientBusinessSection.client_business_card_data.map(
                  (item) => (
                    <Box key={item.id} component={motion.div} variants={cardVariants}>
                      <ClientBusinessCard {...item} />
                    </Box>
                  ),
                )}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT FIXED IMAGE - Anchored to stretch alongside content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={partnersPage.clientBusinessSection.image}
              alt={`${partnersPage.clientBusinessSection.title} illustration`}
              sx={{
                width: { xs: "100%", md: "100%" },
                height: { xs: "auto", md: "100%" },
                objectFit: "cover",
                objectPosition: "center",
                display: { xs: "none", md: "block" },
                pointerEvents: "none",
                borderRadius: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientBusinessSection;
