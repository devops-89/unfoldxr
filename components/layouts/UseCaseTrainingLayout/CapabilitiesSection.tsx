"use client";

import { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Button, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";

interface Props {
  data: UseCaseData["capabilities"];
}

const CapabilitiesSection = ({ data }: Props) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "#fff",
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
          opacity: 0.20,
          pointerEvents: "none",
          backgroundImage: `url("https://www.figma.com/api/mcp/asset/434f40f0-c521-4683-93ba-f29e240f95b3")`,
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

      <Box sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 }, position: "relative", zIndex: 1 }}>
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
                  key={item}
                  onMouseEnter={() => setActiveItem(index)}
                  sx={{
                    border: activeItem === index ? "1px solid #ccf919" : "1px solid transparent",
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
                      color: activeItem === index ? "#ccf919" : "#fff",
                      textTransform: "uppercase",
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 17, lg: 19 },
                      fontWeight: 900,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Vertical Separator Line on Desktop */}
          <Grid size={{ md: 1 }} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            <Box sx={{ width: "2px", height: "100%", bgcolor: "rgba(255,255,255,0.4)" }} />
          </Grid>

          {/* Right Side: Dynamic Description */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pt: { xs: 0, md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 22, lg: 26 },
                  lineHeight: 1.4,
                  color: "#fff",
                  fontWeight: 500,
                  transition: "opacity 0.3s ease",
                }}
              >
                {data.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Footer CTA */}
        <Box sx={{ mt: { xs: 10, md: 15 }, display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              bgcolor: "#ccf919",
              color: "#000",
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
              "&:hover": { bgcolor: "#b6ec1a" },
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
