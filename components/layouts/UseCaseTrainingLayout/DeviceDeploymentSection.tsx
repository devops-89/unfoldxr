import { Box, Container, Grid, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { deviceA, deviceB, deviceC } from "./data";

const DeviceDeploymentSection = () => {
  return (
    <Box sx={{ bgcolor: "#f2f5f7", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 30, md: 52 }, mb: 3 }}>
          Device & Deployment
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ position: "relative", borderRadius: "28px", overflow: "hidden", minHeight: 320 }}>
              <Box component="img" src={deviceA} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 320 }} />
              <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }} />
              <Typography sx={{ position: "absolute", left: 24, bottom: 20, color: "#fff", fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 22, md: 38 }, maxWidth: 740 }}>
                Mobile phones, tablets, and smart glasses
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "relative", borderRadius: "28px", overflow: "hidden", minHeight: 320 }}>
              <Box component="img" src={deviceB} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 320 }} />
              <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }} />
              <Typography sx={{ position: "absolute", left: 20, bottom: 20, color: "#fff", fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 20, md: 28 } }}>
                From simple handheld devices to advanced AR wearables
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Box sx={{ position: "relative", borderRadius: "28px", overflow: "hidden", minHeight: 320 }}>
              <Box component="img" src={deviceC} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 320 }} />
              <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }} />
              <Typography sx={{ position: "absolute", left: 24, bottom: 20, color: "#fff", fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 22, md: 38 }, maxWidth: 980 }}>
                Scales with workforce size, complexity, and budget
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DeviceDeploymentSection;
