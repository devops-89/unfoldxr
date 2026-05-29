import { Box, Typography } from "@mui/material";
import { PARTNERS_CLIENT_BUSINESS_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";

const ClientBusinessCard: React.FC<PARTNERS_CLIENT_BUSINESS_CARD_PROPS> = ({
  id,
  title,
  description,
}) => {
  const formattedNumber = id.toString().padStart(2, "0");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: "center",
        textAlign: { xs: "center", md: "left" },
        p: { xs: 2, md: 3 },
        borderRadius: "20px",
        transition: "all 0.3s ease",
        border: "1px solid rgba(255, 255, 255, 0)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 22px 45px rgba(0,0,0,0.22)",
          borderColor: "rgba(182, 236, 26, 0.3)",
          bgcolor: "rgba(255,255,255,0.03)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 72%)",
          transform: "translateX(-120%)",
          transition: "transform 0.65s ease",
          zIndex: 0,
        },
        "&:hover::after": {
          transform: "translateX(120%)",
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      {/* Number */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36 },
          fontWeight: 900,
          color: COLORS.PRIMARY_HOVER,
          minWidth: { xs: "auto", md: "70px" },
          lineHeight: "52px",
        }}
      >
        {formattedNumber}
      </Typography>

      {/* Content */}
      <Box>
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 14, md: 18 },
            lineHeight: "30px",
            color: "#fff",
          }}
        >
          <Box
            component="span"
            sx={{ fontWeight: 800, textTransform: "uppercase" }}
          >
            {title}
          </Box>
          <Box
            component="span"
            sx={{ fontWeight: 400, mx: 1, display: { xs: "none", md: "inline" } }}
          >
            -
          </Box>
          <Box
            component="div"
            sx={{
              fontWeight: 400,
              opacity: 0.9,
              display: { xs: "block", md: "inline" },
              mt: { xs: 1, md: 0 },
            }}
          >
            {description}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default ClientBusinessCard;