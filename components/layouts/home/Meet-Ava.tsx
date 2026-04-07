"use client";

import ContainedButton from "@/components/widgets/ContainedButton";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useDemoModal } from "@/components/context/DemoModalContext";

const Meetava = () => {
  const { openModal } = useDemoModal();
  return (
    <Box sx={{ mt: { xs: 8, md: 24 }, mb: { xs: 8, md: 24 } }}>
      <Container maxWidth="lg">
        {/* Full-width Heading */}
        <Typography
          sx={{
            fontSize: { xs: 28, md: 50 },
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: { xs: "center", md: "left" },
            lineHeight: { xs: "38px", md: "64px" },
            mb: { xs: 3, md: 4 },
          }}
        >
          {homePage.meetAva.heading}
        </Typography>

        <Grid container alignItems="center" spacing={{ xs: 4, md: 6 }}>
          {/* LEFT: description + CTA */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {homePage.meetAva.leftSection.description.map((val, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 400,
                    lineHeight: { xs: "22px", md: "28px" },
                    color: "#000",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {val.label}
                </Typography>
              ))}
            </Stack>

            <ContainedButton
              onClick={openModal}
              sx={{
                mt: 3,
                width: { xs: "100%", md: "auto" },
                borderRadius: 99,
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontSize: { xs: 14, md: 18, lg: 20 },
              }}
            >
              Book a demo now
            </ContainedButton>
          </Grid>

          {/* RIGHT: placeholder note + image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack alignItems={{ xs: "center", md: "flex-end" }} spacing={1}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 12, md: 14 },
                  fontStyle: "italic",
                  color: "#888",
                  textAlign: "right",
                }}
              >
                {/* *note - this is placeholder for ava */}
              </Typography>
              <Image
                src={homePage.meetAva.rightSection.img}
                alt="Meet AVA"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "360px",
                  borderRadius: "50%",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Meetava;
