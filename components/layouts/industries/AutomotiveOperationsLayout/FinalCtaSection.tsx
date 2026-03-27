import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { AUTOMOTIVE_IMAGES } from "./constants";

const FinalCtaSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Card sx={{ borderRadius: 3, boxShadow: "none", border: "1px solid rgba(182,255,46,0.15)" }}>
          <CardContent sx={{ p: { xs: 4, md: 8 }, textAlign: "center" }}>
            <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 30, md: 64 }, fontWeight: 900, color: "#000", mb: 2 }}>
              Bring intelligence to your manufacturing floor
            </Typography>
            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 30 }, color: "#000", lineHeight: 1.4 }}>
              See how UnfoldXR improves execution, reduces downtime, and scales expertise across your operations.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 4, borderRadius: "999px", bgcolor: "#B6EC1A", color: "#000", px: 4, py: 1.1, fontFamily: din.style.fontFamily, "&:hover": { bgcolor: "#a8da18" } }}
              endIcon={<Box component="img" src={AUTOMOTIVE_IMAGES.ctaIcon} alt="" sx={{ width: 18, height: 18 }} />}
            >
              Talk to Us
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default FinalCtaSection;
