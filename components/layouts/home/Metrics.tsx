import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Metrics = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#EDEDED",
            borderRadius: "45px",
            mt: { xs: 4, md: 20 },
            px: { xs: 4, sm: 6, md: 10 },
            pt: { xs: 5, md: 20 },
            pb: { xs: 6, md: 20 },
          }}
        >
          {/* Heading — full width, centered, uppercase bold */}
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 22, sm: 36, md: "52px" },
              fontWeight: 900,
              textTransform: "uppercase",
              textAlign: "center",
              color: "#000",
              mb: { xs: 4, md: 5 },
            }}
          >
            {homePage.metrics.heading}
          </Typography>

          {/* Content: left big number | right metrics */}
          <Grid container alignItems="center">
            {/* LEFT */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack alignItems={{ xs: "center", md: "flex-start" }} spacing={0}>
                {/* "We commit atleast" */}
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 18, md: "22px", lg: "32px" },
                    fontWeight: 700,
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                >
                  {homePage.metrics.leftSection.heading}
                </Typography>

                {/* 30% */}
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: "120px", sm: "180px", md: "330px" },
                    fontWeight: 900,
                    color: "#1C1C1C",
                    lineHeight: 0.85,
                    letterSpacing: "-4px",
                  }}
                >
                  {homePage.metrics.leftSection.number}
                </Typography>
              </Stack>
            </Grid>

            {/* RIGHT */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack
                spacing={0}
                alignItems={{ xs: "center", md: "flex-end" }}
                justifyContent="center"
              >
                {homePage.metrics.rightSection.map((val, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontSize: { xs: 20, sm: 28, md: "37px" },
                      fontWeight: 400,
                      lineHeight: { xs: "40px", md: "96px" },
                      color: "#000",
                      textAlign: { xs: "center", md: "right" },
                      textTransform: "capitalize",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontSize: { xs: 20, sm: 28, md: "45px" },
                        fontWeight: 900,
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      {val.label}{" "}
                    </Typography>
                    {val.value}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Metrics;