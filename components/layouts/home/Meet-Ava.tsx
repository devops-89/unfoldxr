"use client";

import ContainedButton from "@/components/widgets/ContainedButton";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Meetava = () => {
  return (
    <Box
      sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 8, md: 12 }, overflow: "hidden" }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "95%", lg: "90%" },
          // height: { xs: "auto", md: "60%" },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 4, md: 8, xl: 10 } }}>
          <Grid container alignItems="center" spacing={{ xs: 4, md: 6 }}>
            {/* LEFT: Heading + description + CTA */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 36 },
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: { xs: "35px", md: "52px" },
                  }}
                >
                  {homePage.meetAva.heading}
                </Typography>

                <Stack spacing={2}>
                  {homePage.meetAva.leftSection.description.map((val, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 400,
                        lineHeight: { xs: "26px", md: "28px" },
                        color: "#000",
                        textAlign: { xs: "center", md: "justify" },
                        letterSpacing: "0.52px",
                      }}
                    >
                      {val.label}
                    </Typography>
                  ))}
                </Stack>

                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Link href="/meet-ava" style={{ textDecoration: "none" }}>
                    <ContainedButton
                      sx={{
                        width: { xs: "100%", md: "auto" },
                        borderRadius: 99,
                        px: { xs: 2.5, md: 4 },
                        py: 1.2,
                        fontSize: { xs: 14, md: 18, lg: 16 },
                      }}
                    >
                      Meet AVA
                    </ContainedButton>
                  </Link>
                </Box>
              </Stack>
            </Grid>

            {/* RIGHT: placeholder note + image */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <Stack alignItems={{ xs: "center", md: "flex-end" }} spacing={1}>
                <Box
                  component="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: { xs: "320px", md: "420px" },
                    borderRadius: "50%",
                    display: "block",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="/images/homepage/White-globe.mp4"
                    type="video/mp4"
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Meetava;
