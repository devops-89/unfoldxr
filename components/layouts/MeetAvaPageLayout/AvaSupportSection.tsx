"use client";

import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { meetAvaPage } from "@/utils/Website-Data";

const AvaSupportSection = () => {
  const { supportSection: data } = meetAvaPage;
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 64 },
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          {data.heading}
        </Typography>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 28 },
            lineHeight: 1.55,
            letterSpacing: { md: "0.08em" },
            maxWidth: 1660,
            mb: { xs: 4, md: 6 },
          }}
        >
          {data.description}
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={0}>
              {data.features.map((feature, i) => (
                <Box
                  key={feature.label}
                  onClick={() => setActiveFeature(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveFeature(i);
                  }}
                  role="button"
                  tabIndex={0}
                  sx={{
                    cursor: "pointer",
                    border: activeFeature === i ? `2px solid ${COLORS.PRIMARY_GREEN}` : "2px solid transparent",
                    borderRadius: "78px",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1, md: 1.2 },
                    mb: 1.2,
                    transition: "all 0.3s ease",
                    bgcolor: activeFeature === i ? "rgba(46, 213, 115, 0.05)" : "transparent",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: activeFeature === i ? 700 : 400,
                      fontSize: { xs: 18, md: 32 },
                      color: activeFeature === i ? COLORS.PRIMARY_GREEN : COLORS.WHITE,
                      lineHeight: 1.2,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {feature.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                pl: { xs: 0, md: 8 },
                minHeight: { md: 550 },
                py: 2,
              }}
            >
              {/* Timeline Line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  display: { xs: "none", md: "block" },
                }}
              >
                {/* Background Dots */}
                {data.features.map((_, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: `${(idx / (data.features.length - 1)) * 100}%`,
                      transform: "translate(-50%, -50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      bgcolor: activeFeature >= idx ? COLORS.PRIMARY_GREEN : "rgba(255, 255, 255, 0.2)",
                      transition: "all 0.4s ease",
                    }}
                  />
                ))}

                {/* Active Stretching Line */}
                <Box
                  sx={{
                    width: "100%",
                    height: `${(activeFeature / (data.features.length - 1)) * 100}%`,
                    bgcolor: COLORS.PRIMARY_GREEN,
                    borderRadius: "4px",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: `0 0 15px ${COLORS.PRIMARY_GREEN}40`,
                  }}
                />
              </Box>

              <Box sx={{ mt: `${(activeFeature / (data.features.length - 1)) * 85}%`, transition: "margin-top 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 18, md: 36 },
                    lineHeight: 1.4,
                    color: COLORS.WHITE,
                    maxWidth: 800,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {data.features[activeFeature].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AvaSupportSection;
