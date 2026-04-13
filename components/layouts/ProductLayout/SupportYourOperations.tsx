import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";

import { COLORS } from "@/utils/enum";

const SupportYourOperations = () => {
  const data = homePage.productPage.supportOperations;

  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: "35px", md: "52px" },
                fontSize: { xs: 28, md: 36 },
                color: COLORS.WHITE,
              }}
            >
              {data.lifecycle.title.split("lifecycle")[0]}
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              lifecycle
              {data.lifecycle.title.split("lifecycle")[1]}
            </Typography>
            <Typography
              sx={{
                mt: 4,
                fontFamily: helvetica.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 18, md: 16, lg: 18 },
                lineHeight: { xs: "28px", md: "34px" },
                color: COLORS.WHITE,
              }}
            >
              {data.lifecycle.stages.map((stage, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      minWidth: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: COLORS.PRIMARY_GREEN || "#00FF00",
                      mt: 1.5,
                    }}
                  />
                  {stage}
                </Box>
              ))}
            </Typography>
          </Grid>

          {/* Image Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: { xs: 4, md: 6 },
                overflow: "hidden",
                position: "relative",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <Box
                component="img"
                src={data.lifecycle.bg}
                alt="Operations lifecycle"
                sx={{
                  width: "100%",
                  height: "auto",
                  minHeight: { md: 400 },
                  maxHeight: { xs: 400, md: 600 },
                  display: "block",
                  objectFit: "cover",
                }}
              />

              {/* Dark Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.3)",
                }}
              />

              {/* Play Button Indicator */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.3)",
                    transform: "translate(-50%, -50%) scale(1.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: `16px solid ${COLORS.WHITE}`,
                    ml: 0.5,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportYourOperations;
