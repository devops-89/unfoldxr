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
                        sx={{
                          flex: 1,
                          minWidth: 0,
                          position: "relative",
                          borderRadius: "16px",
                          overflow: "hidden",
                          cursor: "pointer",
                          transition:
                            "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                          "&:hover": {
                            flex: 1.5,
                            "& .hover-btn": {
                              opacity: 1,
                              transform: "translateX(-50%) scale(1)",
                            },
                            "& .card-img": {
                              transform: "scale(1.1)",
                            },
                          },
                        }}
                      >
                        <Box
                          className="card-img"
                          component="img"
                          src={card.image}
                          alt={card.label}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.6s ease",
                          }}
                        />
                        {/* Dark Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
                          }}
                        />
                        {/* Top center line pin */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 2,
                            height: 70,
                            bgcolor: COLORS.WHITE,
                            zIndex: 1,
                          }}
                        />
                        {/* Rotated Label - just below top line */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 160,
                            left: "50%",
                            transform: "translateX(-50%) rotate(-90deg)",
                            transformOrigin: "center center",
                            whiteSpace: "nowrap",
                            zIndex: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: COLORS.WHITE,
                              fontFamily: din.style.fontFamily,
                              fontWeight: 900,
                              fontSize: { xs: 13, md: 15 },
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              fontStyle: "italic",
                            }}
                          >
                            {card.label}
                          </Typography>
                        </Box>
                        {/* Hover Button - pinned at bottom */}
                        <Button
                          className="hover-btn"
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            left: "50%",
                            transform: "translateX(-50%) scale(0.8)",
                            opacity: 0,
                            transition: "all 0.3s ease",
                            bgcolor: COLORS.PRIMARY_GREEN,
                            color: COLORS.BLACK,
                            borderRadius: 99,
                            px: 3,
                            py: 1,
                            fontFamily: din.style.fontFamily,
                            fontWeight: 900,
                            fontSize: 13,
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                          }}
                        >
                          Learn More
                        </Button>
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
                    transition: "all 0.4s ease",
                    "&:not(:last-child)": {
                      borderRight: { md: "1px solid rgba(0,0,0,0.06)" },
                      pr: { md: 4 },
                    },
                    "&:not(:first-of-type)": {
                      pl: { md: 4 },
                    },
                  }}
                >
                  {/* Top Accent Line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { md: -20 },
                      left: { md: 4 },
                      width: hoveredIndex === index ? "40px" : "0px",
                      height: "2px",
                      bgcolor: COLORS.PRIMARY_GREEN,
                      transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: { xs: "none", md: "block" },
                    }}
                  />

                  {/* Image Header */}
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "16/10",
                      borderRadius: "16px",
                      overflow: "hidden",
                      bgcolor: "rgba(0,0,0,0.03)",
                      mb: 4,
                      position: "relative",
                    }}
                  >
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.label}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: hoveredIndex === index ? "scale(1.08)" : "scale(1)",
                      }}
                    />
                  </Box>

                  {/* Content Container */}
                  <Box sx={{ pr: 2 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      sx={{ mb: 2 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: din.style.fontFamily,
                          fontSize: 14,
                          fontWeight: 900,
                          color: hoveredIndex === index ? COLORS.PRIMARY_GREEN : "rgba(0,0,0,0.3)",
                          transition: "color 0.3s ease",
                          letterSpacing: "2px",
                        }}
                      >
                        0{index + 1}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: 11,
                          fontWeight: 700,
                          color: "rgba(0,0,0,0.4)",
                          textTransform: "uppercase",
                          letterSpacing: "1.2px",
                        }}
                      >
                        {MATURITY_LEVELS[index]}
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontWeight: 900,
                        fontSize: { xs: 22, md: 24 },
                        textTransform: "uppercase",
                        lineHeight: 1.1,
                        color: COLORS.BLACK,
                        mb: 2,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {card.label}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      {/* Using description from data if available, or fallback */}
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
