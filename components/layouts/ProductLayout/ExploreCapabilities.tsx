import { Box, Typography, Grid } from "@mui/material";
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
    <Box sx={{ backgroundColor: "#fff", color: "#000", py: { xs: 8, md: 16 } }}>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 } }}>
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
          Explore capabilities by mode
        </Typography>

        <Grid container spacing={{ xs: 4, md: 0 }}>
          {/* Left Side: Capabilities Menu */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
              {capabilities.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    border: item.active ? "2px solid #b6ec1a" : "2px solid transparent",
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
                      color: item.active ? "#b6ec1a" : "#000",
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
                      color: item.active ? "#b6ec1a" : "#000",
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
          <Grid size={{ xs: 0, md: 0.5 }} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            <Box sx={{ width: "2px", height: "100%", bgcolor: "#000", opacity: 1 }} />
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { xs: 0, md: 6 }, pt: { xs: 0, md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 22 },
                  lineHeight: 1.6,
                  color: "#000",
                  mb: 4,
                }}
              >
                UnfoldXR guides teams through tasks step by step, aligned to the
                exact asset, location, and requirement. Manuals, SOPs, safety
                checks, diagnostics, reporting, and remote collaboration are built
                into a single workflow.
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 22 },
                  lineHeight: 1.6,
                  color: "#000",
                }}
              >
                Work becomes consistent, compliant, and faster to complete.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExploreCapabilities;
