import { Box, Typography } from "@mui/material";
import { PARTNERS_METRICS_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";

const MetricCard = ({ title, description }: PARTNERS_METRICS_CARD_PROPS) => {
  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 45},
          fontWeight: 900,
          color: COLORS.PRIMARY_GREEN,
          lineHeight: "52px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 15, md: 18 },
          color: COLORS.BLACK,
          mt: 2,
          lineHeight: "30px",
          fontWeight: 500,
          maxWidth: "280px",
          mx: { xs: "auto", md: 0 },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default MetricCard;