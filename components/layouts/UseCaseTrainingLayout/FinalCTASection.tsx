import { Box, Button, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";

interface Props {
  data: UseCaseData["finalCTA"];
}

const FinalCTASection = ({ data }: Props) => {
  return (
    <Box sx={{ backgroundColor: "#000", py: { xs: 8, md: 15 } }}>
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
              width: 250,
              height: 250,
              background: "radial-gradient(circle, rgba(160,32,240,0.15) 0%, rgba(160,32,240,0) 70%)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 24, md: 44, lg: 52 },
                lineHeight: 1.1,
                color: "#000",
                maxWidth: 900,
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
                color: "rgba(0,0,0,0.6)",
                fontWeight: 500,
                maxWidth: 700,
              }}
            >
              {data.subtitle}
            </Typography>

            <Button
              sx={{
                mt: 6,
                bgcolor: "#ccf919",
                color: "#000",
                borderRadius: 99,
                px: { xs: 4, md: 6 },
                py: 2,
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 14, md: 16 },
                textTransform: "uppercase",
                "&:hover": { bgcolor: "#b6ec1a" },
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
