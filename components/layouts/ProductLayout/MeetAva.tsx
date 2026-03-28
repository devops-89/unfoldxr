import { Box, Grid, Typography, Button } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const AVA_IMAGE =
  "https://www.figma.com/api/mcp/asset/aa6f5ea7-949f-4458-83ae-173ca2e9da82";

const MeetAva = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        pt: { xs: 8, md: 16 },
        pb: { xs: 12, md: 24 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1.15,
                maxWidth: 800,
              }}
            >
              Meet AVA
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              Your ‘AI Virtual Assistant’
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              For everything work.
            </Typography>
            <Typography
              sx={{
                mt: 4,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 20 },
                lineHeight: 1.5,
                color: "#e0e0e0",
                maxWidth: 720,
                letterSpacing: "0.02em",
              }}
            >
              AVA supports your workforce across all three versions of the
              platform. It works alongside your teams as an intelligent
              assistant, a sharp analyser, and a reliable task partner. The
              perfect work buddy.
            </Typography>
            <Box sx={{ mt: 6 }}>
              <Button
                sx={{
                  bgcolor: "#ccf919",
                  color: "#000",
                  borderRadius: 99,
                  px: { xs: 4, md: 5 },
                  py: 1.5,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#b6ec1a", boxShadow: "none" },
                }}
              >
                Visit AVA
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ position: "relative", minHeight: { md: 400 } }}
          >
            <Box
              component="img"
              src={AVA_IMAGE}
              alt="AVA visual"
              sx={{
                width: { xs: "100%", md: "600px", lg: "560px" },
                maxWidth: "none",
                display: "block",
                position: { xs: "relative", md: "absolute" },
                top: { xs: "auto", md: "50%" },
                right: { xs: "auto", md: "-80px", lg: "-360px" },
                transform: {
                  xs: "none",
                  md: "translateY(-50%)",
                  lg: "translateY(-50%) rotate(-50deg)",
                },

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
