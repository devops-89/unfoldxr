"use client";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "@/utils/count-up";



const Metrics = () => {
  return (

    <Box>
      <Container maxWidth="xl">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            backgroundColor: "#EDEDED",
            borderRadius: "45px",
            mt: { xs: 4, md: 6 },
            px: { xs: 4, sm: 6, md: 8 },
            pt: { xs: 5, md: 6 },
            pb: { xs: 6, md: 2 },
          }}
        >
          {/* Heading — full width, centered, uppercase bold */}
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 22, sm: 28, md: 36 },
              fontWeight: 900,
              lineHeight: { xs: "35px", md: "52px" },
              textTransform: "uppercase",
              textAlign: "center",
              color: "#000",
              width: { xs: "100%", md: "100%" },
              mb: { xs: 4, md: 3 },
            }}
          >
            {homePage.metrics.heading}
          </Typography>

          {/* Inner white box containing all content below heading */}
          <Box
            sx={{
              maxWidth: "1150px",
              mx: "auto",
              borderRadius: "24px",
              px: { xs: 3, md: 2 },
              py: { xs: 4, md: 5 },
              overflow: "hidden",
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              {/* LEFT */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack
                  alignItems={{ xs: "center", md: "flex-start" }}
                  spacing={0}
                >
                  {/* "We commit atleast"
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 18, md: 20, lg: 22 },
                      fontWeight: 700,
                      lineHeight: "30px",
                      letterSpacing: "0.52px",
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                  >
                    {homePage.metrics.leftSection.heading}
                  </Typography> */}

                  {/* 30% */}
                  <Typography
                    component={motion.div}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 10,
                    }}
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontSize: {
                        xs: "100px",
                        sm: "160px",
                        md: "200px",
                        lg: "250px",
                      },
                      fontWeight: 900,
                      color: "#1C1C1C",
                      lineHeight: 0.85,
                      letterSpacing: { xs: "-1px", md: "-4px" },

                      ml: { xs: 0, md: -2 },
                    }}
                  >
                    <CountUp
                      from={0}
                      to={30}
                      duration={1}
                      className="count-up-text"
                    />
                    %
                  </Typography>
                </Stack>
              </Grid>

              {/* RIGHT */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack
                  component={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  spacing={0}
                  alignItems={{ xs: "center", md: "flex-end" }}
                  justifyContent="center"
                  sx={{ mt: { xs: 4, md: 0 } }}
                >
                  {homePage.metrics.rightSection.map((val, i) => (
                    <Typography
                      component={motion.div}
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      key={i}
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontSize: { xs: 20, sm: 28, md: 28 },
                        fontWeight: 400,
                        lineHeight: { xs: "28px", md: "30px" },
                        color: "#000",
                        textAlign: { xs: "center", md: "right" },
                        textTransform: "capitalize",
                        mb: { xs: 2, md: 3 },
                        letterSpacing: "0.52px",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: din.style.fontFamily,
                          fontSize: { xs: 20, sm: 28, md: 30 },
                          fontWeight: 900,
                          color: "#000",
                          lineHeight: { xs: "28px", md: "30px" },
                          textTransform: "capitalize",
                        }}
                      >
                        {val.label}{" "}
                      </Typography>
                      {val.value}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Metrics;
