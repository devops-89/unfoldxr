import { din, helvetica } from "@/utils/fonts";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { industriesPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const OperationFlowSection = () => {
  const { operationFlowSection: data, finalCtaSection: ctaData } = industriesPage.automotive;
  return (
    <Box sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 6 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 32, md: 64 }, lineHeight: 1.1, textTransform: "uppercase", fontWeight: 900, maxWidth: 1200 }}>
          {data.title}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {data.phases.map((block) => (
            <Grid key={block.phase} size={{ xs: 12, md: 4 }}>
              <Card sx={{ bgcolor: COLORS.WHITE_ALPHA_03, borderRadius: 4, border: `1px solid ${COLORS.PRIMARY_GREEN_ALPHA_40}`, height: "100%", transition: "all 0.3s ease", "&:hover": { border: `1px solid ${COLORS.PRIMARY_GREEN}`, bgcolor: COLORS.WHITE_ALPHA_05 } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                    <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 24, md: 32 }, textTransform: "uppercase", color: COLORS.PRIMARY_GREEN }}>
                      {block.phase}
                    </Typography>
                    <Box sx={{ width: 44, height: 44, bgcolor: COLORS.WHITE_ALPHA_90, borderRadius: 1.5, p: 1.2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Box component="img" src={ctaData.ctaIcon} alt="" sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </Box>
                  </Box>
                  {block.items.map((item) => (
                    <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.8 }}>
                      <Typography sx={{ color: COLORS.PRIMARY_GREEN, fontSize: 18, fontWeight: 700, lineHeight: 1.5 }}>✓</Typography>
                      <Typography sx={{ fontFamily: helvetica.style.fontFamily, color: COLORS.TEXT_GREY, fontSize: { xs: 16, md: 19 }, lineHeight: 1.5 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OperationFlowSection;
