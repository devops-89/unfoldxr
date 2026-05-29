"use client";

import { useDemoModal } from "@/components/context/DemoModalContext";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Ava3DCanvas from "@/components/widgets/Ava3DCanvas";
import MeetAvaImg from "@/images/Product/MeetAva.png";
import BlurText from "@/components/widgets/BlurText";
import SplitText from "@/components/widgets/SplitText";

const HeroSection = () => {
  const { heroSection: data } = meetAvaPage;
  const { openModal } = useDemoModal();

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 8, md: 4 },
        pb: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "90%", md: "85%", lg: "83%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 6, md: 4 }} 
          alignItems="stretch"
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              transition: {
                delayChildren: 0.15,
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <Grid
            size={{ xs: 12, md: 6.5, lg: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <Stack spacing={4}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Small Label Title */}
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 14, md: 18, lg: 20 },
                    fontWeight: 700,
                    color: COLORS.WHITE,
                    lineHeight: 1.2,
                    letterSpacing: "0.05em",
                    opacity: 0.9,
                    textTransform: "uppercase",
                  }}
                >
                  {data.title}
                </Typography>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Main Heading */}
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: 26, md: 50, lg: 36 },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                    lineHeight: { xs: "1.1", md: "1.1" },
                    whiteSpace: "pre-line",
                  }}
                >
                  <BlurText
                    text={data.heading}
                    animateBy="words"
                    direction="top"
                  />
                </Typography>
              </motion.div>

              <Box sx={{ mt: 2 }}>
                {/* Subheading / Description */}
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18, lg: 19 },
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.6,
                    maxWidth: { md: "90%", lg: "85%" },
                  }}
                >
                  <SplitText text={data.subHeading} splitType="lines" delay={30} globalDelay={0.8} />
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Right Section: Image */}
          <Grid
            size={{ xs: 12, md: 5.5, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <Box
              component={motion.div}
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
                delay: 1.2
              }}
              whileHover={{ scale: 1.035, rotate: 1.5 }}
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 600, md: 800 },
                ml: { md: -2, lg: -4 },
                mt: { xs: 4, md: 6, lg: 8 },
                height: { xs: 350, md: 520, lg: 500 }, // Added height for the canvas
              }}
            >
              <Box
                component={motion.div}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0px 0px 80px rgba(162, 211, 37, 0.25))",
                }}
              >
                <Ava3DCanvas imageSrc={MeetAvaImg.src} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Background Decorative Blur (Optional, for premium feel) */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          bgcolor: "rgba(162, 211, 37, 0.08)",
          filter: "blur(180px)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default HeroSection;
