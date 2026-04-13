import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";

interface Props {
  data: IndustryData["realityNeeds"];
}

const RealityNeedsSection = ({ data }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
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
            fontSize: { xs: 28, md: 36},
            lineHeight: { xs: "35px", md: "42px" },
            textTransform: "uppercase",
            fontWeight: 900,  color: COLORS.BLACK,
            mb: 4,
          }}
        >
          {data.title}
        </Typography>

        <Grid container columnSpacing={6} rowSpacing={{ xs: 6, md: 6 }}>
          <Grid size={{ xs: 12, md: 4, lg: 6 }}>
            <Box
              sx={{
                bgcolor: COLORS.CARD_BG_DARK,
                color: COLORS.WHITE,
                borderRadius: 4,
                p: { xs: 3.2, md: 4, lg: 4 },
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 18 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  lineHeight: { xs: "28px", md: "30px" },
                  letterSpacing: "0.52px",
                  mb: 2,
                }}
              >
                {data.realitiesTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {data.realities.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 16 },
                      lineHeight: { xs: "26px", md: "27px" },
                      letterSpacing: "0.52px",
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
                p: { xs: 3.2, md: 4, lg: 4 },
                height: "100%",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  textTransform: "uppercase",
                  fontSize: { xs: 20, md: 24, lg: 18 },
                  color: COLORS.PRIMARY_GREEN,
                  fontWeight: 700,
                  lineHeight: { xs: "28px", md: "30px" },
                  letterSpacing: "0.52px",
                  mb: 2,
                  whiteSpace: "pre-line",
                }}
              >
                {data.needsTitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {data.needs.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 15, md: 18, lg: 16 },
                      lineHeight: { xs: "26px", md: "27px" },
                      letterSpacing: "0.52px",
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
            fontSize: { xs: 18, md: 26, lg: 18 },
            mt: { xs: 8, md: 10 },
            maxWidth: 1100,
            mx: "auto",
            color: COLORS.BLACK,
            fontWeight: 700,
            lineHeight: { xs: "28px", md: "30px" },
            letterSpacing: "0.52px",
            whiteSpace: "pre-line",
          }}
        >
          {data.bottomText}
        </Typography>

        {/* <Box sx={{ textAlign: "center", mt: 5 }}>
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
              fontWeight: 500,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: COLORS.PRIMARY_HOVER,
                boxShadow: "none",
              },
            }}
          >
            {data.ctaText}
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default RealityNeedsSection;
