import { Box, Typography } from "@mui/material";
import { PARTNERS_METRICS_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";

const MetricCard = ({ title, description }: PARTNERS_METRICS_CARD_PROPS) => {
  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 44 },
          fontWeight: 900,
          color: COLORS.PRIMARY_GREEN,
          lineHeight: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 15, md: 17 },
          color: COLORS.BLACK,
          mt: 2,
          lineHeight: "24px",
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