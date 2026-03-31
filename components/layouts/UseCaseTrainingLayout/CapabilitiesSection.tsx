"use client";

import { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Button, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import VerticalStepper from "@/components/widgets/VerticalStepper";

interface Props {
  data: UseCaseData["capabilities"];
}

const CapabilitiesSection = ({ data }: Props) => {
  const [activeItem, setActiveItem] = useState(0);
  const isGrid = data.layout === "grid";

  if (isGrid) {
    return (
      <Box
        sx={{
          bgcolor: COLORS.BLACK,
          color: COLORS.WHITE,
          py: { xs: 8, md: 20 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern - Wavy Net */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            pointerEvents: "none",
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)",
            backgroundSize: "20px 20px",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            width: { xs: "95%", md: "80%" },
            mx: "auto",
            px: { xs: 2, md: 0 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: 28, md: 44, lg: 48 },
              lineHeight: 1.1,
              mb: { xs: 8, md: 12 },
              maxWidth: 1000,
            }}
          >
            {data.title}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {data.items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 4,
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderColor: COLORS.PRIMARY_GREEN,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 18, md: 22 },
                    color: COLORS.PRIMARY_GREEN,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 15, md: 17 },
                    lineHeight: 1.5,
                    color: COLORS.TEXT_GREY,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Footer CTA */}
          <Box
            sx={{ mt: { xs: 10, md: 12 }, display: "flex", justifyContent: "center" }}
          >
            <Button
              sx={{
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 4, md: 6 },
                py: 2,
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 14, md: 16 },
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 2,
                "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
              }}
            >
              Download the Full UnfoldXR Feature List <ArrowForwardRoundedIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 20 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern - Wavy Net */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.2,
          pointerEvents: "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Intersect Patterns */}
      <Box
        component="img"
        src="/images/usecase/Intersect.png"
        sx={{
          position: "absolute",
          top: "0%",
          left: 0,
          width: { xs: "200px", md: "650px" },
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src="/images/usecase/Intersect1.png"
        sx={{
          position: "absolute",
          bottom: "3%",
          right: 0,
          width: { xs: "200px", md: "650px" },
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 36, lg: 44 },
            lineHeight: 1.1,
            mb: { xs: 8, md: 15 },
            maxWidth: 1000,
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={{ xs: 5, md: 0 }}>
          {/* Left Side: Capabilities List */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {data.items.map((item, index) => (
                <Box
                  key={item.title}
                  onClick={() => setActiveItem(index)}
                  sx={{
                    border:
                      activeItem === index
                        ? `1px solid ${COLORS.PRIMARY_GREEN}`
                        : "1px solid transparent",
                    borderRadius: 99,
                    px: { xs: 3, md: 4 },
                    py: 1.8,
                    width: "fit-content",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        activeItem === index
                          ? COLORS.PRIMARY_GREEN
                          : COLORS.WHITE,
                      textTransform: "uppercase",
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 17, lg: 19 },
                      fontWeight: 900,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Vertical Separator Line with Stepper on Desktop */}
          <Grid
            size={{ md: 1 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <VerticalStepper
              itemsCount={data.items.length}
              activeIndex={activeItem}
            />
          </Grid>

          {/* Right Side: Dynamic Description */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pt: { xs: 0, md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 22, lg: 26 },
                  lineHeight: 1.4,
                  color: COLORS.WHITE,
                  fontWeight: 500,
                  transition: "opacity 0.3s ease",
                  textTransform: "capitalize",
                }}
              >
                {data.items[activeItem].description}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Footer CTA */}
        <Box
          sx={{ mt: { xs: 10, md: 15 }, display: "flex", justifyContent: "center" }}
        >
          <Button
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              borderRadius: 99,
              px: { xs: 4, md: 6 },
              py: 2,
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              fontSize: { xs: 14, md: 16 },
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 2,
              "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
            }}
          >
            Download the Full UnfoldXR Feature List <ArrowForwardRoundedIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CapabilitiesSection;
