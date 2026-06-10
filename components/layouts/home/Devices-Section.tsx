"use client";
import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import DevicesCard from "./components/Devices-Card";
import { motion, useInView } from "framer-motion";

const DevicesSection = () => {

  // Created a ref to monitor scroll for the heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  // Helper function to recreate "Vertical Blinds" from edges
  const renderVerticalBlindsText = (text: string) => {
    const chars = text.split("");
    const totalLength = chars.length;

    return chars.map((char, index) => {
      // Calculates distance from the nearest edge (either the start or the end)
      const distanceFromEdge = Math.min(index, totalLength - 1 - index);

      return (
        <Box
          key={index}
          component={motion.span}
          // scaleX: 0 squishes the text horizontally, just like a vertical blind
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: 0.2 + (distanceFromEdge * 0.04), // 0.2s base delay + GSAP's 0.04 stagger
            ease: "easeOut",
          }}
          sx={{
            display: "inline-block",
            transformOrigin: "center", // Ensures it scales out from its own center
            whiteSpace: char === " " ? "pre" : "normal", // Keeps spaces intact
          }}
        >
          {char}
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        pt: { xs: 16, md: 16, lg: 12},
        pb: { xs: 8, md: 12 },
        //minHeight: "85vh",
        //display: "flex",
        //alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "95%", lg: "90%" },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{ px: { xs: 2, sm: 4, md: 8, xl: 10 } }}
        >
          <Typography
            ref={headingRef}
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 30, md: 36 },
              fontWeight: 900,
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 3, md: 5 },
              lineHeight: { xs: "35px", md: "52px" },
            }}
          >
            {renderVerticalBlindsText(homePage.devicesSection.heading)}
          </Typography>

          {/* 2x2 Grid */}
          <Grid 
              container
              component={motion.div}
              spacing={{ xs: 2, md: 2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.4,
                  },
                },
              }}
          >
            {homePage.devicesSection.data.map((val, i) => (
              <Grid 
                  key={i} 
                  size={{ xs: 12, md: val.gridSize }}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
              >
                <DevicesCard
                  bgImg={val.bgImg}
                  bgColor={val.bgColor}
                  textColor={val.textColor}
                  img={val.img}
                  heading={val.heading}
                  description={val.description}
                  gridSize={val.gridSize}
                  isFirst={i === 0}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DevicesSection;
