import { din, helvetica } from "@/utils/fonts";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const FinalCtaSection = () => {
  const { finalCtaSection: data } = industriesPage.automotive;
  return (
    <Box sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1440, px: { xs: 2, md: 4 } }}>
        <Card sx={{ borderRadius: 6, boxShadow: "none", border: `1px solid ${COLORS.PRIMARY_GREEN_ALPHA_20}`, bgcolor: COLORS.WHITE }}>
          <CardContent sx={{ p: { xs: 5, md: 8 }, textAlign: "center" }}>
            <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 32, md: 64 }, fontWeight: 900, color: COLORS.BLACK, mb: 3, textTransform: "uppercase", lineHeight: 1.1 }}>
              {data.heading}
            </Typography>
            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 18, md: 28 }, color: COLORS.BLACK, lineHeight: 1.5, maxWidth: 900, mx: "auto" }}>
              {data.description}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 6, borderRadius: "999px", bgcolor: COLORS.PRIMARY_GREEN, color: COLORS.BLACK, px: 6, py: 2, fontFamily: din.style.fontFamily, fontSize: 20, fontWeight: 700, textTransform: "uppercase", "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 } }}
              endIcon={<Box component="img" src={data.ctaIcon} alt="" sx={{ width: 22, height: 22 }} />}
            >
              {data.ctaText}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default FinalCtaSection;
