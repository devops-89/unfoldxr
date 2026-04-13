import { Box, Grid, Typography, Button } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const MeetAva = () => {
  const data = homePage.productPage.meetAva;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 2 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: 28, md: 48, lg: 36 },
                  lineHeight: { xs: "35px", md: "52px" },
                  maxWidth: "100%",
                  whiteSpace: "pre-line",
                }}
              >
                {data.title}
              </Typography>
            <Typography
              sx={{
                mt: 4,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 18 },
                lineHeight: { xs: "28px", md: "30px" },
                color: COLORS.TEXT_GRAY,
                maxWidth: 720,
                letterSpacing: "0.52px",
              }}
            >
              {data.description.replace("The perfect work buddy.", "")}
              <Box component="span" sx={{ fontWeight: "bold", color: COLORS.WHITE }}>
                The perfect work buddy.
              </Box>
            </Typography>
            <Box sx={{ mt: 6 }}>
              <Button
                href={data.ctaLink}
                sx={{
                  bgcolor: COLORS.PRIMARY_GREEN,
                  color: COLORS.BLACK,
                  borderRadius: 99,
                  px: { xs: 4, md: 5 },
                  py: 1.5,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: COLORS.PRIMARY_HOVER, boxShadow: "none" },
                }}
              >
                {data.cta}
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              position: "relative",
              minHeight: { md: 400 },
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              component="img"
              src={data.img}
              alt="AVA visual"
              sx={{
                width: { xs: "100%", md: "750px", lg: 700 },
                maxWidth: "none",
                display: "block",
                position: { xs: "relative", md: "absolute", lg: "relative" },
                // top: { xs: "auto", md: "0%" },
                // right: { xs: "auto", md: "-200px", lg: "-250px" },
                mx: { xs: "auto", md: 0 },
                // transform: {
                //   xs: "translate(10%, -10%)",
                //   md: "translateY(-50%)",
                //   lg: "translateY(-50%)",
                // },
                zIndex: 0,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MeetAva;
