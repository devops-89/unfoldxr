import { Box, Button, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const EvolvesCtaSection = () => {
  const { evolvesCtaSection: data } = meetAvaPage;

  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, py: { xs: 8, md: 15 } }}>
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: { xs: 4, md: "24px" },
            py: { xs: 5, md: 10 },
            px: { xs: 2, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: `0px 20px 40px ${COLORS.BLACK_ALPHA_10}`,
          }}
        >
          {/* Neon Purple Decoration */}
          <Box
            sx={{
              position: "absolute",
              left: -40,
              top: -40,
              width: 250,
              height: 250,
              background: `radial-gradient(circle, ${COLORS.PURPLE_GLOW} 0%, rgba(160,32,240,0) 70%)`,
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 28, md: 52, lg: 64 },
                lineHeight: "normal",
                letterSpacing: "-0.051px",
                color: COLORS.BLACK,
                textAlign: "center",
                textTransform: "uppercase",
                maxWidth: { xs: 280, sm: 500, md: 1100 },
                mx: "auto",
              }}
            >
              {data.heading}
            </Typography>

            <Button
              sx={{
                mt: 6,
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 4, md: 6 },
                py: 2,
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 14, md: 16 },
                textTransform: "uppercase",
                "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
              }}
            >
              {data.cta}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EvolvesCtaSection;
