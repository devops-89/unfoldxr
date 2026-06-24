"use client";
import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import React, { useRef } from "react";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";
import { motion, useInView, Variants } from "framer-motion";

interface Props {
  data: IndustryData["useCases"];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const UseCasesSection = ({ data }: Props) => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

  const getMarginLeft = (index: number) => {
    const margins = [0, 8, 4, 0];
    return { md: margins[index] || 0 };
  };

  const getRouteSlug = (label: string) => {
    const text = label.toLowerCase();
    if (text.includes("repair") || text.includes("maintenance"))
      return "repair-maintenance";
    if (text.includes("field service") || text.includes("troubleshooting"))
      return "field-inspection";
    if (text.includes("inspection") || text.includes("compliance"))
      return "inspection-compliance";
    if (text.includes("training") || text.includes("onboarding"))
      return "training-and-onboarding";

    // Fallback standard slugifier
    return text.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        // minHeight: { md: "80vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: 0,
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* Left Side: Headline and Button */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 34, lg: 36 },
                lineHeight: { xs: "35px", md: "52px" },
                textTransform: "uppercase",
                fontWeight: 900,
                color: COLORS.BLACK,
                maxWidth: 700,
                mb: 4,
              }}
            >
              {/* <ScrollRevealText text={data.title} /> */}
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Staggered Pills */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack 
              spacing={3} 
              alignItems="stretch"
              // ref={cardsRef}
              // component={motion.div}
              // variants={containerVariants}
              // initial="hidden"
              // animate={isCardsInView ? "visible" : "hidden"}
            >
              {data.items.map((label, i) => (
                <Box
                  key={label}
                  // component={motion.div}
                  // variants={cardVariants}
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "100px",
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 1.2, md: 1.5 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    bgcolor: COLORS.WHITE,
                    ml: getMarginLeft(i),
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.03)",
                    width: "100%",
                    "&:hover": {
                      borderColor: COLORS.PRIMARY_GREEN,
                      bgcolor: "rgba(197, 255, 46, 0.05)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 2, md: 3 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        minWidth: { xs: 40, md: 48 },
                        borderRadius: "50%",
                        bgcolor: COLORS.BLACK,
                        color: COLORS.WHITE,
                        display: "grid",
                        placeItems: "center",
                        fontFamily: din.style.fontFamily,
                        fontSize: { xs: 16, md: 16, lg: 18 },
                        fontWeight: 700,
                      }}
                    >
                      {`0${i + 1}`}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 16, lg: 18 },
                        color: COLORS.BLACK,
                        lineHeight: { xs: "24px", md: 1.2 },
                        letterSpacing: "0.52px",
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>

                  <Link
                    href={`/usecases/${getRouteSlug(label)}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        bgcolor: COLORS.BLACK,
                        borderRadius: "100px",
                        px: { xs: 2.5, md: 3 },
                        py: { xs: 1, md: 1.2 },
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#b8ed1a",
                        fontFamily: din.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { xs: 14, md: 14, lg: 15 },
                        whiteSpace: "nowrap",
                        ml: 2,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "#333",
                        },
                      }}
                    >
                      Know more &rarr;
                    </Box>
                  </Link>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCasesSection;
