"use client";

import VerticalStepper from "@/components/widgets/VerticalStepper";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Grid, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const DesignToEvolve = () => {
  const data = homePage.productPage.designToEvolve;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        {/* TITLE */}
        <Typography
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 32, lg: 36 },
            lineHeight: { xs: "35px", md: "52px" },
            maxWidth: 900,
          }}
        >
          {data.title.includes("evolve") ? (
            <>
              {data.title.split("evolve")[0]}
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              evolve
              {data.title.split("evolve")[1]}
            </>
          ) : (
            data.title
          )}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          sx={{
            mt: 3,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 16, lg: 18 },
            lineHeight: { xs: "28px", md: "30px" },
            letterSpacing: "0.52px",
            color: COLORS.TEXT_GRAY,
            maxWidth: 1000,
          }}
        >
          {data.description}
        </Typography>

        {/* MENU + CONTENT */}
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          sx={{ mt: { xs: 6, md: 6 } }}
        >
          {/* LEFT MENU */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 2 },
                alignItems: "flex-start",
              }}
            >
              {data.variants.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                >
                  <Box>
                    <Box
                      onClick={() => setActiveIndex(index)}
                      sx={{
                        fontFamily: din.style.fontFamily,
                        border:
                          activeIndex === index
                            ? `2px solid ${COLORS.PRIMARY_HOVER}`
                            : "2px solid transparent",
                        borderRadius: "99px",
                        display: "inline-block",
                        px: { xs: 2, md: 3 },
                        py: 1,
                        color:
                          activeIndex === index
                            ? COLORS.PRIMARY_HOVER
                            : COLORS.WHITE,
                        textTransform: "uppercase",
                        letterSpacing: "0.52px",
                        fontSize: { xs: 12, md: 14, lg: 16 },
                        fontWeight: 700,
                        width: "fit-content",
                        cursor: "pointer",
                        transition: "all 0.35s ease",
                        position: "relative",
                        overflow: "hidden",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(90deg, transparent, rgba(162,211,37,0.15), transparent)",
                          transform: "translateX(-100%)",
                          transition: "transform 0.6s ease",
                        },

                        "&:hover::before": {
                          transform: "translateX(100%)",
                        },

                        "&:hover": {
                          bgcolor:
                            activeIndex === index
                              ? "transparent"
                              : "rgba(255,255,255,0.05)",
                          borderColor:
                            activeIndex === index
                              ? COLORS.PRIMARY_HOVER
                              : "rgba(255,255,255,0.2)",
                          transform: "scale(1.04)",
                        },
                      }}
                    >
                      {item.title}
                    </Box>

                    {/* MOBILE CONTENT */}
                    {activeIndex === index && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Box
                            sx={{
                              display: { xs: "block", md: "none" },
                              mt: 2,
                              mb: 4,
                              px: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: helvetica.style.fontFamily,
                                fontWeight: 700,
                                fontSize: { xs: 18, md: 16 },
                                color: COLORS.WHITE,
                                mb: 1.5,
                                textTransform: "none",
                              }}
                            >
                              {item.subHeading || item.title}
                            </Typography>

                            <Typography
                              sx={{
                                fontFamily: helvetica.style.fontFamily,
                                fontSize: { xs: 16, md: 16 },
                                lineHeight: { xs: "26px", md: 1.5 },
                                color: COLORS.TEXT_GRAY,
                                textTransform: "none",
                              }}
                            >
                              {item.description}
                            </Typography>
                          </Box>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              position: "relative",
              display: { xs: "none", md: "block" },
            }}
          >
            <VerticalStepper
              itemsCount={data.variants.length}
              activeIndex={activeIndex}
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
              }}
            />

            <Box
              sx={{
                pl: { xs: 0, md: 6 },
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: 18, md: 16 },
                      color: COLORS.WHITE,
                      lineHeight: "30px",
                      mb: 1.1,
                      textTransform: "none",
                    }}
                  >
                    {data.variants[activeIndex].subHeading ||
                      data.variants[activeIndex].title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 16 },
                      lineHeight: "30px",
                      color: COLORS.TEXT_GRAY,
                      maxWidth: 650,
                      textTransform: "none",
                    }}
                  >
                    {data.variants[activeIndex].description}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Grid>
        </Grid>

        {/* DEVICE IMAGE */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.92, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
            y: -8,
          }}
          sx={{
            width: { xs: "90%", md: "60%" },
            mx: "auto",
            mt: { xs: 6, md: 10 },
            borderRadius: { xs: 2.5, md: "24px" },
            overflow: "hidden",
            border: `1px solid ${COLORS.WHITE_ALPHA_20}`,
            position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          }}
        >
          {/* GLOW */}
          <Box
            component={motion.div}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(162,211,37,0.25), transparent 70%)",
              top: "-20%",
              right: "-10%",
              filter: "blur(45px)",
              zIndex: 1,
            }}
          />

          {/* FLOATING IMAGE */}
          <Box
            component={motion.div}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              width: "100%",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Image
              src={data.img}
              alt="Platform preview"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DesignToEvolve;