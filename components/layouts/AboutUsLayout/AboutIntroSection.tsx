import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
const AboutIntroSection = () => (
  <Box
    sx={{ bgcolor: COLORS.BLACK, pt: { xs: 8, md: 20 }, pb: { xs: 8, md: 25 } }}
  >
    <Container maxWidth={false} sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}>
      <Card
        sx={{
          borderRadius: { xs: 3, md: "40px" },
          boxShadow: "none",
          bgcolor: COLORS.WHITE,
          pb: { xs: 6, md: 6, lg: 8 }
        }}
      >
        <CardContent sx={{ px: { xs: 4, md: 10 }, py: { xs: 4, md: 10, lg: 15 } }}>
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
              <Stack spacing={4}>
                {aboutPage.introSection.paragraphs.map((text, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: { xs: 18, md: 20 },
                      lineHeight: 1.6,
                      fontWeight: 400,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      textAlign: "left",
                    }}
                  >
                    {text}
                  </Typography>
                ))}
                <Typography
                  sx={{
                    fontSize: { xs: 24, md: 28 },
                    lineHeight: 1.4,
                    fontWeight: 700,
                    fontFamily: helvetica.style.fontFamily,
                    color: COLORS.BLACK,
                    textAlign: "left",
                    mt: { xs: 2, md: 2 },
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
