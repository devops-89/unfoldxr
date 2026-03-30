"use client";

import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import VerticalStepper from "@/components/widgets/VerticalStepper";

const DesignToEvolve = () => {
  const data = homePage.productPage.designToEvolve;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 14 },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 48, lg: 52 },
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {data.title.includes("evolve") ? (
            <>
              {data.title.split("evolve")[0]}
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              evolve
              {data.title.split("evolve")[1]}
            </>
          ) : (
            data.title
          )}
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18, lg: 20 },
            lineHeight: 1.5,
            color: COLORS.TEXT_GRAY,
            maxWidth: 1000,
          }}
        >
          {data.description}
        </Typography>

        {/* Menu and Description split */}
        <Grid container spacing={{ xs: 4, md: 4 }} sx={{ mt: { xs: 6, md: 10 } }}>
          {/* Left Menu Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 4 },
              }}
            >
              {data.variants.map((item, index) => (
                <Box
                  key={item.title}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    fontFamily: din.style.fontFamily,
                    border: activeIndex === index
                      ? `2px solid ${COLORS.PRIMARY_HOVER}`
                      : "2px solid transparent",
                    borderRadius: "99px",
                    display: "inline-block",
                    px: { xs: 2, md: 3 },
                    py: 1,
                    color: activeIndex === index ? COLORS.PRIMARY_HOVER : COLORS.WHITE,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fontSize: { xs: 16, md: 22 },
                    fontWeight: 700,
                    width: "fit-content",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.title}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Description Column with Vertical Stepper */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ position: "relative" }}>
            <VerticalStepper 
              itemsCount={data.variants.length} 
              activeIndex={activeIndex} 
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,

              }}
            />

            <Box sx={{ pl: { xs: 0, md: 6 } }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 18, md: 24 },
                    color: COLORS.WHITE,
                    mb: 2,
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                  }}
                >
                  {data.variants[activeIndex].subHeading || data.variants[activeIndex].title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.6,
                    color: COLORS.TEXT_MUTED,
                    maxWidth: 650,
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                  }}
                >
                  {data.variants[activeIndex].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Device Image */}
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            borderRadius: { xs: 2.5, md: "24px" },
            overflow: "hidden",
            border: `1px solid ${COLORS.WHITE_ALPHA_20}`,
          }}
        >
          <Box
            component="img"
            src={data.img}
            alt="Platform preview"
            sx={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DesignToEvolve;
