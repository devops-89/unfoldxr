"use client";
// ava support page
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { meetAvaPage } from "@/utils/Website-Data";
import VerticalStepper from "@/components/widgets/VerticalStepper";

const AvaSupportSection = () => {
  const { supportSection: data } = meetAvaPage;
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <Box
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 10 } }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
          py: { xs: 2.5, md: 4 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 28, md: 32, lg: 36 },
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: "52px",
            mb: 2,
          }}
        >
          {data.heading}
        </Typography>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18, lg: 18 },
            lineHeight: "30px",
            letterSpacing: "0.52px",
            maxWidth: 1660,
            mb: { xs: 4, md: 8, lg: 10   },
          }}
        >
          {data.description}
        </Typography>

        <Grid container spacing={{ xs: 3, md: 0 }}>
          {/* Left: Menu & Stepper combined for perfect height sync */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {data.features.map((feature, i) => (
                <Box
                  key={feature.label}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "stretch",
                    position: "relative",
                  }}
                >
                  <Box sx={{ display: "flex", flex: 1, alignItems: "stretch" }}>
                    {/* Header Pill Wrapper to ensure Stepper alignment */}
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {/* The Header Pill */}
                      <Box
                        onClick={() => setActiveFeature(i)}
                        sx={{
                          border:
                            activeFeature === i
                              ? `2px solid ${COLORS.PRIMARY_GREEN}`
                              : "2px solid transparent",
                          borderRadius: "32px",
                          px: { xs: 2.3, md: 3 },
                          py: activeFeature === i ? 2 : 1.2,
                          opacity: activeFeature === i ? 1 : 0.5,
                          cursor: "pointer",
                          width: "fit-content",
                          transition: "all 0.3s ease",
                          mb: 1,
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            borderColor:
                              activeFeature === i
                                ? COLORS.PRIMARY_GREEN
                                : "rgba(255, 255, 255, 0.1)",
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
                              activeFeature === i
                                ? COLORS.PRIMARY_GREEN
                                : COLORS.WHITE,
                            fontSize: { xs: 18, md: 16 },
                            lineHeight: "22px",
                            letterSpacing: "0.52px",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {feature.label}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Vertical Stepper Dot (Integrated) */}
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        alignItems: "center",
                        width: 60,
                        position: "relative",
                        alignSelf: "stretch",
                        mb: 2.5,
                      }}
                    >
                      {/* Continuous Background Line Segment */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: i === 0 ? "50%" : -12.5,
                          bottom: i === data.features.length - 1 ? "50%" : -12.5,
                          width: "2px",
                          bgcolor: "#333333",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 0,
                        }}
                      />

                      {/* Top Progress Segment */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: -12.5,
                          bottom: "50%",
                          width: "2px",
                          bgcolor:
                            i <= activeFeature && i > 0
                              ? COLORS.PRIMARY_GREEN
                              : "transparent",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 1,
                        }}
                      />
                      {/* Bottom Progress Segment */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          bottom: -12.5,
                          width: "2px",
                          bgcolor:
                            i < activeFeature
                              ? COLORS.PRIMARY_GREEN
                              : "transparent",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display:
                            i === data.features.length - 1 ? "none" : "block",
                          zIndex: 1,
                        }}
                      />

                      {/* The Dot */}
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor:
                            i <= activeFeature
                              ? COLORS.PRIMARY_GREEN
                              : "rgba(255, 255, 255, 0.4)",
                          borderRadius: "50%",
                          position: "relative",
                          zIndex: 2,
                          mt: "auto",
                          mb: "auto",
                          transition: "all 0.3s ease",
                          transform:
                            activeFeature === i ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Mobile Description: Integrated into flow */}
                  <Box
                    sx={{
                      display: {
                        xs: activeFeature === i ? "block" : "none",
                        md: "none",
                      },
                      px: 2,
                      pb: 4,
                      mt: -1,
                      animation: "fadeIn 0.3s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right: Description (Desktop only) */}
          <Grid size={{ xs: 12, md: 6.5 }} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                pl: { xs: 0, md: 8 },
                py: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 18, md: 20, lg: 16 },
                    fontWeight: 500,
                    lineHeight: "30px",
                    color: COLORS.WHITE,
                    maxWidth: { xs: 260, sm: 500, md: 800 },
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {data.features[activeFeature].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AvaSupportSection;
