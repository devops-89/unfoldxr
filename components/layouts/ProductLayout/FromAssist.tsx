import { Box, Typography, Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { din, helvetica } from "@/utils/fonts";

const FromAssist = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: { xs: 8, md: 12 } }}>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 1, md: 0 } }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: { xs: 4, md: "24px" },
            py: { xs: 8, md: 10 },
            px: { xs: 3, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          {/* Neon Purple Decoration */}
          <Box
            sx={{
              position: "absolute",
              left: -40,
              top: -40,
              width: 200,
              height: 200,
              background: "radial-gradient(circle, rgba(160,32,240,0.15) 0%, rgba(160,32,240,0) 70%)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 24, md: 44, lg: 48 },
                lineHeight: 1.15,
                color: "#000",
                maxWidth: 1100,
                mx: "auto",
              }}
            >
              From assistance to intelligence. From
              <Box component="br" sx={{ display: { xs: "none", lg: "block" } }} />
              field support to enterprise control.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 20, lg: 22 },
                color: "#000",
                fontWeight: 500,
              }}
            >
              Book a demo to see how UnfoldXR fits your operational stage.
            </Typography>

            <Box
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "center",
                gap: { xs: 3, md: 6 },
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                sx={{
                  bgcolor: "#ccf919",
                  color: "#000",
                  borderRadius: 99,
                  px: { xs: 4, md: 5 },
                  py: 1.8,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  "&:hover": { bgcolor: "#b6ec1a", boxShadow: "none" },
                }}
              >
                Talk to the product specialist <ArrowForwardRoundedIcon />
              </Button>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Book a Demo
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FromAssist;
