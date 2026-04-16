"use client";
import { useState } from "react";
import { Box, Button, Grid, Typography, Stack, alpha } from "@mui/material";

import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["intervention"];
}

const MATURITY_LEVELS = [
  "Standard Guidance",
  "Advanced Enablement",
  "Autonomous Excellence",
];

const InterventionSection2 = ({ data }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isSideBySide = data.layout === "side-by-side";

  if (isSideBySide) {
    return (
      <Box
        sx={{
          bgcolor: COLORS.WHITE,
          color: COLORS.BLACK,
          py: { xs: 6, md: 7 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "90%", lg: "84%" },
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Top Row: Title, Desc1, Desc2 */}
          <Box
            sx={{ maxWidth: { xs: "100%", md: "90%" }, mb: { xs: 5, md: 8 } }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 36 },
                lineHeight: 1.1,
                mb: 4,
                color: COLORS.BLACK,
                letterSpacing: "-0.5px",
              }}
            >
              {data.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                }}
              >
                {data.description1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                }}
              >
                {data.description2}
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={{ xs: 5, md: 5 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {data.description3 && (
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    {data.description3}
                  </Typography>
                )}
                {data.description4 && (
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    {data.description4}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Right Side: 3 Vertical Image Cards or single image */}
            <Grid size={{ xs: 12, md: 7 }}>
              {data.cards && data.cards.length > 0 ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      height: { xs: 360, md: 440 },
                    }}
                  >
                    {data.cards.map((card, index) => (
                      <Box
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        sx={{
                          flex: 1,
                          minWidth: 0,
                          position: "relative",
                          borderRadius: "16px",
                          overflow: "hidden",
                          cursor: "pointer",
                          transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                          background:
                            hoveredIndex === index
                              ? COLORS.CHARCOAL
                              : "#F9F9F9",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 4,
                          perspective: "1500px",
                          border: "1px solid",
                          borderColor:
                            hoveredIndex === index
                              ? "rgba(0,0,0,0.06)"
                              : "rgba(0,0,0,0.03)",
                          boxShadow:
                            hoveredIndex === index
                              ? "0 30px 60px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.8)"
                              : "0 10px 20px rgba(0,0,0,0.02)",
                          transform:
                            hoveredIndex === index
                              ? "translateY(-8px) rotateY(-8deg)"
                              : "translateY(0) rotateY(0)",
                          "&:hover": {
                            flex: 1.4,
                            zIndex: 2,
                          },
                          // Gloss Glare
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "16px",
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
                            transform:
                              hoveredIndex === index
                                ? "translateX(100%) translateY(100%) rotate(45deg)"
                                : "translateX(-100%) translateY(-100%) rotate(45deg)",
                            transition: "transform 1s ease-in-out",
                            pointerEvents: "none",
                            zIndex: 1,
                          },
                          // Brand Glow
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "15%",
                            width: "70%",
                            height: "2px",
                            bgcolor: COLORS.PRIMARY_GREEN,
                            opacity: hoveredIndex === index ? 1 : 0,
                            transition: "all 0.4s ease",
                            filter: "blur(1.5px)",
                            boxShadow: `0 0 10px ${alpha(COLORS.PRIMARY_GREEN, 0.5)}`,
                            zIndex: 2,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: din.style.fontFamily,
                            fontWeight: 900,
                            fontSize: { xs: 18, md: 22 },
                            textTransform: "uppercase",
                            lineHeight: 1.1,
                            color: COLORS.BLACK,
                            letterSpacing: "-0.5px",
                            textAlign: "center",
                            maxWidth: 160,
                            zIndex: 3,
                          }}
                        >
                          {card.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Box
                    component="img"
                    src={data.image}
                    alt={data.title}
                    sx={{ width: "100%", height: "auto", borderRadius: "24px" }}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        color: COLORS.BLACK,
        pt: { xs: 5, md: 7 },
        pb: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "90%", lg: "84%" },
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* Left Side: Title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 32, md: 36 },
                lineHeight: 1.1,
                color: COLORS.BLACK,
                textTransform: "uppercase",
                letterSpacing: "-0.5px",
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.8)",
                  textAlign: "justify",
                }}
              >
                {data.description1}
              </Typography>
              {data.description2 && (
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.8)",
                    textAlign: "justify",
                  }}
                >
                  {data.description2}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Premium Gallery Grid Section */}
        {data.cards && data.cards.length > 0 && (
          <Box sx={{ mt: { xs: 8, md: 12 }, mb: 4, position: "relative" }}>
            {data.description3 && (
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.6)",
                  mb: { xs: 6, md: 10 },
                  maxWidth: 650,
                }}
              >
                {data.description3}
              </Typography>
            )}

            <Grid container spacing={{ xs: 6, md: 4 }}>
              {data.cards.map((card, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, md: 4 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    position: "relative",
                    perspective: "1500px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                      background:
                        hoveredIndex === index
                          ? COLORS.CHARCOAL
                          : "#F9F9F9",
                      p: { xs: 4, md: 5 },
                      height: "100%",
                      minHeight: 220,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                      transformStyle: "preserve-3d",
                      cursor: "pointer",
                      border: "1px solid",
                      borderColor:
                        hoveredIndex === index
                          ? "rgba(0,0,0,0.06)"
                          : "rgba(0,0,0,0.03)",
                      transform:
                        hoveredIndex === index
                          ? "translateY(-16px) rotateX(8deg) rotateY(-8deg)"
                          : "translateY(0) rotateX(0) rotateY(0)",
                      boxShadow:
                        hoveredIndex === index
                          ? `0 20px 40px rgba(0,0,0,0.06), 
                             0 40px 80px rgba(0,0,0,0.04),
                             inset 0 0 0 1px rgba(255,255,255,0.8)`
                          : "0 10px 30px rgba(0,0,0,0.02)",

                      // Glossy Glare Effect
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "16px",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
                        transform:
                          hoveredIndex === index
                            ? "translateX(100%) translateY(100%) rotate(45deg)"
                            : "translateX(-100%) translateY(-100%) rotate(45deg)",
                        transition: "transform 0.8s ease-in-out",
                        pointerEvents: "none",
                        zIndex: 1,
                      },

                      // Bottom Brand Accent
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "10%",
                        width: "80%",
                        height: "2px",
                        bgcolor: COLORS.PRIMARY_GREEN,
                        opacity: hoveredIndex === index ? 1 : 0,
                        transition: "all 0.4s ease",
                        filter: "blur(1px)",
                        boxShadow: `0 0 10px ${alpha(COLORS.PRIMARY_GREEN, 0.5)}`,
                        zIndex: 2,
                      },
                    }}
                  >
                    {/* Main Label with translateZ for parallax depth */}
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontWeight: 900,
                        fontSize: { xs: 24, md: 28 },
                        textTransform: "uppercase",
                        lineHeight: 1.1,
                        color:
                          hoveredIndex === index
                            ? COLORS.PRIMARY_GREEN
                            : COLORS.BLACK,
                        letterSpacing: "-0.5px",
                        textAlign: "center",
                        textShadow:
                          hoveredIndex === index
                            ? "0 10px 20px rgba(0,0,0,0.05)"
                            : "none",
                        zIndex: 3,
                      }}
                    >
                      {card.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {!data.cards?.length && data.description3 && (
          <Typography
            sx={{
              mt: 6,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.6,
              color: "rgba(0,0,0,0.8)",
              maxWidth: "100%",
            }}
          >
            {data.description3}
          </Typography>
        )}
      </Box>

      {/* Tablet Area with Overlap Transition */}
      <Box sx={{ position: "relative", mt: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: COLORS.WHITE,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: COLORS.BLACK,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", md: "60%", lg: "70%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={data.image}
            alt="Tablet Intervention"
            sx={{
              width: "100%",
              maxWidth: 750,
              height: "auto",
              display: "block",
              borderRadius: { xs: 4, md: "24px" },
              filter: `drop-shadow(0px 30px 60px rgba(0,0,0,0.2))`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection2;
