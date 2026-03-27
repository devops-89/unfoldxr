import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const NewsSection = () => (
  <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
      <Card sx={{ borderRadius: 3, boxShadow: "none", border: "1px solid rgba(182,255,46,0.15)" }}>
        <CardContent sx={{ p: { xs: 4, md: 8 }, textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: 34, md: 64 }, fontWeight: 900, textTransform: "uppercase", fontFamily: din.style.fontFamily }}>
            In News
          </Typography>
          <Typography sx={{ mt: 2, fontSize: { xs: 18, md: 28 }, fontFamily: helvetica.style.fontFamily }}>
            For press inquiries, media coverage, speaking engagements, and industry insights, please connect with us.
          </Typography>
          <Button variant="contained" sx={{ mt: 4, px: 4, py: 1.2, borderRadius: "999px", bgcolor: "#B6EC1A", color: "#000", fontWeight: 700, fontFamily: din.style.fontFamily, "&:hover": { bgcolor: "#a7db18" } }}>
            Contact Us
          </Button>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

export default NewsSection;
