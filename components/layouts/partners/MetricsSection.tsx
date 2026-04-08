import { Box, Container, Grid, Typography } from "@mui/material";
import MetricCard from "./components/MetricCard";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const MetricsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: { md: "90vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
          px: { xs: 0, md: 3 }, 
        }}
      >
        <Grid container spacing={8} alignItems="flex-start">

          {/* LEFT SIDE */}
          <Grid size={{xs:12,md:6}} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 54 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                lineHeight: 1.1,
              }}
            >
              {partnersPage.metricsSection.heading}
            </Typography>

            <Typography
              sx={{
                mt: 4,
                fontSize: { xs: 16, md: 22 },
                color: COLORS.BLACK,
                lineHeight: "26px",
                maxWidth: { xs: "400px", md: "100%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {partnersPage.metricsSection.description}
            </Typography>
          </Grid>

          {/* RIGHT SIDE (CARDS) */}
          <Grid size={{xs:12,md:6}} >
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