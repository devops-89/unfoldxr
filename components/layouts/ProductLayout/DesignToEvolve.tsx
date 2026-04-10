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
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 48, lg: 48 },
            lineHeight: "52px",
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
            fontSize: { xs: 16, md: 18, lg: 22 },
            lineHeight: "30px",
            letterSpacing: "0.52px",
            color: COLORS.TEXT_GRAY,
            maxWidth: 1000,
          }}
        >
          {data.description}
        </Typography>

        {/* Menu and Description split */}
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          sx={{ mt: { xs: 6, md: 10 } }}
        >
          {/* Left Menu Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 4 },
                alignItems: "flex-start",
              }}
            >
              {data.variants.map((item, index) => (
                <Box key={item.title}>
                  <Box
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      fontFamily: din.style.fontFamily,
                      border:
                        activeIndex === index
                          ? `2px solid ${COLORS.PRIMARY_HOVER}`
                          : "2px solid transparent",
                      borderRadius: "99px",
                      display: "inline-block",
                      px: { xs: 2, md: 3 },
                      py: 1,
                      color:
                        activeIndex === index
                          ? COLORS.PRIMARY_HOVER
                          : COLORS.WHITE,
                      textTransform: "uppercase",
                      letterSpacing: "0.52px",
                      fontSize: { xs: 16, md: 22 },
                      fontWeight: 700,
                      width: "fit-content",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor:
                          activeIndex === index
                            ? "transparent"
                            : "rgba(255, 255, 255, 0.05)",
                        borderColor:
                          activeIndex === index
                            ? COLORS.PRIMARY_HOVER
                            : "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    {item.title}
                  </Box>
                  {/* Mobile Description: Show only if active and on mobile */}
                  {activeIndex === index && (
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        mt: 2,
                        mb: 4,
                        px: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 18, md: 24 },
                          color: COLORS.WHITE,
                          mb: 1.5,
                          textTransform: "none",
                        }}
                      >
                        {item.subHeading || item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 16, md: 18 },
                          lineHeight: 1.5,
                          color: COLORS.TEXT_GRAY,
                          textTransform: "none",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Description Column with Vertical Stepper (Desktop only) */}
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{ position: "relative", display: { xs: "none", md: "block" } }}
          >
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

            <Box
              sx={{
                pl: { xs: 0, md: 6 },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 18, md: 22 },
                    color: COLORS.WHITE,
                    lineHeight: "30px",
                    mb: 2,
                    transition: "all 0.3s ease",
                    textTransform: "none",
                  }}
                >
                  {data.variants[activeIndex].subHeading ||
                    data.variants[activeIndex].title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: "30px",
                    color: COLORS.TEXT_GRAY,
                    maxWidth: 650,
                    transition: "all 0.3s ease",
                    textTransform: "none",
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
            width: { xs: "90%", md: "70%" },
            mx: "auto",
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
