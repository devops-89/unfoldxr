"use client";

import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const ExploreCapabilities = () => {
  const data = homePage.productPage.exploreCapabilities;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 48, lg: 36 },
            lineHeight: { xs: "35px", md: "52px" },
            mb: { xs: 6, md: 6 },
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 0 }}>
          {/* Left Side: Capabilities Menu + Stepper Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {data.modes.map((item, index) => (
                <Box
                  key={item.title}
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
                        onClick={() => setActiveIndex(index)}
                        sx={{
                          border:
                            activeIndex === index
                              ? `2px solid ${COLORS.PRIMARY_HOVER}`
                              : "2px solid transparent",
                          borderRadius: "32px",
                          px: { xs: 2.3, md: 3 },
                          py: activeIndex === index ? 2 : 1.2,
                          opacity: activeIndex === index ? 1 : 0.5,
                          cursor: "pointer",
                          width: "fit-content",
                          transition: "all 0.3s ease",
                          mb: 1,
                          "&:hover": {
                            bgcolor: "rgba(0, 0, 0, 0.03)",
                            borderColor:
                              activeIndex === index
                                ? COLORS.PRIMARY_HOVER
                                : "rgba(0, 0, 0, 0.1)",
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
                                ? COLORS.PRIMARY_HOVER
                                : COLORS.BLACK,
                            fontSize: { xs: 18, md: 16 },
                            lineHeight: { xs: "28px", md: "22px" },
                            letterSpacing: "0.52px",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            // mt: 0.8,
                            fontFamily: din.style.fontFamily,
                            fontSize: { xs: 16, md: 15 },
                            color:
                              activeIndex === index
                                ? COLORS.PRIMARY_HOVER
                                : COLORS.BLACK,
                            lineHeight: { xs: "28px", md: "30px" },
                          }}
                        >
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Vertical Stepper Dot (Desktop only) */}
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
                      {/* Continuous Grey Background Segment */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: index === 0 ? "50%" : -12.5,
                          bottom: index === data.modes.length - 1 ? "50%" : -12.5,
                          width: "2px",
                          bgcolor: "#E0E0E0",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 0,
                        }}
                      />

                      {/* Top Progress Segment (Black) */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: -12.5,
                          bottom: "50%",
                          width: "2px",
                          bgcolor:
                            index <= activeIndex && index > 0
                              ? COLORS.BLACK
                              : "transparent",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 1,
                        }}
                      />
                      {/* Bottom Progress Segment (Black) */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          bottom: -12.5,
                          width: "2px",
                          bgcolor:
                            index < activeIndex ? COLORS.BLACK : "transparent",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display:
                            index === data.modes.length - 1 ? "none" : "block",
                          zIndex: 1,
                        }}
                      />
                      {/* The Dot */}
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor:
                            index <= activeIndex
                              ? COLORS.BLACK
                              : "#BDBDBD",
                          borderRadius: "50%",
                          position: "relative",
                          zIndex: 2,
                          mt: "auto",
                          mb: "auto",
                          transition: "all 0.3s ease",
                          transform:
                            activeIndex === index ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Mobile Description Integration */}
                  <Box
                    sx={{
                      display: {
                        xs: activeIndex === index ? "block" : "none",
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
                        lineHeight: { xs: "26px", md: 1.6 },
                        color: "rgba(0,0,0,0.8)",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Side: Description (Desktop only) */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                pl: { xs: 0, md: 4 },
                pt: { xs: 0, md: 1 },
                position: "sticky",
                top: 40,
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 16 },
                  lineHeight: "30px",
                  letterSpacing: "0.52px",
                  color: COLORS.BLACK,
                  textTransform: "none",
                  animation: "fadeIn 0.4s ease",
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
