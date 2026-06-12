"use client";
import React, { useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '@/utils/enum'
import { din } from '@/utils/fonts'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
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
// import { NewsItem } from '../NewsLayout/data'
// import FeaturedNewsCard from './FeaturedNewsCard'

interface NewsHeroProps {
    image: string | StaticImageData;
    title: string;
    subtitle?: string;
    titleMaxWidth?: number | string;
    objectPosition?: any;
    overlayOpacity?: number;
    // featuredNews?: NewsItem;
}

const NewsHero = ({image, title, subtitle, titleMaxWidth, objectPosition="center", overlayOpacity}: NewsHeroProps) => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

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

  return (
    <Box
      ref={headingRef}
      sx={{
        position: "relative",
        minHeight: { xs: "60vh", md: "60vh" },
        backgroundColor: COLORS.WHITE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: COLORS.WHITE,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          // height: "60%",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: objectPosition,
          }}
        />
      </Box>
       {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1,
        }}
      />
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isHeadingInView ? "visible" : "hidden"}
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "100%", md: "80%" },
          boxSizing: "border-box",
          mx: "auto",
          pt: { xs: 12, md: 18 },
          pb: { xs: 8, md: 12 },
          pl: { xs: 0, md: 2 },
          px: { xs: 3, md: 0 },
        }}
      >
        <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 26, md: 50, lg: 50 },
                lineHeight: { xs: "35px", md: "42px" },
                maxWidth: titleMaxWidth || 1050,
                whiteSpace: "pre-line",
                width: { xs: "100%", lg: "70%" },
              }}
          >
            {renderSpotlightText(title)}
        </Typography>
        {subtitle && (
          <Typography
            component={motion.p}
            variants={cardVariants}
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 20, md: 28, lg: 18 },
              lineHeight: 1.6,
              maxWidth: 800,
              mt: 2, // Space between title and subtitle
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>
        )}
        </Box>
       {/* {featuredNews && (
         <FeaturedNewsCard news={featuredNews} />
      )}  */}
      </Box>
  )
}

export default NewsHero
