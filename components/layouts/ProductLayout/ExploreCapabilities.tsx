import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const ExploreCapabilities = () => {
  const data = homePage.productPage.exploreCapabilities;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
        py: { xs: 8, md: 16 },
      }}
    >
      <Box
        sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 } }}
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
              {data.modes.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    border: item.active
                      ? `2px solid ${COLORS.PRIMARY_HOVER}`
                      : "2px solid transparent",
                    borderRadius: "32px",
                    p: item.active ? 2.5 : 0,
                    pl: item.active ? 3 : 0,
                    cursor: "pointer",
                    width: "fit-content",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: item.active ? COLORS.PRIMARY_HOVER : COLORS.BLACK,
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
                      color: item.active ? COLORS.PRIMARY_HOVER : COLORS.BLACK,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Center Vertical Separator */}
          <Grid
            size={{ xs: 0, md: 0.5 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "2px",
                height: "100%",
                bgcolor: COLORS.BLACK,
                opacity: 1,
              }}
            />
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { xs: 0, md: 6 }, pt: { xs: 0, md: 2 } }}>
              {data.modes
                .filter((m) => m.active)
                .map((activeMode, idx) => (
                  <Box key={idx}>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 18, md: 22 },
                        lineHeight: 1.6,
                        color: COLORS.BLACK,
                        mb: activeMode.description.includes(" Work becomes")
                          ? 0
                          : 4,
                      }}
                    >
                      {activeMode.description.split(" Work becomes")[0]}
                    </Typography>
                    {activeMode.description.includes(" Work becomes") && (
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: { xs: 18, md: 22 },
                          lineHeight: 1.6,
                          color: COLORS.BLACK,
                          mt: 4,
                        }}
                      >
                        Work becomes
                        {activeMode.description.split(" Work becomes")[1]}
                      </Typography>
                    )}
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExploreCapabilities;
