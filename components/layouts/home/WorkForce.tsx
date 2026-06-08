"use client";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WorkforceCard from "./components/WorkForce-Card";
import { motion } from "framer-motion";

const WorkForce = () => {
  return (
    <Box>
      <Container maxWidth={false} disableGutters>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          // margin: "-100px" ensures the animation resets when scrolled slightly out of view
          viewport={{ once: false, amount: 0.2, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
          }}
        >
          <Box sx={{ width: "100%" }}>
            
            {/* Heading WITH Cinematic Blur Reveal */}
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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

            {/* Description WITH Cinematic Blur Reveal */}
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }} // Replays every scroll
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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

            {/* Cards WITHOUT Blur (Standard fade-up) */}
            <Grid
              container
              sx={{ mt: { xs: 4, md: 10 } }} 
              spacing={4}
            >
              {homePage.workforce.data.map((val, i) => (
                <Grid
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (i * 0.15),
                    ease: "easeOut" 
                  }}
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