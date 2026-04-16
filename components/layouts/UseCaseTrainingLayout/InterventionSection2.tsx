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

          {/* Bottom Row: Desc3/Desc4 (Left) | Cards (Right) */}
          <Grid container spacing={{ xs: 5, md: 5 }} alignItems="flex-start">
            {/* Left Side: Text Content */}
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
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
                          bgcolor: COLORS.BG_LIGHT,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          perspective: "1000px",
                          boxShadow:
                            hoveredIndex === index
                              ? "0 30px 60px -12px rgba(50,50,93,0.15), 0 18px 36px -18px rgba(0,0,0,0.2)"
                              : "0 4px 6px -1px rgba(0,0,0,0.05)",
                          transform:
                            hoveredIndex === index
                              ? "translateY(-10px) rotateY(-5deg) scale(1.05)"
                              : "translateY(0) rotateY(0) scale(1)",
                          overflow: "hidden",
                          "&:hover": {
                            flex: 1.5,
                            bgcolor: COLORS.WHITE,
                            zIndex: 2,
                            "& .card-content": {
                              transform: "translateZ(50px)",
                            },
                          },
                        }}
                      >
                        {/* Background Accent */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "4px",
                            bgcolor:
                              hoveredIndex === index
                                ? COLORS.PRIMARY_GREEN
                                : "rgba(0,0,0,0.05)",
                            transition: "all 0.3s ease",
                          }}
                        />

                        {/* Card Content Container */}
                        <Box
                          className="card-content"
                          sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            px: 3,
                            transition: "transform 0.5s ease",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          {/* Numbering */}
                          <Typography
                            sx={{
                              fontFamily: din.style.fontFamily,
                              fontSize: { xs: 32, md: 48 },
                              fontWeight: 900,
                              color:
                                hoveredIndex === index
                                  ? COLORS.PRIMARY_GREEN
                                  : "rgba(0,0,0,0.03)",
                              mb: 1,
                              lineHeight: 1,
                              transition: "color 0.4s ease",
                            }}
                          >
                            0{index + 1}
                          </Typography>

                          {/* Maturity Level Label */}
                          <Typography
                            sx={{
                              fontFamily: helvetica.style.fontFamily,
                              fontSize: 10,
                              fontWeight: 700,
                              color: "rgba(0,0,0,0.4)",
                              textTransform: "uppercase",
                              letterSpacing: "2px",
                              mb: 2,
                            }}
                          >
                            {MATURITY_LEVELS[index]}
                          </Typography>

                          {/* Heading */}
                          <Typography
                            sx={{
                              fontFamily: din.style.fontFamily,
                              fontWeight: 900,
                              fontSize: { xs: 16, md: 20 },
                              textTransform: "uppercase",
                              lineHeight: 1.2,
                              color: COLORS.BLACK,
                              mb: 3,
                              letterSpacing: "1px",
                            }}
                          >
                            {card.label.split(" ").map((word, i) => (
                              <span key={i} style={{ display: "block" }}>
                                {word}
                              </span>
                            ))}
                          </Typography>

                          {/* Learn More Indicator (Only visible on hover) */}
                          <Typography
                            sx={{
                              fontFamily: din.style.fontFamily,
                              fontSize: 12,
                              fontWeight: 900,
                              color: COLORS.PRIMARY_GREEN,
                              textTransform: "uppercase",
                              letterSpacing: "2px",
                              opacity: hoveredIndex === index ? 1 : 0,
                              transform:
                                hoveredIndex === index
                                  ? "translateY(0)"
                                  : "translateY(20px)",
                              transition: "all 0.4s ease",
                            }}
                          >
                            Explore Solution
                          </Typography>
                        </Box>

                        {/* Decorative 3D Shadow Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.02) 100%)",
                            pointerEvents: "none",
                          }}
                        />
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
                    perspective: "1200px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: "24px",
                      bgcolor: COLORS.BG_LIGHT,
                      p: { xs: 4, md: 6 },
                      height: "100%",
                      minHeight: 320,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      transformStyle: "preserve-3d",
                      cursor: "pointer",
                      border: "1px solid rgba(0,0,0,0.03)",
                      transform:
                        hoveredIndex === index
                          ? "translateY(-12px) rotateX(4deg) rotateY(-4deg)"
                          : "translateY(0) rotateX(0) rotateY(0)",
                      boxShadow:
                        hoveredIndex === index
                          ? "0 40px 80px -20px rgba(0,0,0,0.15)"
                          : "0 10px 30px -15px rgba(0,0,0,0.05)",
                      "&:hover": {
                        bgcolor: COLORS.WHITE,
                        borderColor: "rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    {/* Top Accent Line */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 24,
                        left: 24,
                        width: hoveredIndex === index ? "40px" : "20px",
                        height: "2px",
                        bgcolor: COLORS.PRIMARY_GREEN,
                        transition: "width 0.4s ease",
                      }}
                    />

                    {/* Step Number */}
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontSize: 14,
                        fontWeight: 900,
                        color:
                          hoveredIndex === index
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(0,0,0,0.2)",
                        transition: "color 0.3s ease",
                        letterSpacing: "4px",
                        mb: 2,
                        transform: "translateZ(20px)",
                      }}
                    >
                      VERSION 0{index + 1}
                    </Typography>

                    {/* Maturity Level Tag */}
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "rgba(0,0,0,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        mb: 4,
                        transform: "translateZ(10px)",
                      }}
                    >
                      {MATURITY_LEVELS[index]}
                    </Typography>

                    {/* Heading */}
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontWeight: 900,
                        fontSize: { xs: 26, md: 32 },
                        textTransform: "uppercase",
                        lineHeight: 1.1,
                        color: COLORS.BLACK,
                        mb: 3,
                        letterSpacing: "-0.5px",
                        transform: "translateZ(40px)",
                      }}
                    >
                      {card.label}
                    </Typography>

                    {/* Short Description */}
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "rgba(0,0,0,0.5)",
                        transform: "translateZ(15px)",
                      }}
                    >
                      {card.description ||
                        "Standardized digital guidance for consistent operational execution and knowledge retention."}
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
              maxWidth: 850,
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
