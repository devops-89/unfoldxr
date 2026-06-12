"use client";
import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import ContainedButton from "@/components/widgets/ContainedButton";
import { useDemoModal } from "@/components/context/DemoModalContext";
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

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }, 
  },
};

const CareersSection = () => {
  const { careersSection: data } = aboutPage;

  const { openModal } = useDemoModal();

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
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 10 } }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 28, md: 36 },
            fontWeight: 900,
            textTransform: "uppercase",
            mb: 2,
            fontFamily: din.style.fontFamily,
            lineHeight: "52px",
          }}
        >
          {renderSpotlightText(data.title)}
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
            fontSize: { xs: 18, md: 18 },
            lineHeight: "28px",
            maxWidth: 1200,
            mb: 4,
            fontFamily: helvetica.style.fontFamily,
            whiteSpace: "pre-line",
          }}
        >
          {data.description}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {data.values.map((text, i) => (
            <Grid key={i} size={{ xs: 12, md: 5.5 }} sx={{ display: "flex" }} component={motion.div} variants={cardVariants}>
              <Box
                sx={{
                  bgcolor: COLORS.CARD_BG_DARK,
                  color: COLORS.WHITE,
                  borderRadius: "20px",
                  p: { xs: 2, md: 2.5 },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, md: 3 },
                  width: "100%",
                  minHeight: { md: 120 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 36 },
                    color: "rgba(182, 236, 26, 0.4)",
                    fontWeight: 900,
                    fontFamily: din.style.fontFamily,
                    lineHeight: "52px",
                    minWidth: { xs: 40, md: 60 },
                  }}
                >
                  {`0${i + 1}`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontFamily: din.style.fontFamily,
                    lineHeight: "30px",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          component={motion.p}
          variants={cardVariants}
          sx={{
            mt: 4,
            mb: 4,
            fontSize: { xs: 18, md: 18 },
            fontFamily: helvetica.style.fontFamily,
            maxWidth: 1000,
            lineHeight: "30px",
          }}
        >
          {data.bottomText}
        </Typography>
        </Box>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          style={{ display: 'inline-block' }}
        >
          <ContainedButton
            sx={{
              px: { xs: 2.5, md: 4 },
              py: 1.2,
              fontSize: { xs: 14, md: 16 },
              fontWeight: 500,
              lineHeight: "30px",
            }}
            onClick={() => openModal("career")}
          >
            Write to us to explore open roles
          </ContainedButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CareersSection;
