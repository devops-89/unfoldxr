import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { din } from "@/utils/fonts";

const FinalCtaSection = () => (
  <Box sx={{ bgcolor: "#fff", pb: { xs: 8, md: 12 } }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
      <Card sx={{ borderRadius: 3, boxShadow: "none", border: "1px solid rgba(182,255,46,0.15)" }}>
        <CardContent sx={{ p: { xs: 4, md: 8 }, textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: 32, md: 64 }, fontWeight: 900, textTransform: "uppercase", fontFamily: din.style.fontFamily }}>
            UnfoldXR - Augmenting the Future of Work.
          </Typography>
          <Button variant="contained" sx={{ mt: 4, px: 4, py: 1.2, borderRadius: "999px", bgcolor: "#B6EC1A", color: "#000", fontWeight: 700, fontFamily: din.style.fontFamily, "&:hover": { bgcolor: "#a7db18" } }}>
            Talk to Us
          </Button>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

export default FinalCtaSection;
