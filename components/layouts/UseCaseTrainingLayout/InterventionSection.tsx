import { Box, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";

interface Props {
  data: UseCaseData["intervention"];
}
const InterventionSection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#000", pt: { xs: 8, md: 20 }, pb: 0 }}>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 } }}>
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* Left Side: Title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1,
                color: "#000",
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Descriptions */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.5,
                  color: "#000",
                }}
              >
                {data.description1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.5,
                  color: "#000",
                }}
              >
                {data.description2}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Third Description paragraph */}
        <Typography
          sx={{
            mt: 8,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18, lg: 20 },
            lineHeight: 1.5,
            color: "#000",
            maxWidth: "100%",
          }}
        >
          {data.description3}
        </Typography>
      </Box>

      {/* Tablet Area with Overlap Transition */}
      <Box sx={{ position: "relative", mt: { xs: 10, md: 18 } }}>
        {/* Background Split - Top White, Bottom Black */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: "#fff",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: "#000",
          }}
        />

        {/* The Tablet Image Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", md: "80%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={data.image}
            alt="Tablet Intervention"
            sx={{
              width: "100%",
              maxWidth: 1200,
              height: "auto",
              display: "block",
              borderRadius: { xs: 4, md: "24px" },
              filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.3))",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection;
