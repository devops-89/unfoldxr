"use client";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import WorkforceCard from "./components/WorkForce-Card";

const WorkForce = () => {

  return (
    <Box>
      <Container maxWidth={false} disableGutters>
        <Box
  component={motion.div}
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  whileHover={{
    y: -8,
    scale: 1.01,
  }}
  sx={{
    backgroundColor: COLORS.WHITE,
    px: { xs: 2, sm: 6, md: 10 },
    pt: { xs: 5, md: 6 },
    pb: { xs: 6, md: 6 },
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: { xs: "90%", md: "90%", lg: "80%" },
    mx: "auto",

    position: "relative",
    overflow: "hidden",

    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "radial-gradient(circle, rgba(162,211,37,0.12) 0%, transparent 60%)",
      animation: "pulseGlow 8s linear infinite",
      zIndex: 0,
    },

    "@keyframes pulseGlow": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },

    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  }}
>
          <Box sx={{ width: "100%" }}>
            {/* Heading */}
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              sx={{
                color: "#000",
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 24, md: 36 },
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: { xs: "35px", md: "52px" },
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
                wordBreak: "break-word",
              }}
            >
              {homePage.workforce.heading}
            </Typography>

            {/* Description */}
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              sx={{
                color: "#000",
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: 1.4, md: "30px" },
                letterSpacing: "0.52px",
                mt: { xs: 2, md: 2 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {homePage.workforce.description}
            </Typography>

            {/* Cards */}
            <Grid
              container
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }} 
              sx={{ mt: { xs: 4, md: 10 } }} 
              spacing={4}
            >
              {homePage.workforce.data.map((val, i) => (
                <Grid
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={i}
                  sx={{
                    mt: { xs: 0, md: 0 },
                  }}
                >
                  <WorkforceCard
                    img={val.img}
                    icon={val.icon}
                    heading={val.heading}
                    description={val.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkForce;
