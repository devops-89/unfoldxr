"use client";

import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

const ExploreCapabilities = () => {
  const data = homePage.productPage.exploreCapabilities;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10, lg: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)",
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      />

      {/* Intersect Background Images for visual depth */}
      <Box
        component="img"
        src="/images/usecase/Intersect.png"
        sx={{
          position: "absolute",
          top: "0%",
          left: 0,
          width: { xs: "200px", md: "650px" },
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src="/images/usecase/Intersect1.png"
        sx={{
          position: "absolute",
          bottom: "3%",
          right: 0,
          width: { xs: "200px", md: "650px" },
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 48, lg: 36 },
            lineHeight: { xs: "35px", md: "52px" },
            mb: { xs: 6, md: 8 },
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={{ xs: 5, md: 0 }}>
          {/* Left Column: Menu Items & Stepper */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                gap: { xs: 2, md: 0 },
              }}
            >
              {data.modes.map((item, index) => (
                <Box
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, x: -28 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key={item.title}
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "space-between",
                  }}
                >
                  {/* The interactive pill button */}
                  <Box sx={{ flex: 1, py: activeIndex === index ? 1 : 0.8 }}>
                    <Box
                      component={motion.div}
                      whileHover={{ x: 8, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      onClick={() => setActiveIndex(index)}
                      sx={{
                        border:
                          activeIndex === index
                            ? `1.5px solid ${COLORS.PRIMARY_GREEN}`
                            : "1.5px solid transparent",
                        borderRadius: "24px",
                        px: { xs: 3, md: 4 },
                        py: activeIndex === index ? 2 : 1.2,
                        width: "fit-content",
                        cursor: "pointer",
                        opacity: activeIndex === index ? 1 : 0.55,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.04)",
                          borderColor:
                            activeIndex === index
                              ? COLORS.PRIMARY_GREEN
                              : "rgba(255, 255, 255, 0.15)",
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
                            activeIndex === index
                              ? COLORS.PRIMARY_GREEN
                              : COLORS.WHITE,
                          fontSize: { xs: 18, md: 16 },
                          lineHeight: { xs: "28px", md: "22px" },
                          letterSpacing: "0.52px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.5,
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 14, md: 13.5 },
                          fontWeight: 500,
                          color:
                            activeIndex === index
                              ? "rgba(255, 255, 255, 0.9)"
                              : "rgba(255, 255, 255, 0.5)",
                          lineHeight: "18px",
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Box>

                    {/* Mobile Only: Description inside the item */}
                    {activeIndex === index && (
                      <Typography
                        sx={{
                          display: { xs: "block", md: "none" },
                          mt: 2,
                          px: 3,
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: 15,
                          lineHeight: "26px",
                          color: "rgba(255, 255, 255, 0.85)",
                          textTransform: "none",
                          animation: "slideDown 0.3s ease",
                          "@keyframes slideDown": {
                            from: { opacity: 0, transform: "translateY(-8px)" },
                            to: { opacity: 1, transform: "translateY(0)" },
                          },
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </Box>

                  {/* Desktop Stepper Dots Column with glowing dynamic line */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      width: "80px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {/* Top Segment Line */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        bottom: "50%",
                        width: "1.5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor:
                          index <= activeIndex
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(255, 255, 255, 0.1)",
                        zIndex: 0,
                        opacity: index === 0 ? 0 : 1,
                      }}
                    />
                    {/* Bottom Segment Line */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        bottom: 0,
                        width: "1.5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor:
                          index < activeIndex
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(255, 255, 255, 0.1)",
                        zIndex: 0,
                        opacity: index === data.modes.length - 1 ? 0 : 1,
                      }}
                    />

                    {/* Dot */}
                    <Box
                      sx={{
                        width: activeIndex === index ? "12px" : "8px",
                        height: activeIndex === index ? "12px" : "8px",
                        bgcolor:
                          activeIndex >= index
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(255, 255, 255, 0.3)",
                        borderRadius: "50%",
                        transition: "all 0.4s ease",
                        zIndex: 1,
                        boxShadow:
                          activeIndex === index
                            ? `0 0 10px ${COLORS.PRIMARY_GREEN}`
                            : "none",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column: Active Description (Desktop only) */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                pl: { xs: 0, md: 5 },
                pt: { xs: 0, md: 3 },
                position: "sticky",
                top: 100,
              }}
            >
              <Typography
                component={motion.div}
                key={activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 17 },
                  lineHeight: "32px",
                  letterSpacing: "0.52px",
                  color: COLORS.WHITE,
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {data.modes[activeIndex].description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExploreCapabilities;
