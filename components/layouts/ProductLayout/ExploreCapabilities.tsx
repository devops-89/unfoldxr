"use client";

import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import VerticalStepper from "@/components/widgets/VerticalStepper";

const ExploreCapabilities = () => {
  const data = homePage.productPage.exploreCapabilities;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
        py: { xs: 8, md: 16 },
      }}
    >
      <Box
        sx={{ width: { xs: "80%", md: "80%" }, mx: "auto", px: { xs: 0, md: 0 } }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 48, lg: 52 },
            lineHeight: 1.1,
            mb: { xs: 6, md: 10 },
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 0 }}>
          {/* Left Side: Capabilities Menu */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
              {data.modes.map((item, index) => (
                <Box
                  key={item.title}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    border: activeIndex === index
                      ? `2px solid ${COLORS.PRIMARY_HOVER}`
                      : "2px solid transparent",
                    borderRadius: "32px",
                    p: 2.5,
                    pl: 3,
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: activeIndex === index ? COLORS.PRIMARY_HOVER : COLORS.BLACK,
                      fontSize: { xs: 20, md: 24 },
                      lineHeight: 1.2,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.5,
                      fontFamily: din.style.fontFamily,
                      fontSize: { xs: 16, md: 18 },
                      color: activeIndex === index ? COLORS.PRIMARY_HOVER : COLORS.BLACK,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Center Vertical Stepper */}
          <Grid
            size={{ xs: 0, md: 0.5 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              position: "relative",
            }}
          >
            <VerticalStepper 
              itemsCount={data.modes.length} 
              activeIndex={activeIndex} 
              baseColor="rgba(0, 0, 0, 0.1)"
              activeColor={COLORS.BLACK}
            />
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { xs: 0, md: 6 }, pt: { xs: 0, md: 2 } }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.6,
                    color: COLORS.BLACK,
                    textTransform: "capitalize",
                    mb: data.modes[activeIndex].description.includes(" Work becomes")
                      ? 0
                      : 4,
                  }}
                >
                  {data.modes[activeIndex].description.split(" Work becomes")[0]}
                </Typography>
                {data.modes[activeIndex].description.includes(" Work becomes") && (
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 18, md: 22 },
                      lineHeight: 1.6,
                      color: COLORS.BLACK,
                      textTransform: "capitalize",
                      mt: 4,
                    }}
                  >
                    Work becomes
                    {data.modes[activeIndex].description.split(" Work becomes")[1]}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExploreCapabilities;
