"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

import { useDemoModal } from "@/components/context/DemoModalContext";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }, 
  },
};

const FromAssist = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

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
  const data = homePage.productPage.fromAssist;
  const { openModal } = useDemoModal();

  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: { xs: 4, md: "24px" },
            py: { xs: 8, md: 6 },
            px: { xs: 3, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: `0px 20px 40px ${COLORS.BLACK_ALPHA_10}`,
          }}
        >
          {/* Neon Purple Decoration */}
          <Box
            sx={{
              position: "absolute",
              left: -40,
              top: -40,
              width: 200,
              height: 200,
              background: `radial-gradient(circle, ${COLORS.PURPLE_GLOW} 0%, ${COLORS.TRANSPARENT_PURPLE} 70%)`,
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 24, md: 36, lg: 36 },
                lineHeight: { xs: "35px", md: "45px" },
                color: COLORS.BLACK,
                maxWidth: { xs: 280, md: 1100 },
                mx: "auto",
              }}
            >
              {data.title.includes("From assistance") ? (
                <>
                  {renderVerticalBlindsText("From assistance to intelligence. From")}
                  <Box
                    component="br"
                    sx={{ display: { xs: "none", lg: "block" } }}
                  />
                  {renderVerticalBlindsText("field support to enterprise control.")}
                </>
              ) : (
                renderVerticalBlindsText(data.title)
              )}
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 20, lg: 18 },
                color: COLORS.BLACK,
                fontWeight: 500,
                lineHeight: { xs: "28px", md: "24px" },
              }}
            >
              {data.subtitle}
            </Typography>

            <Box
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "center",
                gap: { xs: 3, md: 6 },
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                component={motion.button}
                variants={buttonVariants}
                initial="hidden"
                animate={isHeadingInView ? "visible" : "hidden"}
                onClick={() => openModal("product_assist")}
                sx={{
                  bgcolor: COLORS.PRIMARY_GREEN,
                  color: COLORS.BLACK,
                  borderRadius: 99,
                  px: { xs: 4, md: 5 },
                  py: 1.8,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "none",
                  lineHeight: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": {
                    bgcolor: COLORS.PRIMARY_HOVER,
                    boxShadow: "none",
                  },
                }}
              >
                Write to us <ArrowForwardRoundedIcon />
              </Button>
              {/* <Typography
                onClick={openModal}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  textDecoration: "none",
                  textUnderlineOffset: "6px",
                  fontWeight: 700,
                  lineHeight: "30px",
                  fontSize: 18,
                  color: COLORS.BLACK,
                  cursor: "pointer",
                }}
              >
                {data.cta2}
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FromAssist;
