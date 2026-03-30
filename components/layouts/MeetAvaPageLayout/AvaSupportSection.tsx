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

        <Grid container spacing={{ xs: 3, md: 0 }}>
          {/* Left: Menu & Stepper combined for perfect height sync */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box sx={{ display: "flex", height: "fit-content", position: "relative" }}>
              {/* Feature List */}
              <Box sx={{ flex: 1 }}>
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
                        pl: activeFeature === i ? { xs: 3, md: 4 } : { xs: 3.25, md: 4.25 },
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 900,
                          fontSize: { xs: 15, md: 17, lg: 19 },
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
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
              </Box>

              {/* Stepper column inside the same Box */}
              <Box
                sx={{
                  width: { xs: 0, md: 60 },
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  py: 2.2, // Visual alignment with text centers
                }}
              >
                <VerticalStepper 
                  itemsCount={data.features.length} 
                  activeIndex={activeFeature} 
                />
              </Box>
            </Box>
          </Grid>

          {/* Right: Description */}
          <Grid size={{ xs: 12, md: 6.5 }}>
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
                    fontSize: { xs: 18, md: 22, lg: 26 },
                    fontWeight: 500,
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
