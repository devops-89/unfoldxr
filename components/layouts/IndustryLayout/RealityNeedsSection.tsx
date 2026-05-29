"use client";
import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import { motion } from "framer-motion";

interface Props {
  data: IndustryData["realityNeeds"];
}

const RealityNeedsSection = ({ data }: Props) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      sx={{
        bgcolor: COLORS.WHITE,
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
        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 28, md: 36},
            lineHeight: { xs: "35px", md: "42px" },
            textTransform: "uppercase",
            fontWeight: 900,  color: COLORS.BLACK,
            mb: 4,
          }}
        >
          {data.title}
        </Typography>

        <Grid container columnSpacing={6} rowSpacing={{ xs: 6, md: 6 }}>
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 4 },
                height: "100%",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0 22px 45px rgba(0,0,0,0.22)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 72%)",
                  transform: "translateX(-120%)",
                  transition: "transform 0.65s ease",
                  zIndex: 0,
                },
                "&:hover::after": {
                  transform: "translateX(120%)",
                },
                "& > *": {
                  position: "relative",
                  zIndex: 1,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 18 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  lineHeight: { xs: "28px", md: "30px" },
                  letterSpacing: "0.52px",
                  mb: 2,
                }}
              >
                {data.realitiesTitle}
              </Typography>
              <Box 
                sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                component={motion.div}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {data.realities.map((item) => (
                  <Typography
                    key={item}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 16 },
                      lineHeight: { xs: "26px", md: "27px" },
                      letterSpacing: "0.52px",
                      display: "flex",
                      gap: 1.5,
                      "&::before": {
                        content: '"•"',
                        color: COLORS.WHITE,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 4 },
                height: "100%",
                mb: { xs: 3, md: 0 },
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0 22px 45px rgba(0,0,0,0.22)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 72%)",
                  transform: "translateX(-120%)",
                  transition: "transform 0.65s ease",
                  zIndex: 0,
                },
                "&:hover::after": {
                  transform: "translateX(120%)",
                },
                "& > *": {
                  position: "relative",
                  zIndex: 1,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 18 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  lineHeight: { xs: "28px", md: "30px" },
                  letterSpacing: "0.52px",
                  mb: 2,
                  whiteSpace: "pre-line",
                }}
              >
                {data.needsTitle}
              </Typography>
              <Box 
                sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                component={motion.div}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {data.needs.map((item) => (
                  <Typography
                    key={item}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 16 },
                      lineHeight: { xs: "26px", md: "27px" },
                      letterSpacing: "0.52px",
                      display: "flex",
                      gap: 1.5,
                      "&::before": {
                        content: '"•"',
                        color: COLORS.WHITE,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 18, md: 26, lg: 18 },
            mt: { xs: 8, md: 10 },
            maxWidth: 1100,
            mx: "auto",
            color: COLORS.BLACK,
            fontWeight: 700,
            lineHeight: { xs: "28px", md: "30px" },
            letterSpacing: "0.52px",
            whiteSpace: "pre-line",
          }}
        >
          {data.bottomText}
        </Typography>

      </Box>
    </Box>
  );
};

export default RealityNeedsSection;
