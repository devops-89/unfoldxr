import { Box, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const IndustrySection = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ textAlign: "center", fontFamily: din.style.fontFamily, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: 30, md: 64 } }}>
          One AI Platform, Any Industry
        </Typography>
        <Typography sx={{ textAlign: "center", mt: 1.5, fontFamily: helvetica.style.fontFamily, textTransform: "uppercase", fontSize: { xs: 14, md: 24 } }}>
          UnfoldXR enhances skilled operations, on-ground executions & real-time decision-making
        </Typography>
      </Container>
    </Box>
  );
};

export default IndustrySection;
