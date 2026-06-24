"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ClientBusinessCard from "./components/ClientBusinessCard";
import { partnersPage } from "@/utils/Website-Data";
import Image from "next/image";
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
const ClientBusinessSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

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
                {/* <ScrollRevealText text={partnersPage.clientBusinessSection.title} /> */}
                {partnersPage.clientBusinessSection.title}
              </Typography>

              <Stack 
                spacing={4}
                // component={motion.div}
                // variants={containerVariants}
                // initial="hidden"
                // animate={isSectionInView ? "visible" : "hidden"}
              >
                {partnersPage.clientBusinessSection.client_business_card_data.map(
                  (item) => (
                    <Box key={item.id} /* component={motion.div} variants={cardVariants} */ >
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
