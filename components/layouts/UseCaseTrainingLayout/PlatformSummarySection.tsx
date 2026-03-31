import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["platformSummary"];
}

const PlatformSummarySection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 15 } }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          bgcolor: COLORS.BG_LIGHT,
          borderRadius: "40px",
          p: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1,
                color: COLORS.BLACK,
              }}
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 20 },
                lineHeight: 1.6,
                color: COLORS.OVERLAY_07,
                mb: 4,
              }}
            >
              {data.description1}
            </Typography>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 20 },
                lineHeight: 1.6,
                color: COLORS.OVERLAY_07,
              }}
            >
              {data.description2}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlatformSummarySection;
