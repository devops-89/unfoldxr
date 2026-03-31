import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const RealityNeedsSection = () => {
  const { realityNeedsSection: data } = industriesPage.automotive;
  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2.1, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 48, lg: 54 },
            lineHeight: 1.1,
            textTransform: "uppercase",
            fontWeight: 900,
            color: COLORS.BLACK,
            mb: 8,
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 5 },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 28 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                AUTOMOTIVE REALITIES:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {data.realities.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 20 },
                      lineHeight: 1.4,
                      display: "flex",
                      gap: 1.5,
                      "&::before": {
                        content: '"•"',
                        color: COLORS.WHITE,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 5 },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 28 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                WHAT IT NEEDS:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {data.needs.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 20 },
                      lineHeight: 1.4,
                      display: "flex",
                      gap: 1.5,
                      "&::before": {
                        content: '"•"',
                        color: COLORS.WHITE,
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 18, md: 26, lg: 32 },
            mt: 16,
            maxWidth: 1100,
            mx: "auto",
            color: COLORS.BLACK,
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {data.bottomText}
        </Typography>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              px: { xs: 4, md: 6 },
              py: 1.5,
              borderRadius: "99px",
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 14, md: 16, lg: 18 },
              fontWeight: 700,
              textTransform: "capitalize",
              boxShadow: "none",
              "&:hover": {
                bgcolor: COLORS.PRIMARY_HOVER,
                boxShadow: "none",
              },
            }}
          >
            {data.ctaText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RealityNeedsSection;
