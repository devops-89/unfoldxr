import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const capabilities = [
  {
    title: "Agent mode",
    subtitle: "Structured execution at the moment of work",
    active: true,
  },
  {
    title: "Creator mode",
    subtitle: "Knowledge to standardised workflows",
  },
  {
    title: "Smart scan mode",
    subtitle: "Identify. Diagnose. Resolve.",
  },
  {
    title: "Smart rostering mode",
    subtitle: "Right Skill. Right Time.",
  },
  {
    title: "Expert mode",
    subtitle: "Complete operational visibility",
  },
  {
    title: "Intelligence & analytics mode",
    subtitle: "Continuous operational improvement",
  },
];

const ExploreCapabilities = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 34, md: 64 },
            lineHeight: { xs: "42px", md: "92px" },
          }}
        >
          Explore capabilities by mode
        </Typography>
        <Grid container spacing={{ xs: 4, md: 7 }} sx={{ mt: 3 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            {capabilities.map((item) => (
              <Box key={item.title} sx={{ mb: 2.5 }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    border: item.active ? "3px solid #b6ec1a" : "none",
                    borderRadius: item.active ? "63px" : 0,
                    px: item.active ? 2 : 0,
                    py: item.active ? 1 : 0,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: item.active ? "#b6ec1a" : "#000",
                    bgcolor: item.active ? "#000" : "transparent",
                    fontSize: { xs: 24, md: 34 },
                    lineHeight: { xs: "35px", md: "46px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.5,
                    fontFamily: din.style.fontFamily,
                    textTransform: "capitalize",
                    fontSize: { xs: 20, md: 34 },
                    lineHeight: { xs: "34px", md: "46px" },
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                letterSpacing: "0.04em",
                textAlign: "justify",
                fontSize: { xs: 18, md: 28 },
                lineHeight: { xs: "34px", md: "49px" },
              }}
            >
              UnfoldXR guides teams through tasks step by step, aligned to the
              exact asset, location, and requirement. Manuals, SOPs, safety checks,
              diagnostics, reporting, and remote collaboration are built into a
              single workflow.
              <br />
              <br />
              Work becomes consistent, compliant, and faster to complete.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExploreCapabilities;
