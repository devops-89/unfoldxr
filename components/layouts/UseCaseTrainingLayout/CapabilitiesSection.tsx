import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { capabilities } from "./data";

const CapabilitiesSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 30, md: 58 }, maxWidth: 1200, lineHeight: 1.1 }}>
          Capabilities that power training, onboarding & knowledge capture
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            {capabilities.map((item, index) => (
              <Box key={item} sx={{ border: index === 0 ? "3px solid #b6ec1a" : "1px solid transparent", borderRadius: "78px", px: 2, py: 1, mb: 1 }}>
                <Typography sx={{ color: index === 0 ? "#b6ec1a" : "#fff", textTransform: "uppercase", fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 } }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 32 }, lineHeight: { xs: "32px", md: "50px" }, color: "#ededed" }}>
              Capture expert processes once and convert them into structured, step-by-step digital workflows for training and execution.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ bgcolor: "#b6ec1a", color: "#000", borderRadius: 99, px: 5, py: 1.5, fontSize: { xs: 16, md: 22 }, textTransform: "none", "&:hover": { bgcolor: "#b6ec1a" } }}>
            Download the Full UnfoldXR Feature List
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CapabilitiesSection;
