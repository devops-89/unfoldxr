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

import EventNoteIcon from "@mui/icons-material/EventNote";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const phaseIcons = [
  <EventNoteIcon key="0" sx={{ fontSize: 20, color: "#000" }} />,
  <PrecisionManufacturingIcon key="1" sx={{ fontSize: 20, color: "#000" }} />,
  <FactCheckIcon key="2" sx={{ fontSize: 20, color: "#000" }} />,
];

const OperationFlowSection = ({ data, ctaIcon, ctaText }: Props) => {
  const { openModal } = useDemoModal();

  return (
    <Box
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 6, md: 10 } }}
    >
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
            fontSize: { xs: 28, md: 48, lg: 36 },
            lineHeight: "52px",
            textTransform: "uppercase",
            fontWeight: 900,
            maxWidth: 1000,
            mb: 4,
          }}
        >
          {data.title}
        </Typography>

        <Grid container columnSpacing={4} rowSpacing={{ xs: 4, md: 4 }}>
          {data.phases.map((block, index) => (
            <Grid key={block.phase} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "transparent",
                  borderRadius: "16px",
                  border: `1.5px solid ${COLORS.PRIMARY_GREEN}`,
                  p: { xs: 3, md: 3 },
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
                      fontSize: { xs: 20, md: 16, lg: 18 },
                      fontWeight: 700,
                      lineHeight: "30px",
                      letterSpacing: "0.52px",
                      textTransform: "uppercase",
                      color: COLORS.WHITE,
                    }}
                  >
                    {block.phase}
                  </Typography>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: COLORS.PRIMARY_GREEN,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {phaseIcons[index] || phaseIcons[0]}
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "rgba(255,255,255,0.15)",
                    my: 1,
                    mb: 4,
                  }}
                />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {block.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: COLORS.PRIMARY_GREEN,
                          fontSize: 18,
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        ✓
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: "rgba(255,255,255,0.8)",
                          fontSize: { xs: 14, md: 16 },
                          lineHeight: 1.4,
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

        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 6 } }}>
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
              fontSize: { xs: 16, md: 16 },
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
