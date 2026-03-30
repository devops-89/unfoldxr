import { Box, Container, Grid, Typography } from "@mui/material";
import MetricCard from "./components/MetricCard";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const MetricsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f3f3f3", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* LEFT SIDE */}
          <Grid size={{xs:12,md:5}} >
            <Typography
              sx={{
                fontSize: { xs: 28, md: 40 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
              }}
            >
              {partnersPage.metricsSection.heading}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: 14, md: 16 },
                color: "#444",
                lineHeight: "24px",
              }}
            >
              {partnersPage.metricsSection.description}
            </Typography>
          </Grid>

          {/* RIGHT SIDE (CARDS) */}
          <Grid size={{xs:12,md:7}} >
            <Grid container spacing={6}>
              {partnersPage.metricsSection.metrics_card_data.map((card, index) => (
                <Grid size={{...card.gridSize}} key={index}>
                  <MetricCard
                    title={card.title}
                    description={card.description}
                    gridSize={card.gridSize}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default MetricsSection;