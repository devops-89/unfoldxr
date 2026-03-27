import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { MEET_AVA_IMAGES } from "./constants";

const EvolvesCtaSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Card
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid rgba(182,255,46,0.15)",
            boxShadow: "none",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 128,
              height: 128,
              opacity: 0.2,
              background: "radial-gradient(circle at top left, rgba(160,32,240,0.9) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
          <CardContent sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 }, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 64 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#000",
                lineHeight: 1.15,
                maxWidth: 1100,
                mx: "auto",
              }}
            >
              Evolves with your business needs.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                px: 3,
                py: 1.5,
                borderRadius: "999px",
                bgcolor: COLORS.PRIMARY_GREEN,
                color: "#000",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "0 0 30px rgba(182,255,46,0.4)",
                "&:hover": { bgcolor: "#a8db18" },
              }}
              endIcon={<Box component="img" src={MEET_AVA_IMAGES.ctaIcon} alt="" sx={{ width: 20, height: 20 }} />}
            >
              Request a Demo
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default EvolvesCtaSection;
