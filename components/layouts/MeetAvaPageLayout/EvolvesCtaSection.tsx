"use client";

import { Box, Button, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { meetAvaPage } from "@/utils/Website-Data";
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

const EvolvesCtaSection = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const { openModal } = useDemoModal();
  const { evolvesCtaSection: data } = meetAvaPage;

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
            py: { xs: 5, md: 6 },
            px: { xs: 2, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: `0px 20px 40px ${COLORS.BLACK_ALPHA_10}`,
          }}
        >
          {/* Neon Purple Decoration */}
          {/* <Box
            sx={{
              position: "absolute",
              left: -40,
              top: -40,
              width: 250,
              height: 250,
              background: `radial-gradient(circle, ${COLORS.PURPLE_GLOW} 0%, rgba(160,32,240,0) 70%)`,
              zIndex: 0,
            }}
          /> */}

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              // ref={headingRef}
              // component={motion.h2}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 28, md: 32, lg: 36 },
                lineHeight: { xs: "35px", md: "52px" },
                letterSpacing: "-0.051px",
                color: COLORS.BLACK,
                textAlign: "center",
                textTransform: "uppercase",
                maxWidth: { xs: 280, sm: 500, md: 1100 },
                mx: "auto",
              }}
            >
              {data.heading}
            </Typography>

            <Button
              // component={motion.button}
              // variants={buttonVariants}
              // initial="hidden"
              // animate={isHeadingInView ? "visible" : "hidden"}
              onClick={() => openModal("meet_ava_cta")}
              sx={{
                mt: 4,
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 4, md: 6 },
                py: 2,
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 14, md: 16, lg: 16 },
                textTransform: "none",
                "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
              }}
            >
              {data.cta}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EvolvesCtaSection;
