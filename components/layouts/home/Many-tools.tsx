"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import ImageCard from "./components/tools/ImageCard";
import leftSectionBg from "@/images/homepage/tools/left-section-bg.svg";

const ManyTools = () => {
  const cards = homePage.tools.rightSection.cards;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        py: { xs: 3, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Glows */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(182, 236, 26, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: { xs: "95%", md: "90%", lg: "84%" },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* ── EDITORIAL HEADER ───────────────────────────────────── */}
        <Box sx={{ mb: { xs: 2.5, md: 3 } }}>
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 28, sm: 36, md: 48, lg: 52 },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              color: COLORS.WHITE,
              letterSpacing: "-1px",
              mb: 0.25,
            }}
          >
            The Work of Many Tools.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            spacing={3}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, sm: 36, md: 48, lg: 52 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1,
                color: "#B6EC1A",
                letterSpacing: "-1px",
              }}
            >
              One Platform.
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                height: "2px",
                backgroundColor: "rgba(255,255,255,0.1)",
                mb: "12px",
                display: { xs: "none", md: "block" },
              }}
            />

            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                maxWidth: { md: 350 },
                fontSize: { xs: 13, md: 14 },
                color: "rgba(255, 255, 255, 0.5)",
                lineHeight: 1.3,
                pb: "2px",
                textAlign: { md: "right" }
              }}
            >
              Augmenting human productivity by uniting fragmented workflows into
              one intelligent ecosystem.
            </Typography>
          </Stack>
        </Box>

        {/* ── BENTO GRID ────────────────────────────────────────── */}
        <Grid container spacing={2}>
          {/* Main Visual Card - Hero Feature */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                height: { xs: "240px", md: "320px" },
                borderRadius: "28px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background:
                  "linear-gradient(145deg, rgba(15, 15, 15, 0.9) 0%, rgba(5, 5, 5, 1) 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={leftSectionBg}
                alt="Illustration showing a unified consolidation platform"
                fill
                style={{ objectFit: "contain", padding: "40px", opacity: 0.8 }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 32,
                  left: 32,
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: 18, md: 24 },
                    fontWeight: 900,
                    color: COLORS.WHITE,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Unified{" "}
                  <Box component="span" sx={{ color: "#B6EC1A" }}>
                    Solution
                  </Box>
                </Typography>
              </Box>

              {/* Subtle glass overlay for depth */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(182, 236, 26, 0.03) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
            </Box>
          </Grid>

          {/* Bento Item 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "100%" }}>
              <ImageCard card={cards[0] as any} />
            </Box>
          </Grid>

          {/* Bento Item 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "100%" }}>
              <ImageCard card={cards[1] as any} />
            </Box>
          </Grid>

          {/* Bento Item 4 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "100%" }}>
              <ImageCard card={cards[2] as any} />
            </Box>
          </Grid>

          {/* Bento Item 5 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "100%" }}>
              <ImageCard card={cards[3] as any} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ManyTools;
