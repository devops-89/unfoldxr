import { Box, Typography } from "@mui/material";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const industries = [
  {
    label: "Automotive",
    icon: <DirectionsCarFilledRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Healthcare",
    icon: <LocalHospitalRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Construction",
    icon: <ConstructionRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Logistics",
    icon: <LocalGasStationRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Oil & Gas",
    icon: <LocalGasStationRoundedIcon sx={{ fontSize: 18 }} />,
  },
  { label: "Aviation", icon: <FlightRoundedIcon sx={{ fontSize: 18 }} /> },
  {
    label: "Field Service Support",
    icon: <SupportAgentRoundedIcon sx={{ fontSize: 18 }} />,
  },
  { label: "Insurance", icon: <SecurityRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: "Hospitality", icon: <HotelRoundedIcon sx={{ fontSize: 18 }} /> },
];

const OneAiPlatform = () => {
  const data = homePage.productPage.oneAiPlatform;

  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Box
        sx={{ width: { xs: "90%", md: "80%" }, mx: "auto", px: { xs: 0, md: 0 } }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: { xs: 3, md: "24px" },
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 10 },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: 28, md: 48, lg: 54 },
              lineHeight: 1.1,
              color: COLORS.BLACK,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18, lg: 22 },
              lineHeight: 1.5,
              color: COLORS.BLACK,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {data.description}
          </Typography>

          {/* Centered Flex Container for Industry Pills */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1.5, md: 2.5 },
              mt: { xs: 5, md: 7 },
              px: { xs: 0, lg: 8 },
            }}
          >
            {industries.map((item) => (
              <Box
                key={item.label}
                sx={{
                  border: `1px solid ${COLORS.BORDER_LIGHT}`,
                  borderRadius: "99px",
                  p: "6px",
                  pr: { xs: 3, md: 4 },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, md: 2 },
                  minWidth: "fit-content",
                  maxWidth: "100%",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 32, md: 36 },
                    height: { xs: 32, md: 36 },
                    bgcolor: COLORS.BLACK,
                    borderRadius: "50%",
                    color: COLORS.WHITE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: { xs: 10, md: 15 },
                    lineHeight: 1.1,
                    color: COLORS.BLACK,
                    letterSpacing: "0.02em",
                    whiteSpace: "normal",
                    maxWidth: { xs: 80, md: 140 },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OneAiPlatform;
