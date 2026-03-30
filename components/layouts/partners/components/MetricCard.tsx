import { Box, Typography } from "@mui/material";
import { PARTNERS_METRICS_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";

const MetricCard = ({ title, description }: PARTNERS_METRICS_CARD_PROPS) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: 22, md: 28 },
          fontWeight: 800,
          color: COLORS.PRIMARY_GREEN,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 14, md: 16 },
          color: "#555",
          mt: 1,
          lineHeight: "24px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default MetricCard;