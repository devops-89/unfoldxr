import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";

interface Props {
  data: IndustryData["outcomes"];
}

const OutcomesSection = ({ data }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 900, md: "85vh" },
        color: COLORS.WHITE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        py: { xs: 10, md: 15 },
      }}
    >
      <Box
        component="img"
        src={data.image}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.8)" }}
      />

      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Border Frame */}
        <Box
          sx={{
            ml: { xs: 0, md: -5.5, lg: -8.2 },
            border: "2px solid rgba(197, 255, 46, 0.4)",
            borderRadius: "24px",
            boxShadow: "0 0 40px rgba(0,0,0,0.9)",
            p: { xs: 3, md: 8 },
            pt: { xs: 8, md: 10 },
            position: "relative",
            width: "100%",
            mx: "auto",
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            sx={{ position: "relative" }}
          >
            {/* Left Side: Headline with Highlight */}
            <Grid
              size={{ xs: 12, md: 7}}
              sx={{ zIndex: 2 }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 33, md: 54, lg: 60 },
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  fontWeight: 900,
                  color: COLORS.WHITE,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {data.titleLines.map((line, idx) => (
                  <Box
                    key={idx}
                    component="span"
                    sx={{
                      display: "block",
                    }}
                  >
                    {line}
                  </Box>
                ))}
              </Typography>
            </Grid>

            {/* Right Side: Stats Grid */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Grid
                container
                spacing={{ xs: 3, md: 4 }}
                rowSpacing={{ xs: 5, md: 6 }}
              >
                {data.metrics.map((metric, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <Stack
                      spacing={0.5}
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: din.style.fontFamily,
                          color: COLORS.PRIMARY_GREEN,
                          fontSize: { xs: 42, md: 54, lg: 60 },
                          fontWeight: 900,
                          lineHeight: 1,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 15, md: 16, lg: 18 },
                          lineHeight: 1.3,
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 400,
                        }}
                      >
                        {metric.text}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default OutcomesSection;
