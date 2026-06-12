"use client";
import React, { useState, useRef } from "react";
import { Box, Container, Grid, Typography, Stack, alpha } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
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

const LeadershipSection = () => {
  const { leadershipSection: data } = aboutPage;

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
    <Container
      ref={sectionRef}
      maxWidth={false}
      sx={{
        width: { xs: "90%", md: "90%", lg: "83%" },
        mx: "auto",
        px: 0,
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, md: 36 },
          fontWeight: 900,
          textTransform: "uppercase",
          mb: 8,
          fontFamily: din.style.fontFamily,
          color: COLORS.BLACK,
          lineHeight: "52px",
        }}
      >
        {renderVerticalBlindsText(data.title)}
      </Typography>

      <Stack 
        spacing={12}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
      >
        {data.members.map((member, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <Grid
              container
              key={idx}
              spacing={{ xs: 4, md: 8 }}
              alignItems="flex-start"
              direction={isEven ? "row-reverse" : "row"}
              component={motion.div}
              variants={cardVariants}
            >
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isEven ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={600}
                    style={{
                      width: isEven ? "250px" : "400px",
                      height: isEven ? "auto" : "auto",
                      display: "block",
                      marginTop: "50px",
                      filter: "grayscale(100%)",
                    }}
                    priority={idx === 0}
                  />
                ) : (
                  <Image
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: isEven ? "250px" : "350px",
                      height: isEven ? "auto" : "auto",
                      display: "block",
                      filter: "grayscale(100%)",
                    }}
                    priority={idx === 0}
                  />
                )}
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box
                  sx={{
                    textAlign: "left",
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 26, md: 36 },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      fontFamily: din.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 20 },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      mb: 4,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.PRIMARY_GREEN,
                      lineHeight: 1.3,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: "28px",
                      fontFamily: helvetica.style.fontFamily,
                      color: "rgba(0, 0, 0, 0.8)",
                      textAlign: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Container>
  );
};

export default LeadershipSection;
