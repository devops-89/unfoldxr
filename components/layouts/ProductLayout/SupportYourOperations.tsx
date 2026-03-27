import { Box, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import ContainedButton from "@/components/widgets/ContainedButton";

const HERO_BG =
  "https://www.figma.com/api/mcp/asset/fe5f9433-2906-4281-9cfc-36a8c1d82834";
const OPERATIONS_BG =
  "https://www.figma.com/api/mcp/asset/07bf33a2-7525-496a-ad65-2f737e14d633";

const SupportYourOperations = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", pt: { xs: 14, md: 20 }, pb: { xs: 8, md: 14 } }}>
      <Box
        sx={{
          minHeight: { xs: 560, md: 860 },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={HERO_BG}
          alt="Product Hero"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.52,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              maxWidth: 1000,
              fontSize: { xs: 34, md: 64 },
            }}
          >
            The only AI-powered augmented reality platform you need
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontFamily: din.style.fontFamily,
              textTransform: "lowercase",
              fontSize: { xs: 22, md: 36 },
              lineHeight: 1.2,
              maxWidth: 1280,
            }}
          >
            To train, guide, support & scale frontline workforce, remote teams and
            skilled technicians
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 16, md: 28 },
              lineHeight: { xs: "28px", md: "44px" },
              maxWidth: 780,
            }}
          >
            From real-time assistance to enterprise-wide operational intelligence,
            UnfoldXR adapts to your stage of growth.
          </Typography>
          <ContainedButton sx={{ mt: 4, px: 5 }}>Request a Demo</ContainedButton>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 7, md: 12 } }}>
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1.15,
            fontSize: { xs: 30, md: 64 },
            maxWidth: 1169,
          }}
        >
          UnfoldXR supports your operations across the complete lifecycle of work
        </Typography>
        <Typography
          sx={{
            mt: 4,
            fontFamily: din.style.fontFamily,
            fontWeight: 700,
            textTransform: "none",
            fontSize: { xs: 24, md: 36 },
            lineHeight: { xs: "34px", md: "44px" },
          }}
        >
          Before the task begins.
          <br />
          During execution.
          <br />
          After completion.
        </Typography>

        <Box
          sx={{
            mt: { xs: 4, md: 7 },
            borderRadius: { xs: 3, md: "39px" },
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Box
            component="img"
            src={OPERATIONS_BG}
            alt="Operations lifecycle"
            sx={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SupportYourOperations;
