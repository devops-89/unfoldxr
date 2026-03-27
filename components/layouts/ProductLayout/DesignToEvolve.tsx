import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import ContainedButton from "@/components/widgets/ContainedButton";

const DEVICE_IMG =
  "https://www.figma.com/api/mcp/asset/cad5507a-727e-4eff-b436-0ae8b89d22fb";

const variants = [
  {
    title: "UnfoldXR Augment",
    desc: "It enhances how your technicians already work making every task faster, smarter, and more consistent without disrupting existing workflows.",
    active: true,
  },
  {
    title: "UnfoldXR Empower",
    desc: "UnfoldXR Empower builds on Augment with advanced knowledge management, offline support, intelligent scan, Creator Mode and more.",
  },
  {
    title: "UnfoldXR Edge",
    desc: "Built for enterprise operations where compliance, orchestration, and performance visibility must scale across teams and devices.",
  },
];

const DesignToEvolve = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 30, md: 64 },
            lineHeight: { xs: "40px", md: "92px" },
            maxWidth: 900,
          }}
        >
          Designed to evolve with your operations
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 20, md: 36 },
            lineHeight: { xs: "32px", md: "44px" },
            color: "#fff",
          }}
        >
          Start with what you need today and expand as your operations grow.
        </Typography>

        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            borderRadius: { xs: 2.5, md: "28px" },
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

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: { xs: 4, md: 6 } }}>
          {variants.map((item, idx) => (
            <Grid size={{ xs: 12 }} key={item.title}>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  border: item.active ? "3px solid #b6ec1a" : "none",
                  borderRadius: item.active ? "78px" : 0,
                  display: "inline-block",
                  px: item.active ? 3 : 0,
                  py: item.active ? 1.2 : 0,
                  color: item.active ? "#b6ec1a" : "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  fontSize: { xs: 24, md: 36 },
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  mt: 1.5,
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 17, md: 30 },
                  lineHeight: { xs: "28px", md: "48px" },
                  color: idx === 0 ? "#fff" : "#99a1af",
                }}
              >
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <ContainedButton sx={{ mt: 5 }}>Visit AVA</ContainedButton>
      </Container>
    </Box>
  );
};

export default DesignToEvolve;
