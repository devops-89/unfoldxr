import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";

const ABOUT_SECTION_IMAGE = "https://www.figma.com/api/mcp/asset/71295072-d7e6-4b6f-93ff-8883694276c8";

const AboutUnfoldxr = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: { xs: "24px", md: "45px" },
            px: { xs: 2.5, md: 6 },
            py: { xs: 3, md: 7 },
            mx: { xs: 0, md: 2 },
          }}
        >
          <Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 54 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: { xs: "35px", md: "92px" },
                }}
              >
                {homePage.aboutUnfoldxr.heading}
              </Typography>

              <Box
                component="img"
                src={ABOUT_SECTION_IMAGE}
                alt="Collage of workers demonstrating UnfoldXR in action"
                sx={{
                  width: "100%",
                  maxWidth: 420,
                  borderRadius: 3,
                  mt: { xs: 3, md: 4 },
                  display: { xs: "none", md: "block" },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              {homePage.aboutUnfoldxr.paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 24 },
                    fontWeight: 400,
                    lineHeight: { xs: "28px", md: "43px" },
                    mb: { xs: 2, md: 3 },
                    textAlign: "justify",
                  }}
                >
                  {paragraph}
                </Typography>
              ))}

              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 20, md: 28 },
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: { xs: "30px", md: "48px" },
                  mt: { xs: 2, md: 4 },
                }}
              >
                {homePage.aboutUnfoldxr.highlight}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
              <Box
                component="img"
                src={ABOUT_SECTION_IMAGE}
                alt="Collage of workers demonstrating UnfoldXR in action"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  mt: 1,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUnfoldxr;
