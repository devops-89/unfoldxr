import { Box, Grid, Typography, Button } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";

const MeetAva = () => {
  const data = homePage.productPage.meetAva;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10, lg: 15 },
        position: "relative",
        overflow: "hidden",
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "@keyframes fadeInUp": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "85%", lg: "83%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          <Grid
            size={{ xs: 12, md: 6.5 }}
            sx={{
              animation: "fadeInUp 1s ease-out forwards",
            }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 40, lg: 48 },
                lineHeight: { xs: "35px", md: "48px", lg: "52px" },
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
                fontSize: { xs: 16, md: 18, lg: 19 },
                lineHeight: { xs: "28px", md: "32px" },
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: 720,
                letterSpacing: "0.52px",
              }}
            >
              {data.description.replace("The perfect work buddy.", "")}
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: COLORS.WHITE }}
              >
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
                  "&:hover": {
                    bgcolor: COLORS.PRIMARY_HOVER,
                    boxShadow: "none",
                  },
                }}
              >
                {data.cta}
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              position: "relative",
              animation: "fadeInUp 1.2s ease-out forwards",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "350px", md: "500px", lg: "650px" },
              }}
            >
              <Image
                src={data.img}
                alt="AVA visual"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  animation: "float 6s ease-in-out infinite",
                  filter: "drop-shadow(0px 0px 80px rgba(160, 32, 240, 0.25))",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Decorative Background Blur */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          bgcolor: "rgba(160, 32, 240, 0.08)",
          filter: "blur(180px)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default MeetAva;
