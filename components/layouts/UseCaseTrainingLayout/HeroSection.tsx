import { Box, Button, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["hero"];
}

const HeroSection = ({ data }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        color: COLORS.WHITE,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={data.image}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box sx={{ position: "absolute", inset: 0, bgcolor: COLORS.OVERLAY_06 }} />
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 1,
          pt: { xs: 12, md: 14 },
          pl: { xs: 0, md: 4 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 56, lg: 60 },
            lineHeight: 1.1,
            maxWidth: 800,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontFamily: din.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: 22, md: 32 },
          }}
        >
          {data.subtitle}
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 22, lg: 24 },
            lineHeight: { xs: "28px", md: "36px", lg: "40px" },
            maxWidth: 800,
          }}
        >
          {data.description}
        </Typography>
        <Box sx={{ mt: 5, display: "flex", gap: 2.5, flexWrap: "wrap" }}>
          <Button
            sx={{
              bgcolor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              borderRadius: 99,
              px: { xs: 3, md: 4.5 },
              py: 1.6,
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 15, md: 18 },
              textTransform: "none",
              "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
            }}
          >
            Watch in action
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: COLORS.PRIMARY_GREEN,
              color: COLORS.WHITE,
              borderRadius: 99,
              px: { xs: 3, md: 4.5 },
              py: 1.6,
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 15, md: 18 },
              textTransform: "none",
              "&:hover": {
                borderColor: COLORS.PRIMARY_HOVER,
                bgcolor: COLORS.PRIMARY_LIGHT,
              },
            }}
          >
            Request a Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
