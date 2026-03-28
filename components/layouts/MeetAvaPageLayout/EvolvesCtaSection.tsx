import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import ContainedButton from "@/components/widgets/ContainedButton";

const EvolvesCtaSection = () => {
  const { evolvesCtaSection: data } = meetAvaPage;

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1440, px: { xs: 2.5, md: 5 } }}>
        <Card
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid rgba(182, 255, 46, 0.15)",
            boxShadow: "none",
            position: "relative",
            bgcolor: COLORS.WHITE
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
                color: COLORS.BLACK,
                lineHeight: 1.15,
                maxWidth: 1100,
                mx: "auto",
              }}
            >
              {data.heading}
            </Typography>
            <ContainedButton
              sx={{
                mt: 4,
                px: { xs: 4, md: 6 },
                py: 1.5,
                fontSize: { xs: 18, md: 23 },
                fontWeight: 700
              }}
            >
              {data.cta} &rarr;
            </ContainedButton>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default EvolvesCtaSection;
