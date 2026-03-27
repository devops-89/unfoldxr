import { Box, Container, Grid, Typography } from "@mui/material";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import { din, helvetica } from "@/utils/fonts";

const industries = [
  { label: "Automotive", icon: <DirectionsCarFilledRoundedIcon /> },
  { label: "Healthcare", icon: <LocalHospitalRoundedIcon /> },
  { label: "Construction", icon: <ConstructionRoundedIcon /> },
  { label: "Logistics", icon: <LocalGasStationRoundedIcon /> },
  { label: "Oil & Gas", icon: <LocalGasStationRoundedIcon /> },
  { label: "Aviation", icon: <FlightRoundedIcon /> },
  { label: "Field Service Support", icon: <SupportAgentRoundedIcon /> },
  { label: "Insurance", icon: <SecurityRoundedIcon /> },
  { label: "Hospitality", icon: <HotelRoundedIcon /> },
];

const OneAiPlatform = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: { xs: 2, md: "15px" },
            px: { xs: 2.5, md: 7 },
            py: { xs: 5, md: 9 },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: 34, md: 64 },
              lineHeight: { xs: "42px", md: "70px" },
            }}
          >
            One AI platform, any industry
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2.5,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 17, md: 28 },
              lineHeight: { xs: "30px", md: "46px" },
            }}
          >
            UnfoldXR enhances skilled operations, on-ground executions and real-time
            decision making.
          </Typography>

          <Grid container spacing={2} sx={{ mt: { xs: 3, md: 5 } }}>
            {industries.map((item) => (
              <Grid key={item.label} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    border: "1px solid #d0d0d0",
                    borderRadius: "39px",
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    minHeight: 78,
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: "#000",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: { xs: 15, md: 22 },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OneAiPlatform;
