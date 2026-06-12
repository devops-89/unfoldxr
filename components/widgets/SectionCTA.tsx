"use client";
import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { motion, useInView, Variants } from "framer-motion";

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }, 
  },
};

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  btnText?: string;
  onBtnClick?: () => void;
  variant?: "default" | "industry" | "about";
  sx?: SxProps<Theme>;
  innerSx?: SxProps<Theme>;
}

const SectionCTA: React.FC<SectionCTAProps> = ({
  title,
  subtitle,
  btnText = "Request a demo",
  onBtnClick,
  variant = "default",
  sx,
  innerSx,
}) => {
  const isIndustry = variant === "industry";
  const isAbout = variant === "about";

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

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        py: { xs: 6, md: 8 },
        pb: isAbout ? { xs: 6, md: 8 } : undefined,
        ...sx,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: 0,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            border:
              isIndustry || isAbout
                ? "1px solid rgba(182, 255, 46, 0.15)"
                : "none",
            width: { xs: "95%", md: "90%", lg: "80%" },
            mx: "auto",
            py: { xs: 4, md: isAbout ? "60px" : 6 },
            px: { xs: 3, md: 5 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              variant === "default"
                ? `0px 20px 40px ${COLORS.BLACK_ALPHA_10}`
                : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...innerSx,
          }}
        >
          {variant === "default" && (
            <Box
              sx={{
                position: "absolute",
                left: -40,
                top: -40,
                width: 250,
                height: 250,
                background: `radial-gradient(circle, ${COLORS.PURPLE_GLOW} 0%, ${COLORS.TRANSPARENT_PURPLE} 70%)`,
                zIndex: 0,
              }}
            />
          )}

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: variant === "about" ? 24 : 26, md: 36 },
                lineHeight: { xs: "35px", md: "42px" },
                letterSpacing: variant === "default" ? "-0.051px" : "normal",
                color: COLORS.BLACK,
                textAlign: "center",
                textTransform: "uppercase",
                maxWidth: 1000,
                mx: "auto",
                mb: isAbout ? 6 : 0,
              }}
            >
              {renderVerticalBlindsText(title)}
            </Typography>

            {subtitle && (
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: isIndustry ? 18 : 18 },
                  color: COLORS.BLACK,
                  fontWeight: isIndustry ? 400 : 500,
                  lineHeight: { xs: "28px", md: "30px" },
                  maxWidth: isIndustry ? 900 : 700,
                  mx: "auto",
                }}
              >
                {subtitle}
              </Typography>
            )}

            <Button
              component={motion.button}
              variants={buttonVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              onClick={onBtnClick}
              sx={{
                mt: isAbout ? 0 : 4,
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 14, md: 16 },
                textTransform: "none",
                "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 },
              }}
            >
              {btnText}{" "}
              {isAbout && (
                <Box component="span" sx={{ ml: 1 }}>
                  &rarr;
                </Box>
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionCTA;
