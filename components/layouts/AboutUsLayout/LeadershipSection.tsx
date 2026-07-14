"use client";
import React, { useState, useRef } from "react";
import { Box, Container, Grid, Typography, Stack, alpha } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";
import { motion, useInView, Variants } from "framer-motion";
import linkedinIcon from "@/images/social_icons/linkedin.svg";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {},
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LeadershipSection = () => {
  const { leadershipSection: data } = aboutPage;

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <Container
      ref={sectionRef}
      maxWidth={false}
      sx={{
        width: { xs: "90%", md: "90%", lg: "83%" },
        mx: "auto",
        px: 0,
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, md: 36 },
          fontWeight: 900,
          textTransform: "uppercase",
          mb: 8,
          fontFamily: din.style.fontFamily,
          color: COLORS.BLACK,
          lineHeight: "52px",
        }}
      >
        {/* <ScrollRevealText text={data.title} /> */}
        {data.title}
      </Typography>

      <Stack
        spacing={12}
      // component={motion.div}
      // variants={containerVariants}
      // initial="hidden"
      // animate={isSectionInView ? "visible" : "hidden"}
      >
        {data.members.map((member, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <Grid
              container
              key={idx}
              spacing={{ xs: 4, md: 8 }}
              alignItems="flex-start"
              direction={isEven ? "row-reverse" : "row"}
            // component={motion.div}
            // variants={cardVariants}
            >
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isEven ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={600}
                    style={{
                      width: isEven ? "250px" : "400px",
                      height: isEven ? "auto" : "auto",
                      display: "block",
                      marginTop: "50px",
                      filter: "grayscale(100%)",
                    }}
                    priority={idx === 0}
                  />
                ) : (
                  <Image
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: isEven ? "250px" : "350px",
                      height: isEven ? "auto" : "auto",
                      display: "block",
                      filter: "grayscale(100%)",
                    }}
                    priority={idx === 0}
                  />
                )}
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box
                  sx={{
                    textAlign: "left",
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      fontSize: { xs: 26, md: 36 },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      fontFamily: din.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: 1.1,
                      mb: 0.8,
                    }}
                  >
                    {member.name}
                    {member.linkedin && (
                      <Box
                        component="a"
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "inline-flex",
                          verticalAlign: "super",
                          ml: 1,
                          color: "rgba(0, 0, 0, 0.35)",
                          transition: "color 0.2s ease-in-out",
                          "&:hover": {
                            color: "#0a66c2", // classic LinkedIn blue
                          },
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: "inline-block",
                            width: "0.55em",
                            height: "0.55em",
                            bgcolor: "currentColor",
                            mask: `url(${linkedinIcon.src}) no-repeat center / contain`,
                            WebkitMask: `url(${linkedinIcon.src}) no-repeat center / contain`,
                          }}
                        />
                      </Box>
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 20 },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      mb: 4,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.PRIMARY_GREEN,
                      lineHeight: 1.3,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: "28px",
                      fontFamily: helvetica.style.fontFamily,
                      color: "rgba(0, 0, 0, 0.8)",
                      textAlign: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Container>
  );
};

export default LeadershipSection;
