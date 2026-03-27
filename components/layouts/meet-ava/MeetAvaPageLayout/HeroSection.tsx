import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MEET_AVA_IMAGES } from "./constants";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", pt: { xs: 14, md: 18 }, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 11, md: 13 },
            color: "rgba(255,255,255,0.55)",
            textAlign: { xs: "left", md: "right" },
            mb: 1,
          }}
        >
          *Note - creative team may add motion to this hero visual later.
        </Typography>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#272829",
            borderRadius: { xs: 3, md: "40px" },
            overflow: "hidden",
            minHeight: { xs: 520, md: 620 },
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3, md: 5 }, zIndex: 1 }}>
              <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 22, md: 36 }, fontWeight: 700, color: "#fff", mb: 2 }}>
                AVA - The Agentic Intelligence Behind UnfoldXR.
              </Typography>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 64 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#fff",
                  lineHeight: 1.05,
                }}
              >
                BUILT WITH HEART.
                <br />
                POWERED BY AI
              </Typography>
              <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: { xs: 16, md: 28 }, color: "#fff", lineHeight: 1.55, mt: 3, maxWidth: 620 }}>
                AVA stands for AI Virtual Assistant. But the story behind the name runs deeper.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                position: "relative",
                minHeight: { xs: 280, md: "auto" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={MEET_AVA_IMAGES.heroRing}
                alt=""
                sx={{
                  width: { xs: "90%", md: "110%" },
                  maxWidth: 520,
                  height: "auto",
                  objectFit: "contain",
                  transform: { md: "rotate(-12deg)" },
                  mr: { md: -4 },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
