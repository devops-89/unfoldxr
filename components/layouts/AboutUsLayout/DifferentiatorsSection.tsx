"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
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

const DifferentiatorsSection = () => {
  const { differentiatorsSection: data } = aboutPage;

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
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="stretch">
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 36, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: 1.1, md: "52px" },
                mb: 4,
                fontFamily: din.style.fontFamily,
              }}
            >
              {renderSpotlightText(data.heading)}
            </Typography>
            <Stack 
              spacing={5}
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
            >
              {data.items.map((item, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  spacing={3}
                  alignItems="flex-start"
                  component={motion.div}
                  variants={cardVariants}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                      width: 48,
                      height: 48,
                      objectFit: "contain",
                      mt: 0.5,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 22, md: 18 },
                        fontWeight: 700,
                        lineHeight: "28px",
                        mb: 1,
                        textTransform: "uppercase",
                        fontFamily: din.style.fontFamily,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 17, md: 16 },
                        lineHeight: "28px",
                        color: COLORS.WHITE,
                        fontFamily: helvetica.style.fontFamily,
                        textAlign: "left",
                        fontWeight: 400,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid 
            size={{ xs: 12, md: 5 }}
            component={motion.div}
            variants={cardVariants}
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
          >
            <Box
              component="img"
              src={data.image}
              alt={`${data.heading} illustration`}
              sx={{
                width: { xs: "100%", md: "70%" },
                ml: { xs: 0, md: 15 },
                mt: { xs: 4, md: 0 },
                height: { xs: "auto", md: "100%" },
                objectFit: "cover",
                borderRadius: "20px",
                display: "block",
                objectPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DifferentiatorsSection;
