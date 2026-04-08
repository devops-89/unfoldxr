import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const HeroSection = () => {
  const { heroSection: data } = meetAvaPage;
  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        minHeight: { md: "95vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 14, md: 12 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 12, md: 14 },
            color: COLORS.WHITE,
            textAlign: "right",
            mb: 2,
            px: 2,
          }}
        >
          {/* *note - it was never animated, but we'll get this into motion by creative team */}
        </Typography>
        <Box
          sx={{
            position: "relative",
            bgcolor: COLORS.CARD_BG_DARK,
            borderRadius: { xs: 4, md: "40px" },
            overflow: "hidden",
            minHeight: { xs: 520, md: 680 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                p: { xs: 4, md: 8, lg: 8 },

                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 18, md: 20, lg: 24 },
                  fontWeight: 700,
                  color: COLORS.WHITE,
                  maxWidth: "100%",
                  lineHeight: 1.3,
                  mb: 4,
                }}
              >
                {data.title.split("The Agentic")[0]}
                <br />
                The Agentic{data.title.split("The Agentic")[1]}
              </Typography>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 56, lg: 54 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: COLORS.WHITE,
                  lineHeight: 1.1,
                  mb: 4,
                }}
              >
                {data.heading}
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  color: COLORS.WHITE,
                  lineHeight: 1.5,
                  maxWidth: "90%",
                }}
              >
                {data.subHeading}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: { xs: "center", md: "flex-end" },
                minHeight: { xs: 300, md: "100%" },
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={data.image}
                alt="Meet AVA"
                sx={{
                  width: { xs: "100%", md: "auto" },
                  height: { xs: "auto", md: "100%" },
                  objectFit: "contain",
                  display: "block",
                  position: { md: "absolute" },
                  top: { md: "50%" },
                  right: { md: "-15%" },
                  transform: { md: "translateY(-50%)" },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
