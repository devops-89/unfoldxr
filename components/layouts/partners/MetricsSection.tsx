"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import MetricCard from "./components/MetricCard";
import { partnersPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

const MetricsSection = () => {
  return (
    <Box
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      sx={{
        backgroundColor: "#fff",
        // minHeight: { md: "90vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
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
        <Grid container spacing={7} alignItems="flex-start">
          {/* LEFT SIDE */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                fontSize: { xs: 32, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                lineHeight: { xs: 1.1, md: "52px" },
              }}
            >
              {partnersPage.metricsSection.heading}
            </Typography>

            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{
                mt: 2,
                fontSize: { xs: 18, md: 18 },
                color: COLORS.BLACK,
                lineHeight: "30px",
                maxWidth: { xs: "500px", md: "100%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {partnersPage.metricsSection.description}
            </Typography>
          </Grid>

          {/* RIGHT SIDE (CARDS) */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid 
              container 
              spacing={{ xs: 5, md: 5 }}
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {partnersPage.metricsSection.metrics_card_data.map(
                (card, index) => (
                  <Grid 
                    size={{ ...card.gridSize }} 
                    key={index}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <MetricCard
                      title={card.title}
                      description={card.description}
                      gridSize={card.gridSize}
                    />
                  </Grid>
                ),
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MetricsSection;
