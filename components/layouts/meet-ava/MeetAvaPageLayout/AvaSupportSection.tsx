"use client";

import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AVA_FEATURES } from "./constants";

const AvaSupportSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
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
          How AVA Supports at Every Step
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
          Designed to support your workforce throughout the lifecycle of work, across all three versions of UnfoldXR Augment,
          Empower, and Edge; AVA adapts to your organisation&apos;s stage of operational maturity. Each version unlocks deeper
          intelligence and broader capability. As you scale, AVA scales with you.
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={0}>
              {AVA_FEATURES.map((feature, i) => (
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
                    border: activeFeature === i ? `3px solid ${COLORS.PRIMARY_GREEN}` : "3px solid transparent",
                    borderRadius: "78px",
                    px: { xs: 2, md: 3 },
                    py: 1.5,
                    mb: 1,
                    transition: "border-color 0.2s",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: activeFeature === i ? 700 : 400,
                      fontSize: { xs: 18, md: 36 },
                      color: activeFeature === i ? COLORS.PRIMARY_GREEN : "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ borderLeft: { md: "4px solid #fff" }, pl: { xs: 0, md: 4 }, minHeight: { md: 320 } }}>
              <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 36 }, lineHeight: 1.35, color: "#fff" }}>
                {AVA_FEATURES[activeFeature].description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AvaSupportSection;
