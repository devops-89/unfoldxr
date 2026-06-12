"use client";

import React, { useRef } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { useRouter } from "next/navigation";
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

const Section = () => {
  const { newsSection: data } = aboutPage;
  const router = useRouter();

  const { openModal } = useDemoModal();

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
    <Box ref={sectionRef} sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Card
          sx={{
            borderRadius: { xs: 3, md: "45px" },
            boxShadow: "none",
            bgcolor: COLORS.WHITE,
          }}
        >
          <CardContent
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                fontFamily: din.style.fontFamily,
                color: COLORS.BLACK,
                mb: 1,
                lineHeight: "52px",
              }}
            >
              {renderVerticalBlindsText(data.title)}
            </Typography>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
            <Typography
              component={motion.p}
              variants={cardVariants}
              sx={{
                fontSize: { xs: 18, md: 18 },
                fontFamily: helvetica.style.fontFamily,
                color: COLORS.BLACK,
                maxWidth: 800,
                lineHeight: "28px",
                mb: 4,
              }}
            >
              {data.description}
            </Typography>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
              style={{ display: 'inline-block' }}
            >
              <ContainedButton
                onClick={() => openModal("about_")}
                sx={{
                  px: { xs: 2.5, md: 4 },
                  py: 1.2,
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 500,
                }}
              >
                Write to us &rarr;
              </ContainedButton>
            </motion.div>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Section;
