import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
const AboutIntroSection = () => (
  <Box sx={{ bgcolor: COLORS.BLACK, pt: { xs: 6, md: 15 }, pb: 0 }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 }  }}>
      <Card sx={{ borderRadius: { xs: 3, md: "45px" }, boxShadow: "none", bgcolor: COLORS.WHITE }}>
        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: 34, md: 64 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  fontFamily: din.style.fontFamily,
                  color: COLORS.BLACK,
                }}
              >
                {aboutPage.introSection.heading}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                {aboutPage.introSection.paragraphs.map((text, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: { xs: 18, md: 22 },
                      lineHeight: { xs: 1.55, md: "43px" },
                      fontWeight: 400,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      textAlign: "justify",
                    }}
                  >
                    {text}
                  </Typography>
                ))}
                <Typography
                  sx={{
                    fontSize: { xs: 24, md: 30 },
                    lineHeight: { xs: 1.2, md: "48px" },
                    fontWeight: 700,
                    fontFamily: helvetica.style.fontFamily,
                    color: COLORS.BLACK,
                    textAlign: "justify",
                    mt: { xs: 2, md: 4 }, 
                  }}
                >
                  {aboutPage.introSection.highlight}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  </Box>
);
export default AboutIntroSection;
