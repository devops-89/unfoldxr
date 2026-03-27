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
            backgroundColor: "#eee",
            borderRadius: "45px",
            height: "100%",
            mt: { xs: 4, md: 10 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 6, md: 10 }, 
          }}
        >
          <Container maxWidth="lg">
            
            
            <Typography
              sx={{
                fontSize: { xs: 28, md: 50 },
                fontFamily: din.style.fontFamily,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              {homePage.metrics.heading}
            </Typography>

            
            <Typography
              sx={{
                fontSize: { xs: 16, md: 30 },
                fontFamily: helvetica.style.fontFamily,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {homePage.metrics.leftSection.heading}
            </Typography>

            <Grid container alignItems="center" spacing={{ xs: 3, md: 0 }}>
              
              
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 80, md: 300 }, 
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {homePage.metrics.leftSection.number}
                </Typography>
              </Grid>

              {/* RIGHT LIST */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack
                  spacing={{ xs: 3, md: 10 }} 
                  justifyContent="flex-end"
                >
                  {homePage.metrics.rightSection.map((val, i) => (
                    <Typography
                      key={i}
                      sx={{
                        textAlign: { xs: "center", md: "right" },
                        fontFamily: din.style.fontFamily,
                        fontSize: { xs: 18, md: 30 },
                        fontWeight: 900,
                        textTransform: "capitalize",
                      }}
                    >
                      {val.label}{" "}
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: din.style.fontFamily,
                          fontSize: { xs: 18, md: 30 },
                          fontWeight: 500,
                          textTransform: "capitalize",
                        }}
                      >
                        {val.value}
                      </Typography>
                    </Typography>
                  ))}
                </Stack>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Metrics;