"use client";
import { Box, Grid, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import StylizedDivider from "@/components/widgets/StylizedDivider";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";

interface Props {
  data: UseCaseData["deviceDeployment"];
}

// Variants for individual images (Blur to clear + slide up)
const blurInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants for the Grid container to orchestrate staggered children
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const DeviceDeploymentSection = ({ data }: Props) => {

  // Hook setup to watch scroll tracking for the heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  // ADD HELPER FUNCTION
  // The Word-Wrapped Vertical Blinds helper function
  /*
  const renderVerticalBlindsText = (text: string) => {
    if (!text) return null;

  // Split into words first
  const words = text.split(" ");
  const totalLength = text.length; // Keep total string length for the wave math
  let globalIndex = 0; // Tracks the absolute character index

  return words.map((word, wordIndex) => {
    const hasSpace = wordIndex !== words.length - 1;

    // 1. Animate the letters of the current word
    const letters = word.split("").map((char, charIndex) => {
      const currentIndex = globalIndex++;
      const distanceFromEdge = Math.min(currentIndex, totalLength - 1 - currentIndex);

      return (
        <Box
          key={charIndex}
          component={motion.span}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
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

    // 2. Add the space back after the word (and animate it so the timing stays perfect)
    let spaceElement = null;
    if (hasSpace) {
      const spaceIndex = globalIndex++;
      const spaceDist = Math.min(spaceIndex, totalLength - 1 - spaceIndex);
      spaceElement = (
        <Box
          component={motion.span}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
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

    // 3. Wrap the letters and the space in a container that refuses to break mid-word
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
  */

  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          ref={headingRef}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 36 },
            lineHeight: { xs: "35px", md: "42px" },
            mb: { xs: 6, md: 6 },
          }}
        >
          {/* {renderVerticalBlindsText(data.title)} */}
          {/* <ScrollRevealText text={data.title} /> */}
          {data.title}
        </Typography>

        <Grid 
          container 
          spacing={2.5}
          // component={motion.div}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: false, amount: 0.2 }}
          // variants={staggerContainer}
        >
          {/* Top Row: Device A and B */}
          <Grid 
            size={{ 
              xs: 12, 
              md: 7 
              }} 
            // component={motion.div} 
            // variants={blurInVariant}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 260 },
                bgcolor: "#111",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={data.deviceA.image}
                  alt={data.deviceA.title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: COLORS.OVERLAY_02,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: { xs: 20, md: 20 },
                  maxWidth: "80%",
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 18 },
                    lineHeight: { xs: "28px", md: "30px" },
                    mb: 1,
                  }}
                >
                  {data.deviceA.title}
                </Typography>
                <StylizedDivider />
              </Box>
            </Box>
          </Grid>

          <Grid 
            size={{ 
              xs: 12, 
              md: 5 
              }}
            // component={motion.div} 
            // variants={blurInVariant}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 260 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={data.deviceB.image}
                  alt={data.deviceB.title}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "right",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: COLORS.OVERLAY_04,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: { xs: 20, md: 20 },
                  maxWidth: "80%",
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 18 },
                    lineHeight: { xs: "28px", md: "30px" },
                    width: 340,
                    mb: 2,
                  }}
                >
                  {data.deviceB.title}
                </Typography>
                <StylizedDivider />
              </Box>
            </Box>
          </Grid>

          {/* Bottom Row: Device C */}
          <Grid 
            size={{ 
              xs: 12 
              }}
            // component={motion.div} 
            // variants={blurInVariant}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 265 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={data.deviceC.image}
                  alt={data.deviceC.title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "100% center",
                  }}
                />
              </Box>
              {/* <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.30)",
                }}
              /> */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: { xs: 20, md: 20 },
                  maxWidth: "80%",
                }}
              >
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 18 },
                    lineHeight: { xs: "28px", md: "30px" },
                    mb: 2,
                  }}
                >
                  {data.deviceC.title}
                </Typography>
                <StylizedDivider />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DeviceDeploymentSection;
