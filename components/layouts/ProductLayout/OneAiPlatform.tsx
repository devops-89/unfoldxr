import { Box, Typography } from "@mui/material";
import GarageRoundedIcon from "@mui/icons-material/GarageRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import DirectionsBoatFilledRoundedIcon from "@mui/icons-material/DirectionsBoatFilledRounded";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const industries = [
  {
    label: "Automotive",
    icon: <GarageRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Oil & Gas",
    icon: <LocalGasStationRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Healthcare",
    icon: <LocalHospitalRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Aviation (MRO)",
    icon: <FlightRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Marine",
    icon: <DirectionsBoatFilledRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Construction",
    icon: <ConstructionRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Hospitality",
    icon: <HotelRoundedIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: "Insurance",
    icon: <SecurityRoundedIcon sx={{ fontSize: 18 }} />,
  },
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
            px: { xs: 3, md:6 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: 28, md: 32, lg: 36 },
              lineHeight: "52px",
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
              fontSize: { xs: 16, md: 18, lg: 18 },
              lineHeight: "30px",
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
              mt: { xs: 5, md: 6 },
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
                    fontSize: { xs: 10, md: 16 },
                    lineHeight: "27px",
                    color: COLORS.BLACK,
                    letterSpacing: "0.52px",
                    whiteSpace: "nowrap", 
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
