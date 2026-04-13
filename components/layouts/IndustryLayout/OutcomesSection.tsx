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
        bgcolor: "#000000",
        color: COLORS.WHITE,
        py: { xs: 8, md: 15 },
        px: { xs: 3, md: 8, lg: 12 },
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        {/* Top Heading */}
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 44, lg: 52 },
            lineHeight: { xs: "35px", md: "60px" },
            textTransform: "uppercase",
            fontWeight: 900,
            color: COLORS.WHITE,
            mb: { xs: 6, md: 8 },
            maxWidth: "1000px",
          }}
        >
          {data.titleLines.join(" ")}
        </Typography>

        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Side: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={data.image}
              alt="Industry Outcomes"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "24px",
                objectFit: "cover",
                border: "8px solid #2A2A2A", 
                boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
              }}
            />
          </Grid>

          {/* Right Side: Stats */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid
              container
              spacing={{ xs: 4, md: 5 }}
            >
              {data.metrics.map((metric, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6 }}>
                  <Stack spacing={1}>
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        color: COLORS.PRIMARY_GREEN,
                        fontSize: { xs: 42, md: 48, lg: 36},
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 15, md: 16, lg: 16 },
                        lineHeight: { xs: "28px", md: "24px" },
                        letterSpacing: "0.5px",
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
  );
};

export default OutcomesSection;
