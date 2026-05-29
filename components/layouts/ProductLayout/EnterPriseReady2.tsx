"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { motion } from "framer-motion";

const ICON_MAP: Record<string, React.ReactNode> = {
  integration: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 24 }} />,
  governance: <AccountTreeRoundedIcon sx={{ fontSize: 24 }} />,
  config: <SettingsSuggestRoundedIcon sx={{ fontSize: 24 }} />,
  devices: <DevicesRoundedIcon sx={{ fontSize: 24 }} />,
  procurement: <HandymanRoundedIcon sx={{ fontSize: 24 }} />,
};

const EnterpriseReady2 = () => {
  const data = homePage.productPage.enterpriseReady;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 6, md: 6, lg: 5 },
        minHeight: { md: "85vh", lg: "75vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "@keyframes fadeInUp": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Background Image with Premium Blending */}
      {/* <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: "100%", md: "100%", lg: "1000px" },
          maxWidth: { md: "500px", lg: "520px" },
          zIndex: 1,
          opacity: { xs: 0.3, md: 0.85 },
        }}
      >
        <Box
          component="img"
          src={data.img}
          alt="Enterprise operations"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "90%", md: "85%", lg: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container justifyContent="flex-end">
          <Grid
            size={{ xs: 12, md: 7.5, lg: 7 }}
            sx={{
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: "1.1", md: "1.1" },
                fontSize: { xs: 22, md: 32, lg: 36 },
                mb: { xs: 4, md: 3, lg: 2 },
              }}
            >
              {data.title.split(".").map((text, i) => (
                <React.Fragment key={i}>
                  {text}
                  {i < data.title.split(".").length - 1 && (
                    <Box
                      component="br"
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3, lg: 4.5 }}>
              {(data.points as any[]).map((point, index) => (
                <Grid
                  key={point.title}
                  size={{ xs: 12, sm: 6 }}
                  sx={{
                    animation: `fadeInUp 0.6s ease-out forwards ${
                      0.2 + index * 0.08
                    }s`,
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 1, md: 1.5 },
                    }}
                  >
                    <Box
                      sx={{
                        color: COLORS.PRIMARY_GREEN,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: 36, md: 44 },
                        height: { xs: 36, md: 44 },
                        borderRadius: "50%",
                        bgcolor: "rgba(204, 249, 25, 0.05)",
                        border: "1px solid rgba(204, 249, 25, 0.15)",
                        boxShadow: "0 0 15px rgba(204, 249, 25, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(204, 249, 25, 0.1)",
                          boxShadow: "0 0 25px rgba(204, 249, 25, 0.15)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      {ICON_MAP[point.icon]}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 14, md: 15 },
                          textTransform: "uppercase",
                          lineHeight: "1.2",
                          mb: 0.5,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: COLORS.TEXT_MUTED,
                          fontSize: { xs: 12, md: 13 },
                          lineHeight: "1.3",
                          opacity: 0.8,
                          maxWidth: "320px",
                        }}
                      >
                        {point.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
      <Container
        maxWidth="lg"
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <Grid container alignItems={"center"} spacing={10}>
          {/* Left Side: Image */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, scale: 0.85, x: -50, rotate: -5 },
                visible: { opacity: 1, scale: 1, x: 0, rotate: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={data.img}
                  alt=""
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    filter: "drop-shadow(0px 20px 40px rgba(162, 211, 37, 0.15))",
                  }}
                />
              </motion.div>
            </Box>
          </Grid>

          {/* Right Side: Text & Features */}
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
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
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: "1.1", md: "1.1" },
                fontSize: { xs: 22, md: 32, lg: 36 },
                mb: { xs: 4, md: 3, lg: 2 },
              }}
            >
              {data.title.split(".").map((text, i) => (
                <React.Fragment key={i}>
                  {text}
                  {i < data.title.split(".").length - 1 && (
                    <Box
                      component="br"
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3, lg: 4.5 }}>
              {(data.points as any[]).map((point, index) => (
                <Grid
                  key={point.title}
                  size={{ xs: 12, sm: 6 }}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 1, md: 1.5 },
                    }}
                  >
                    <Box
                      sx={{
                        color: COLORS.PRIMARY_GREEN,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: 36, md: 44 },
                        height: { xs: 36, md: 44 },
                        borderRadius: "50%",
                        bgcolor: "rgba(204, 249, 25, 0.05)",
                        border: "1px solid rgba(204, 249, 25, 0.15)",
                        boxShadow: "0 0 15px rgba(204, 249, 25, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(204, 249, 25, 0.1)",
                          boxShadow: "0 0 25px rgba(204, 249, 25, 0.15)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      {ICON_MAP[point.icon]}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 14, md: 15 },
                          textTransform: "uppercase",
                          lineHeight: "1.2",
                          mb: 0.5,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: COLORS.TEXT_MUTED,
                          fontSize: { xs: 12, md: 13 },
                          lineHeight: "1.3",
                          opacity: 0.8,
                          maxWidth: "320px",
                        }}
                      >
                        {point.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EnterpriseReady2;
