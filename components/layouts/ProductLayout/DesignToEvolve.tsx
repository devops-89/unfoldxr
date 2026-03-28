import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const DEVICE_IMG =
  "https://www.figma.com/api/mcp/asset/cad5507a-727e-4eff-b436-0ae8b89d22fb";

const variants = [
  {
    title: "UnfoldXR Augment",
    active: true,
  },
  {
    title: "UnfoldXR Empower",
  },
  {
    title: "UnfoldXR Edge",
  },
];

const DesignToEvolve = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 8, md: 14 } }}>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 } }}>
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 48, lg: 52 },
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Designed to evolve with
          <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
          your operations
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18, lg: 20 },
            lineHeight: 1.5,
            color: "#e0e0e0",
            maxWidth: 1000,
          }}
        >
          Start with what you need today and expand as your operations grow. UnfoldXR let's organizations scale capabilities without paying for unnecessary complexity.
        </Typography>

        {/* Menu and Description split */}
        <Grid container spacing={{ xs: 4, md: 4 }} sx={{ mt: { xs: 6, md: 10 } }}>
          {/* Left Menu Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 4 } }}>
              {variants.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    fontFamily: din.style.fontFamily,
                    border: item.active ? "2px solid #b6ec1a" : "2px solid transparent",
                    borderRadius: "99px",
                    display: "inline-block",
                    px: { xs: 2, md: 3 },
                    py: 1,
                    color: item.active ? "#b6ec1a" : "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fontSize: { xs: 16, md: 22 },
                    fontWeight: 700,
                    width: "fit-content",
                    cursor: "pointer",
                    ml: item.active ? 0 : { xs: 2, md: 3 }, // simulate unselected indent
                  }}
                >
                  {item.title}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Description Column with Vertical Separator */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ position: "relative" }}>
            {/* Lime green vertical separator line (visible only on desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: "5%",
                left: 0,
                width: "2px",
                bgcolor: "#b6ec1a",
              }}
            />
            
            <Box sx={{ pl: { xs: 0, md: 6 } }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 20, md: 24 },
                  color: "#fff",
                  mb: 2,
                }}
              >
                Enhance productivity for frontline work
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "#99a1af",
                  maxWidth: 650,
                }}
              >
                It enhances how your technicians already work making every
                task faster, smarter, and more consistent without disrupting
                existing workflows.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Device Image */}
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            borderRadius: { xs: 2.5, md: "24px" },
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Box
            component="img"
            src={DEVICE_IMG}
            alt="Platform preview"
            sx={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default DesignToEvolve;
