import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const OutcomesSection = () => {
  const { outcomesSection: data } = industriesPage.automotive;
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 900, md: "85vh" },
        color: COLORS.WHITE,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        py: { xs: 10, md: 15 },
      }}
    >
      <Box
        component="img"
        src="/images/Industries/Driving.png"
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
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Border Frame */}
        <Box
          sx={{
            border: "2px solid rgba(197, 255, 46, 0.4)", 
            borderRadius: "24px",
            boxShadow: "0 0 40px rgba(0,0,0,0.9)", 
            p: { xs: 4, md: 8 },
            pt: { xs: 10, md: 10 },
            position: "relative",
            width: "95%",
            mx: "auto",
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            sx={{ position: "relative" }}
          >
            {/* Left Side: Headline with Highlight - Slight overlap (just a letter or two) */}
            <Grid
              size={{ xs: 12, md: 8.5 }}
              sx={{ ml: { md: -5.5, lg: -11.2 }, zIndex: 2 }}
            >
            
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: 36, md: 54, lg: 64 },
                    lineHeight: 1,
                    textTransform: "uppercase",
                    fontWeight: 900,
                    maxWidth: "none",
                    color: COLORS.WHITE,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box component="span" sx={{ display: "block", whiteSpace: "nowrap" }}>
                    Driving
                  </Box>
                  <Box component="span" sx={{ display: "block", whiteSpace: "nowrap" }}>
                    Measurable Outcomes
                  </Box>
                  <Box component="span" sx={{ display: "block", whiteSpace: "nowrap" }}>
                    In
                  </Box>
                  <Box component="span" sx={{ display: "block", whiteSpace: "nowrap" }}>
                    Automotive Operations
                  </Box>
                </Typography>
             
            </Grid>

            {/* Right Side: Stats Grid - Right column stats overlap slightly on the right */}
            <Grid size={{ xs: 12, md: 4  ,lg: 4.2 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                rowSpacing={{ xs: 6, md: 8 }}
              >
                {data.metrics.map((metric, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <Stack
                      spacing={0.5}
                      sx={{
                        position: "relative",
                        // Make the right column (i = 1, 3, 5) overlap the border slightly
                        mr: {
                          md: i % 2 !== 0 ? -6 : 0,
                          lg: i % 2 !== 0 ? -8 : 0,
                        },
                        // Overlap bottom border for the last two metrics
                        mb: {
                          md: i >= 4 ? -12 : 0,
                          lg: i >= 4 ? -13 : 0,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: din.style.fontFamily,
                          color: COLORS.PRIMARY_GREEN,
                          fontSize: { xs: 48, md: 64 },
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
                          fontSize: { xs: 16, md: 18, lg: 20 },
                          lineHeight: 1.4,
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 400,
                          // Extra right overlap for 40% (index 3)
                          mr: {
                            md: i === 3 ? -12 : 0,
                            lg: i === 3 ? -16 : 0,
                          },
                          maxWidth: {
                            md: i === 3 ? 350 : "none",
                            lg: i === 3 ? 400 : "none",
                          },
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
