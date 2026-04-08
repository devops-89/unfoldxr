"use client";

import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import { useDemoModal } from "@/components/context/DemoModalContext";

interface Props {
  data: IndustryData["operationFlow"];
  ctaIcon?: string;
  ctaText?: string;
}

const OperationFlowSection = ({ data, ctaIcon, ctaText }: Props) => {
  const { openModal } = useDemoModal();

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 10, md: 15 } }}>
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 28, md: 48, lg: 48 },
            lineHeight: "52px",
            textTransform: "uppercase",
            fontWeight: 900,
            maxWidth: 1000,
            mb: 8,
          }}
        >
          {data.title}
        </Typography>

        <Grid container columnSpacing={4} rowSpacing={{ xs: 8, md: 4 }}>
          {data.phases.map((block) => (
            <Grid key={block.phase} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "transparent",
                  borderRadius: "16px",
                  border: `1.5px solid ${COLORS.PRIMARY_GREEN}`,
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontSize: { xs: 22, md: 22 },
                      fontWeight: 700,
                      lineHeight: "30px",
                      letterSpacing: "0.52px",
                      textTransform: "uppercase",
                      color: COLORS.WHITE,
                    }}
                  >
                    {block.phase}
                  </Typography>
                  {ctaIcon && (
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "#F5E6FF",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 0.8,
                      }}
                    >
                      <Box
                        component="img"
                        src={ctaIcon}
                        alt=""
                        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </Box>
                  )}
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "rgba(255,255,255,0.15)",
                    my: 1,
                    mb: 5,
                  }}
                />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  {block.items.map((item) => (
                    <Box
                      key={item}
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                    >
                      <Typography
                        sx={{
                          color: COLORS.PRIMARY_GREEN,
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 1.6,
                        }}
                      >
                        ✓
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: "rgba(255,255,255,0.8)",
                          fontSize: { xs: 15, md: 18 },
                          // lineHeight: "2px",
                          letterSpacing: "0.52px",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: { xs: 8, md: 16 } }}>
          <Button
            variant="contained"
            onClick={openModal}
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              px: 6,
              py: 1.5,
              borderRadius: "99px",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: COLORS.PRIMARY_HOVER,
                boxShadow: "none",
              },
            }}
          >
            {ctaText || "Book a demo"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OperationFlowSection;
