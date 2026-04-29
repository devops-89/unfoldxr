"use client";

import ContainedButton from "@/components/widgets/ContainedButton";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SplitText from "@/components/widgets/animations/SplitText";

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
                <SplitText
                  text={homePage.meetAva.heading}
                  tag="h2"
                  splitType="words"
                  delay={40}
                  duration={1.2}
                  ease="power3.out"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign={{ xs: "center", md: "left" } as any}
                  sx={{
                    fontSize: { xs: 28, md: 36 },
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: { xs: "35px", md: "52px" },
                  }}
                />

                <Stack spacing={2}>
                  {homePage.meetAva.leftSection.description.map((val, i) => (
                    <SplitText
                      key={i}
                      text={val.label}
                      tag="p"
                      splitType="lines"
                      delay={100}
                      duration={1}
                      ease="power3.out"
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-50px"
                      textAlign={{ xs: "center", md: "justify" } as any}
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 400,
                        lineHeight: { xs: "26px", md: "28px" },
                        color: "#000",
                        letterSpacing: "0.52px",
                      }}
                    />
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
