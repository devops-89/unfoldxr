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
            mt: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 10,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{
                fontSize: 50,
                fontFamily: din.style.fontFamily,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              {homePage.metrics.heading}
            </Typography>
            <Typography
              sx={{ fontSize: 30, fontFamily: helvetica.style.fontFamily }}
            >
              {homePage.metrics.leftSection.heading}
            </Typography>
            <Grid container alignItems={"center"}>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontSize: 300,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                  }}
                >
                  {homePage.metrics.leftSection.number}
                </Typography>
              </Grid>
              <Grid size={6}>
                <Stack spacing={10} justifyContent={"flex-end"}>
                  {homePage.metrics.rightSection.map((val, i) => (
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontFamily: din.style.fontFamily,
                        fontSize: 30,
                        fontWeight: 900,
                        textTransform: "capitalize",
                      }}
                    >
                      {val.label}{" "}
                      <Typography
                        component={"span"}
                        sx={{
                          textAlign: "right",
                          fontFamily: din.style.fontFamily,
                          fontSize: 30,
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
