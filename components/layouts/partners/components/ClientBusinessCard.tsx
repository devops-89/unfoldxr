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
      }}
    >
      {/* Number */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 48 },
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
          sx={{
            fontSize: { xs: 14, md: 22 },
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