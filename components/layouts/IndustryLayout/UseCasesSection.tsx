import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";

interface Props {
  data: IndustryData["useCases"];
}

const UseCasesSection = ({ data }: Props) => {
  // Staggered margin for items on the right
  const getMarginLeft = (index: number) => {
    const margins = [0, 8, 4, 0]; // 01: 0, 02: right, 03: mid, 04: 0
    return { md: margins[index] || 0 };
  };

  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        minHeight: { md: "80vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* Left Side: Headline and Button */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 36, md: 54, lg: 64 },
                lineHeight: 1.1,
                textTransform: "uppercase",
                fontWeight: 900,
                color: COLORS.BLACK,
                maxWidth: 700,
                mb: 6,
              }}
            >
              {data.title}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "99px",
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                px: { xs: 4, md: 5 },
                py: 1.5,
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 16, md: 20 },
                textTransform: "capitalize",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                "&:hover": {
                  bgcolor: COLORS.PRIMARY_HOVER,
                  boxShadow: "none",
                },
              }}
            >
              {data.ctaText} &rarr;
            </Button>
          </Grid>

          {/* Right Side: Staggered Pills */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} alignItems="flex-start">
              {data.items.map((label, i) => (
                <Box
                  key={label}
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "100px",
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 1.2, md: 1.5 },
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 2, md: 3 },
                    transition: "all 0.3s ease",
                    bgcolor: COLORS.WHITE,
                    ml: getMarginLeft(i),
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.03)",
                    "&:hover": {
                      borderColor: COLORS.PRIMARY_GREEN,
                      bgcolor: "rgba(197, 255, 46, 0.05)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      minWidth: { xs: 40, md: 48 },
                      borderRadius: "50%",
                      bgcolor: COLORS.BLACK,
                      color: COLORS.WHITE,
                      display: "grid",
                      placeItems: "center",
                      fontFamily: din.style.fontFamily,
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 700,
                    }}
                  >
                    {`0${i + 1}`}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: 16, md: 24, lg: 28 },
                      color: COLORS.BLACK,
                      lineHeight: 1.2,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCasesSection;
