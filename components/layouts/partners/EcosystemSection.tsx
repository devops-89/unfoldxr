"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import React, { useState, useRef } from "react";
import { din, helvetica } from "@/utils/fonts";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";
import { motion, useInView, Variants } from "framer-motion";

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

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = partnersPage.ecosystemSystem;

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: "#000",
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            p: { xs: 4, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: 26, md: 36 },
              mb: 4,
              color: "#000",
              lineHeight: "52px",
              maxWidth: "800px",
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
              fontFamily: din.style.fontFamily,
            }}
          >
            {/* <ScrollRevealText text={partnersPage.ecosystemSystem.heading} /> */}
            {partnersPage.ecosystemSystem.heading}
          </Typography>

          <Grid container spacing={6}>
            {/* LEFT */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                // component={motion.div}
                // variants={containerVariants}
                // initial="hidden"
                // animate={isSectionInView ? "visible" : "hidden"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {data.map((item, i) => (
                  <Box
                    key={i}
                    // component={motion.div}
                    // variants={cardVariants}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "stretch",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flex: 1, alignItems: "stretch" }}
                    >
                      {/* Header Pill Wrapper to ensure Stepper alignment */}
                      <Box
                        sx={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {/* The Header Pill */}
                        <Box
                          onClick={() => setActiveTab(i)}
                          sx={{
                            border:
                              activeTab === i
                                ? `2px solid ${COLORS.PRIMARY_HOVER}`
                                : "2px solid transparent",
                            borderRadius: "32px",
                            px: { xs: 2.3, md: 3 },
                            py: activeTab === i ? 2 : 1.2,
                            opacity: activeTab === i ? 1 : 0.5,
                            cursor: "pointer",
                            width: "fit-content",
                            transition: "all 0.3s ease",
                            mb: 1,
                            "&:hover": {
                              bgcolor: "rgba(0, 0, 0, 0.03)",
                              borderColor:
                                activeTab === i
                                  ? COLORS.PRIMARY_HOVER
                                  : "rgba(0, 0, 0, 0.1)",
                              opacity: 1,
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: din.style.fontFamily,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              color:
                                activeTab === i
                                  ? COLORS.PRIMARY_HOVER
                                  : COLORS.BLACK,
                              fontSize: { xs: 18, md: 16 },
                              lineHeight: "22px",
                              letterSpacing: "0.52px",
                              maxWidth: { xs: "85vw", md: "100%" },
                              whiteSpace: "normal",
                            }}
                          >
                            {item.label}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Vertical Stepper Dot (Integrated) */}
                      <Box
                        sx={{
                          display: { xs: "none", md: "flex" },
                          flexDirection: "column",
                          alignItems: "center",
                          width: 60,
                          position: "relative",
                          alignSelf: "stretch",
                          mb: 2.5,
                        }}
                      >
                        {/* Continuous Background Line Segment */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: i === 0 ? "50%" : -12.5,
                            bottom: i === data.length - 1 ? "50%" : -12.5,
                            width: "2px",
                            bgcolor: "#E0E0E0",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 0,
                          }}
                        />

                        {/* Top Progress Segment */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: -12.5,
                            bottom: "50%",
                            width: "2px",
                            bgcolor:
                              i <= activeTab && i > 0
                                ? COLORS.BLACK
                                : "transparent",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1,
                          }}
                        />
                        {/* Bottom Progress Segment */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            bottom: -12.5,
                            width: "2px",
                            bgcolor:
                              i < activeTab ? COLORS.BLACK : "transparent",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: i === data.length - 1 ? "none" : "block",
                            zIndex: 1,
                          }}
                        />

                        {/* The Dot */}
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: i <= activeTab ? COLORS.BLACK : "#BDBDBD",
                            borderRadius: "50%",
                            position: "relative",
                            zIndex: 2,
                            mt: "auto",
                            mb: "auto",
                            transition: "all 0.3s ease",
                            transform:
                              activeTab === i ? "scale(1.2)" : "scale(1)",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Mobile Description: Integrated into flow */}
                    <Box
                      sx={{
                        display: {
                          xs: activeTab === i ? "block" : "none",
                          md: "none",
                        },
                        px: 2,
                        pb: 4,
                        mt: -1,
                        animation: "fadeIn 0.3s ease",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "rgba(0,0,0,0.8)",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* RIGHT (Desktop only) */}
            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  pl: { md: 6 },
                  pt: { xs: 4, md: 0 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  key={activeTab} // Smooth fade trigger
                  sx={{
                    fontSize: { xs: 16, md: 16 },
                    lineHeight: "28px",
                    color: "#000",
                    fontWeight: 500,
                    maxWidth: { xs: "100%", md: "500px" },
                    mx: { xs: "auto", md: 0 },
                    // animation: "fadeIn 0.5s ease-in-out",
                    // "@keyframes fadeIn": {
                    //   from: { opacity: 0, transform: "translateY(10px)" },
                    //   to: { opacity: 1, transform: "translateY(0)" },
                    // },
                  }}
                >
                  {data[activeTab].description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EcosystemSection;
