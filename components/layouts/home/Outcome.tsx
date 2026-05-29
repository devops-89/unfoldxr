"use client";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OutcomeCard from "./components/Outcome-Card";
import ContainedButton from "@/components/widgets/ContainedButton";
import { motion, useScroll, useTransform } from "framer-motion";

const Outcome = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <Box
      component={motion.div}
      style={{ y: yBg }}
      sx={{
        backgroundColor: COLORS.BLACK,
        py: { xs: 8, md: 12 },
        // minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(182,236,26,0.08) 0 1px, transparent 1px 100%)",
          backgroundSize: "110px 100%",
          animation: "outcomeLines 18s linear infinite",
          opacity: 0.8,
        },
        "@keyframes outcomeLines": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(110px)" },
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "95%", lg: "90%" },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 4, md: 8, xl: 10 } }}>
          {/* Heading */}
          <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: false, amount: 0.4 }}
          >
          <Typography
            sx={{
              textAlign: "left",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 28, md: 36 },
              color: COLORS.WHITE,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: { xs: "38px", md: "52px" },
            }}
          >
            {homePage.outcome.heading}
          </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: false, amount: 0.4 }}
          >
          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 14, md: 18 },
              color: COLORS.WHITE,
              fontWeight: 400,
              lineHeight: { xs: "22px", md: "30px" },
              letterSpacing: "0.52px",
              mt: 1,
              mb: 2,
              opacity: 0.8,
            }}
          >
            {homePage.outcome.subHeading}
          </Typography>
          </motion.div>

          {/* 2x2 Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {homePage.outcome.data.map((val, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                <OutcomeCard number={val.number} label={val.description} link={(val as any).link} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Outcome;
