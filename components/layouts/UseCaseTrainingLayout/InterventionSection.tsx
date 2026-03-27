import { Box, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { tablet } from "./data";

const InterventionSection = () => {
  return (
    <Box sx={{ bgcolor: "#f2f2f2", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 32, md: 64 }, maxWidth: 700 }}>
          The UnfoldXR Intervention
        </Typography>
        <Typography sx={{ mt: 2, ml: { md: "28%" }, fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 28 }, lineHeight: { xs: "32px", md: "44px" } }}>
          With UnfoldXR, AI and augmented reality empower the 80% deskless workforce that traditional learning systems often overlook. Training becomes embedded in execution.
        </Typography>
        <Typography sx={{ mt: 2, ml: { md: "28%" }, fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 28 }, lineHeight: { xs: "32px", md: "44px" } }}>
          Teams learn by doing, follow standardised guidance, and access critical knowledge in real time through AI assistant AVA or remote experts.
        </Typography>
        <Box sx={{ mt: 5, borderRadius: 3, overflow: "hidden" }}>
          <Box component="img" src={tablet} alt="" sx={{ width: "100%", display: "block" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default InterventionSection;
