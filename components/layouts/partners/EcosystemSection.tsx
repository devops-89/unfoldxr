"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { useState } from "react";
import VerticalStepper from "@/components/widgets/VerticalStepper";

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = partnersPage.ecosystemSystem;

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            p: { xs: 4, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: 26, md: 54 },
              mb: 6,
              color: "#000",
              lineHeight: 1.1,
              maxWidth: "800px",
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {partnersPage.ecosystemSystem.heading}
          </Typography>

          <Grid container spacing={6}>
            {/* LEFT */}
            <Grid
              size={{ xs: 12, md: 5 }}
            >
              <Box sx={{ display: "flex", height: "100%", position: "relative" }}>
                <Stack spacing={3} alignItems="flex-start" sx={{ flex: 1 }}>
                  {data.map((item, i) => (
                    <Box key={i}>
                      {/* Heading Pill (bordered, clickable) */}
                      <Box
                        onClick={() => setActiveTab(i)}
                        sx={{
                          cursor: "pointer",
                          border: activeTab === i ? `1.5px solid ${COLORS.PRIMARY_HOVER}` : "1.5px solid transparent",
                          borderRadius: "50px",
                          px: activeTab === i ? 3 : 2,
                          py: activeTab === i ? 1 : 0.5,
                          transition: "all 0.3s ease",
                          width: "fit-content",
                          "&:hover": {
                            bgcolor: activeTab === i ? "transparent" : "rgba(0, 0, 0, 0.03)",
                            borderColor: activeTab === i ? COLORS.PRIMARY_HOVER : "rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: 16, md: 22 },
                            color: activeTab === i ? COLORS.PRIMARY_HOVER : "#000",
                            fontWeight: 600,
                            whiteSpace: "normal",
                            textTransform: "uppercase",
                            maxWidth: { xs: "85vw", md: "100%" },
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Box>
                      {/* Mobile Description: Outside border, slides in smoothly */}
                      {activeTab === i && (
                        <Typography
                          sx={{
                            display: { xs: "block", md: "none" },
                            mt: 1.5,
                            mb: 1,
                            px: 1,
                            fontSize: { xs: 15, md: 17 },
                            lineHeight: 1.5,
                            color: COLORS.BLACK,
                            fontWeight: 500,
                            textTransform: "none",
                            whiteSpace: "normal",
                            animation: "slideDown 0.3s ease",
                            "@keyframes slideDown": {
                              from: { opacity: 0, transform: "translateY(-8px)" },
                              to: { opacity: 1, transform: "translateY(0)" },
                            },
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Stack>

                {/* Shared Reusable Stepper */}
                <Box
                  sx={{
                    width: 60,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    py: 1.5, // Alignment with text
                  }}
                >
                  <VerticalStepper
                    itemsCount={data.length}
                    activeIndex={activeTab}
                    baseColor="rgba(0, 0, 0, 0.1)"
                    activeColor={COLORS.PRIMARY_HOVER}
                  />
                </Box>
              </Box>
            </Grid>

            {/* RIGHT (Desktop only) */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  pl: { md: 6 },
                  pt: { xs: 4, md: 0 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  key={activeTab} // Smooth fade trigger
                  sx={{
                    fontSize: { xs: 16, md: 22 },
                    lineHeight: "28px",
                    color: "#000",
                    fontWeight: 500,
                    maxWidth: { xs: "100%", md: "500px" },
                    mx: { xs: "auto", md: 0 },
                    animation: "fadeIn 0.5s ease-in-out",
                    "@keyframes fadeIn": {
                      from: { opacity: 0, transform: "translateY(10px)" },
                      to: { opacity: 1, transform: "translateY(0)" },
                    },
                  }}
                >
                  {data[activeTab].description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EcosystemSection;
