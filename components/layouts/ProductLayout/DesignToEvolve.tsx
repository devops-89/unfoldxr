"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import VerticalStepper from "@/components/widgets/VerticalStepper";
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

const DesignToEvolve = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

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
            animate={isHeadingInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
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
            animate={isHeadingInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
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
  const data = homePage.productPage.designToEvolve;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Typography
          ref={headingRef}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 32, lg: 36 },
            lineHeight: { xs: "35px", md: "52px" },
            maxWidth: 900,
          }}
        >
          {data.title.includes("evolve") ? (
            <>
              {renderSpotlightText(data.title.split("evolve")[0])}
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              {renderSpotlightText("evolve" + data.title.split("evolve")[1])}
            </>
          ) : (
            renderSpotlightText(data.title)
          )}
        </Typography>

        <Box
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          <Typography
            component={motion.p}
            variants={cardVariants}
            sx={{
              mt: 3,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 16, lg: 18 },
              lineHeight: { xs: "28px", md: "30px" },
              letterSpacing: "0.52px",
              color: COLORS.TEXT_GRAY,
              maxWidth: 1000,
            }}
          >
            {data.description}
          </Typography>

          {/* Menu and Description split */}
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            sx={{ mt: { xs: 6, md: 6 } }}
            component={motion.div}
            variants={cardVariants}
          >
          {/* Left Menu Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 2 },
                alignItems: "flex-start",
              }}
            >
              {data.variants.map((item, index) => (
                <Box key={item.title}>
                  <Box
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      fontFamily: din.style.fontFamily,
                      border:
                        activeIndex === index
                          ? `2px solid ${COLORS.PRIMARY_HOVER}`
                          : "2px solid transparent",
                      borderRadius: "99px",
                      display: "inline-block",
                      px: { xs: 2, md: 3 },
                      py: 1,
                      color:
                        activeIndex === index
                          ? COLORS.PRIMARY_HOVER
                          : COLORS.WHITE,
                      textTransform: "uppercase",
                      letterSpacing: "0.52px",
                      fontSize: { xs: 12, md: 14, lg: 16 },
                      fontWeight: 700,
                      width: "fit-content",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor:
                          activeIndex === index
                            ? "transparent"
                            : "rgba(255, 255, 255, 0.05)",
                        borderColor:
                          activeIndex === index
                            ? COLORS.PRIMARY_HOVER
                            : "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    {item.title}
                  </Box>
                  {/* Mobile Description: Show only if active and on mobile */}
                  {activeIndex === index && (
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        mt: 2,
                        mb: 4,
                        px: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 18, md: 16 },
                          color: COLORS.WHITE,
                          mb: 1.5,
                          textTransform: "none",
                        }}
                      >
                        {item.subHeading || item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 16, md: 16 },
                          lineHeight: { xs: "26px", md: 1.5 },
                          color: COLORS.TEXT_GRAY,
                          textTransform: "none",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Description Column with Vertical Stepper (Desktop only) */}
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{ position: "relative", display: { xs: "none", md: "block" } }}
          >
            <VerticalStepper
              itemsCount={data.variants.length}
              activeIndex={activeIndex}
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
              }}
            />

            <Box
              sx={{
                pl: { xs: 0, md: 6 },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 18, md: 16 },
                    color: COLORS.WHITE,
                    lineHeight: "30px",
                    mb: 1.1,
                    transition: "all 0.3s ease",
                    textTransform: "none",
                  }}
                >
                  {data.variants[activeIndex].subHeading ||
                    data.variants[activeIndex].title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 16 },
                    lineHeight: "30px",
                    color: COLORS.TEXT_GRAY,
                    maxWidth: 650,
                    transition: "all 0.3s ease",
                    textTransform: "none",
                  }}
                >
                  {data.variants[activeIndex].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Device Image */}
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            mx: "auto",
            mt: { xs: 6, md: 10 },
            borderRadius: { xs: 2.5, md: "24px" },
            overflow: "hidden",
            border: `1px solid ${COLORS.WHITE_ALPHA_20}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Image
              src={data.img}
              alt="Preview of the UnfoldXR platform interface on a tablet"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

export default DesignToEvolve;
