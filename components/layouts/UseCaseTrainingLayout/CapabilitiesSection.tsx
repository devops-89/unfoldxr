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
          py: { xs: 8, md: 10 },
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
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)",
            backgroundSize: "20px 20px",
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
            width: { xs: "90%", md: "80%" },
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
              fontSize: { xs: 28, md: 36 },
              lineHeight: "42px",
              mb: { xs: 8, md: 8 },
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
                    fontSize: { xs: 18, md: 18 },
                    color: COLORS.PRIMARY_GREEN,
                    lineHeight: "24px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 15, md: 16 },
                    lineHeight: "24px",
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
            sx={{
              mt: { xs: 6, md: 8 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 14, md: 18, lg: 18 },
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 2,
                "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
              }}
            >
              Download the full UnfoldXR feature list{" "}
              <ArrowForwardRoundedIcon />
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
        py: { xs: 8, md: 8 },
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
            fontSize: { xs: 28, md: 36 },
            lineHeight: "42px",
            mb: { xs: 2, md: 4 },
            maxWidth: 900,
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={{ xs: 5, md: 0 }}>
          {/* Left & Middle Combined: Capabilities List + Stepper Dots (Shared alignment) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2.5, md: 0 },
                position: "relative",
              }}
            >
              {data.items.map((item, index) => (
                <Box
                  key={item.title}
                  sx={{
                    display: "flex",
                    alignItems: "stretch", // Ensure col heights match for continuous line
                    justifyContent: "space-between",
                  }}
                >
                  {/* Header Pill Column */}
                  <Box sx={{ flex: 1, py: activeItem === index ? 1 : 0.8 }}>
                    <Box
                      onClick={() => setActiveItem(index)}
                      sx={{
                        border:
                          activeItem === index
                            ? `1px solid ${COLORS.PRIMARY_GREEN}`
                            : "1px solid transparent",
                        borderRadius: 99,
                        px: { xs: 3, md: 4 },
                        py: activeItem === index ? 1.5 : 0.6,
                        width: "fit-content",
                        cursor: "pointer",
                        opacity: activeItem === index ? 1 : 0.5,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          borderColor:
                            activeItem === index
                              ? COLORS.PRIMARY_GREEN
                              : "rgba(255, 255, 255, 0.2)",
                        },
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
                          fontSize: { xs: 15, md: 16 },
                          fontWeight: 900,
                          lineHeight: "17px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    {/* Mobile Description */}
                    {activeItem === index && (
                      <Typography
                        sx={{
                          display: { xs: "block", md: "none" },
                          mt: 1.5,
                          px: 2,
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 15 },
                          lineHeight: 1.5,
                          color: COLORS.WHITE,
                          fontWeight: 500,
                          textTransform: "none",
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

                  {/* Desktop Stepper Column עם Continuous Dynamic Line */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      width: "80px", // Fixed width for dot column
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {/* Line Segment: Top Half */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        bottom: "50%",
                        width: "1.5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor:
                          index <= activeItem
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(255, 255, 255, 0.1)",
                        zIndex: 0,
                        // First item doesn't need top line
                        opacity: index === 0 ? 0 : 1,
                      }}
                    />
                    {/* Line Segment: Bottom Half */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        bottom: 0,
                        width: "1.5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor:
                          index < activeItem
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(255, 255, 255, 0.1)",
                        zIndex: 0,
                        // Last item doesn't need bottom line
                        opacity: index === data.items.length - 1 ? 0 : 1,
                      }}
                    />

                    {/* The Dot */}
                    <Box
                      sx={{
                        width: activeItem === index ? "12px" : "8px",
                        height: activeItem === index ? "12px" : "8px",
                        bgcolor:
                          activeItem >= index
                            ? COLORS.PRIMARY_GREEN
                            : "rgba(255, 255, 255, 0.3)",
                        borderRadius: "50%",
                        transition: "all 0.4s ease",
                        zIndex: 1,
                        boxShadow:
                          activeItem === index
                            ? `0 0 10px ${COLORS.PRIMARY_GREEN}`
                            : "none",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Side: Dynamic Description (Desktop only) */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ pt: { xs: 0, md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 16 },
                  lineHeight: "24px",
                  letterSpacing: "0.52px",
                  color: COLORS.WHITE,
                  fontWeight: 500,
                  transition: "opacity 0.3s ease",
                  textTransform: "none",
                }}
              >
                {data.items[activeItem].description}
              </Typography>
            </Box>
          </Grid>
        </Grid>

          <Box
            sx={{
              mt: { xs: 6, md: 8 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              borderRadius: 99,
              px: { xs: 2.5, md: 4 },
              py: 1.2,
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              fontSize: { xs: 14, md: 18, lg: 18 },
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 2,
              "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
            }}
          >
            Download the full UnfoldXR feature list <ArrowForwardRoundedIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CapabilitiesSection;
