"use client";
import { useState } from "react";
import { Box, Container, Grid, Typography, Stack, alpha } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const LeadershipSection = () => {
  const { leadershipSection: data } = aboutPage;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        width: { xs: "90%", md: "90%", lg: "83%" },
        mx: "auto",
        px: 0,
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, md: 36 },
          fontWeight: 900,
          textTransform: "uppercase",
          mb: 4,
          fontFamily: din.style.fontFamily,
          color: COLORS.BLACK,
          lineHeight: "52px",
        }}
      >
        {data.title}
      </Typography>

      <Stack spacing={12}>
        {data.members.map((member, idx) => {
          const isEven = idx % 2 === 0;
          const isHovered = hoveredIndex === idx;

          return (
            <Grid
              container
              key={idx}
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
              direction={isEven ? "row-reverse" : "row"}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Box
                  sx={{
                    position: "relative",
                    perspective: "2000px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      maxWidth: { md: 380 },
                      aspectRatio: "2/3",
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                      transformStyle: "preserve-3d",
                      transform: isHovered
                        ? "translateY(-8px) rotateX(4deg) rotateY(-4deg)"
                        : "translateY(0) rotateX(0) rotateY(0)",
                      boxShadow: isHovered
                        ? `0 30px 60px rgba(0,0,0,0.12), 
                           0 10px 20px rgba(0,0,0,0.08),
                           inset 0 0 0 1px rgba(255,255,255,0.1)`
                        : "0 10px 30px rgba(0,0,0,0.05)",
                      bgcolor: COLORS.BG_LIGHT,

                      // Luxury Gloss Glare
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                        transform: isHovered
                          ? "translateX(100%) translateY(100%) rotate(45deg)"
                          : "translateX(-100%) translateY(-100%) rotate(45deg)",
                        transition: "transform 1.2s ease-in-out",
                        pointerEvents: "none",
                        zIndex: 2,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                        transition: "transform 1s ease",
                        transform: isHovered ? "scale(1.02)" : "scale(1)",
                        zIndex: 1,
                      }}
                    />

                    {/* Refined Bottom Edge Glow */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        bgcolor: COLORS.PRIMARY_GREEN,
                        opacity: isHovered ? 0.6 : 0,
                        transition: "opacity 0.5s ease",
                        zIndex: 3,
                        filter: "blur(2px)",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Box
                  sx={{
                    textAlign: "left",
                    mt: { xs: 3, md: 0 },
                    // Stable text layout - no translateX
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 26, md: 36 },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      fontFamily: din.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: 1.1,
                      mb: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 20 },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      mb: 4,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.PRIMARY_GREEN,
                      lineHeight: 1.3,
                      opacity: isHovered ? 1 : 0.8,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 17 },
                      lineHeight: "28px",
                      fontFamily: helvetica.style.fontFamily,
                      color: "rgba(0, 0, 0, 0.8)",
                      textAlign: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Container>
  );
};

export default LeadershipSection;
