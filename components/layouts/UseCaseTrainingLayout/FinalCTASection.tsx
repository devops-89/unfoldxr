import { Box, Button, Container, Typography } from "@mui/material";
import { din, inter } from "@/utils/fonts";

const FinalCTASection = () => {
  return (
    <Box sx={{ bgcolor: "#000", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fff", borderRadius: "24px", border: "1px solid rgba(182,255,46,0.15)", p: { xs: 3, md: 8 }, textAlign: "center" }}>
          <Typography sx={{ fontFamily: din.style.fontFamily, fontWeight: 700, textTransform: "uppercase", fontSize: { xs: 30, md: 64 }, lineHeight: 1.08 }}>
            Turn Expertise into Scalable Capability.
          </Typography>
          <Typography sx={{ mt: 2.5, fontFamily: inter.style.fontFamily, fontSize: { xs: 18, md: 32 } }}>
            Train faster. Perform better. Retain knowledge.
          </Typography>
          <Button sx={{ mt: 4, bgcolor: "#b6ec1a", color: "#000", borderRadius: 99, px: 4, py: 1.5, fontFamily: din.style.fontFamily, fontSize: 20, textTransform: "none", "&:hover": { bgcolor: "#b6ec1a" } }}>
            Request a Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FinalCTASection;
