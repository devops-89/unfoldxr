import { Box, Button, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["finalCTA"];
}

const FinalCTASection = ({ data }: Props) => {
  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, py: { xs: 8, md: 15 } }}>
      <Box
        sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 1, md: 0 } }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: { xs: 4, md: "24px" },
            py: { xs: 8, md: 10 },
            px: { xs: 3, md: 8 },
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
              background: `radial-gradient(circle, ${COLORS.PURPLE_GLOW} 0%, ${COLORS.TRANSPARENT_PURPLE} 70%)`,
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
                textTransform: "capitalize",
                maxWidth: 1000,
                mx: "auto",
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 20, lg: 22 },
                color: COLORS.OVERLAY_06,
                fontWeight: 500,
                maxWidth: 700,
              }}
            >
              {data.subtitle}
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
              Request a Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FinalCTASection;
