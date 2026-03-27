import { Box, Container, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContainedButton from "@/components/widgets/ContainedButton";
import { din, inter } from "@/utils/fonts";

const FromAssist = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid rgba(182,255,46,0.15)",
            borderRadius: "24px",
            py: { xs: 6, md: 10 },
            px: { xs: 2.5, md: 5 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 128,
              height: 128,
              background:
                "radial-gradient(circle at top left, rgba(160,32,240,1) 0%, rgba(0,0,0,0) 70%)",
              opacity: 0.25,
            }}
          />
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: { xs: 31, md: 62 },
              lineHeight: { xs: "41px", md: "70px" },
              maxWidth: 1320,
              mx: "auto",
            }}
          >
            From assistance to intelligence. From field support to enterprise
            control.
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: 18, md: 32 },
              lineHeight: { xs: "32px", md: "44px" },
            }}
          >
            Book a demo to see how UnfoldXR fits your operational stage.
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "center",
              gap: 3,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ContainedButton sx={{ px: 4 }}>
              Talk to the product specialist <ArrowForwardRoundedIcon sx={{ ml: 1 }} />
            </ContainedButton>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                textDecoration: "underline",
                textUnderlineOffset: "6px",
                textDecorationColor: "#a020f0",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Book a Demo
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FromAssist;
