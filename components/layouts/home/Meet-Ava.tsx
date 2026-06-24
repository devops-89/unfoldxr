"use client";

import ContainedButton from "@/components/widgets/ContainedButton";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Meetava = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <Box
      sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 8, md: 12 }, overflow: "hidden" }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "95%", lg: "90%" },
          // height: { xs: "auto", md: "60%" },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 4, md: 8, xl: 10 } }}>
          <Grid container alignItems="center" spacing={{ xs: 4, md: 6 }}>
            {/* LEFT: Heading + description + CTA */}
            <Grid size={{ xs: 12, md: 7 }} ref={ref}>
              <Stack spacing={3}>
                {/* <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                > */}
                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 36 },
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: { xs: "35px", md: "52px" },
                  }}
                >
                  {homePage.meetAva.heading}
                </Typography>
                {/* </motion.div> */}

                {/* <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                > */}
                <Stack spacing={2}>
                  {homePage.meetAva.leftSection.description.map((val, i) => {
                    /*
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                      }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    >
                    */
                    return (
                      <Typography
                        key={i}
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 14, md: 18 },
                          fontWeight: 400,
                          lineHeight: { xs: "26px", md: "28px" },
                          color: "#000",
                          textAlign: { xs: "center", md: "justify" },
                          letterSpacing: "0.52px",
                        }}
                      >
                        {val.label}
                      </Typography>
                    );
                    /*
                    </motion.div>
                    */
                  })}
                </Stack>
                {/* </motion.div> */}
                
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                > */}
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Link href="/meet-ava" style={{ textDecoration: "none" }}>
                    <ContainedButton
                      sx={{
                        width: { xs: "100%", md: "auto" },
                        borderRadius: 99,
                        px: { xs: 2.5, md: 4 },
                        py: 1.2,
                        fontSize: { xs: 14, md: 18, lg: 16 },
                        position: "relative",
                        overflow: "hidden",
                    
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
                      Meet AVA
                    </ContainedButton>
                  </Link>
                </Box>
                {/* </motion.div> */}
              </Stack>
            </Grid>

            {/* RIGHT: placeholder note + image */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, rotate: -5 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
              <Stack alignItems={{ xs: "center", md: "flex-end" }} spacing={1}>
                <Box
                  component="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: { xs: "320px", md: "420px" },
                    borderRadius: "50%",
                    display: "block",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="/images/homepage/White-globe.mp4"
                    type="video/mp4"
                  />
                </Box>
              </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Meetava;
