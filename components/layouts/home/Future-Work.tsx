"use client";

import ContainedButton from "@/components/widgets/ContainedButton";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import FutureWorkCard from "./components/Future-Work-Card";
import { FUTURE_WORK_CARD_DATA } from "@/utils/constant";
import { useDemoModal } from "@/components/context/DemoModalContext";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// Added the custom DecodeText component to mimic GSAP TextPlugin
const DecodeText = ({ text, isVisible, delay = 0 }: { text: string, isVisible: boolean, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const chars = "01"; // The binary characters to scramble with

  useEffect(() => {
    if (!isVisible) {
      // Show random binary when scrolled out of view
      setDisplayedText(text.replace(/[a-zA-Z0-9]/g, () => chars[Math.floor(Math.random() * 2)]));
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      let iteration = 0;
      intervalId = setInterval(() => {
        setDisplayedText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) return text[index];
              return char === " " ? " " : chars[Math.floor(Math.random() * 2)];
            })
            .join("")
        );

        if (iteration >= text.length) clearInterval(intervalId);
        iteration += 1 / 1.5; 
      }, 40); 
    }, delay * 1000); 

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, isVisible, delay]);

  return <>{displayedText}</>;
};

const FutureWork = () => {
  const { openModal } = useDemoModal();
  const [expandedSteps, setExpandedSteps] = useState([0]);

  //Create a ref to monitor scroll position for the Decode triggers 
  const leftRef = useRef(null);
  const isInView = useInView(leftRef, { once: false, margin: "-100px" });

  const handleToggle = (index: number) => {
    if (expandedSteps.includes(index)) {
      setExpandedSteps(expandedSteps.filter((i) => i !== index));
    } else {
      let nextArray = [...expandedSteps, index].sort();
      if (nextArray.length > 2) {
        // If we opened the 3rd (Edge), close the 1st (Augment)
        if (index === 2) {
          nextArray = nextArray.filter((i) => i !== 0);
        }
        // If we opened the 1st (Augment), close the 3rd (Edge)
        else if (index === 0) {
          nextArray = nextArray.filter((i) => i !== 2);
        }
        // Fallback for clicking the middle one (index 1)
        else {
          nextArray = nextArray.slice(0, 2);
        }
      }
      setExpandedSteps(nextArray);
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 0 }, width: "100%", overflow: "hidden" }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          backgroundColor: COLORS.BLACK,
          borderRadius: "24px",
          width: { xs: "95%", md: "95%", lg: "90%" },
          mx: "auto",
          py: { xs: 6, md: 6 },
          px: { xs: 3, md: 6, xl: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 10 }} sx={{ p: 0, m: 0 }}>
          {/* LEFT SECTION */}
          <Grid 
              size={{ xs: 12, md: 6 }}
              ref={leftRef}
          >
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 20, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.WHITE,
                lineHeight: { xs: "35px", md: "52px" },
              }}
            >
              {/* Use the DecodeText component here! Delay 0.2s */}
              <DecodeText 
                text={homePage.future_work.leftSection.heading} 
                isVisible={isInView} 
                delay={0.2} 
              />
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 12, md: 18 },
                color: COLORS.WHITE,
                fontWeight: 400,
                lineHeight: { xs: "24px", md: "30px" },
                letterSpacing: "0.52px",
                my: 2,
              }}
            >
              {homePage.future_work.leftSection.description}
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              sx={{
                fontSize: { xs: 12, md: 18 },
                fontWeight: 700,
                color: COLORS.WHITE,
                fontFamily: helvetica.style.fontFamily,
                lineHeight: { xs: "24px", md: "30px" },
                letterSpacing: "0.52px",
              }}
            >
              {homePage.future_work.leftSection.subDescription}
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.PRIMARY_GREEN,
                lineHeight: { xs: "35px", md: "52px" },
                fontFamily: din.style.fontFamily,
                mt: 4,
              }}
            >
              {homePage.future_work.leftSection.endHeading}   
            </Typography>
            <Link href="/Product">
              <ContainedButton
                sx={{
                  mt: 3,
                  width: { xs: "100%", md: "150px" },
                  height: { xs: "45px", md: "50px" },
                  fontSize: { xs: 16, md: 16 },
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(204,249,25,0.3)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-75%",
                    width: "50%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                    transform: "skewX(-20deg)",
                    transition: "left 0.6s ease",
                  },
                  "&:hover::after": {
                    left: "125%",
                  },
                }}
              >
                {homePage.future_work.leftSection.cta}
              </ContainedButton>
            </Link>
          </Grid>

          {/* RIGHT SECTION - INTERACTIVE STEPPER */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack 
                spacing={4} 
                sx={{ width: "100%" }}
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
            >
              {FUTURE_WORK_CARD_DATA.map((val, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                <FutureWorkCard
                  label={val.label}
                  value={val.value}
                  description={val.description}
                  isActive={expandedSteps.includes(i)}
                  onClick={() => handleToggle(i)}
                  key={i}
                />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FutureWork;
