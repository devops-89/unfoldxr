import { Box, Typography } from "@mui/material";
import { PARTNERS_METRICS_CARD_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedMetric = ({ valueStr }: { valueStr: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const match = valueStr.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const number = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : valueStr;

  useEffect(() => {
    if (isInView && number !== null && ref.current) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            const displayVal = Number.isInteger(number) ? Math.round(val) : val.toFixed(1);
            ref.current.textContent = prefix + displayVal + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, number, prefix, suffix]);

  return <span ref={ref}>{number !== null ? `${prefix}0${suffix}` : valueStr}</span>;
};

const MetricCard = ({ title, description }: PARTNERS_METRICS_CARD_PROPS) => {
  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36},
          fontWeight: 900,
          color: COLORS.PRIMARY_GREEN,
          lineHeight: "52px",
        }}
      >
        <AnimatedMetric valueStr={title} />
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 15, md: 18 },
          color: COLORS.BLACK,
          mt: 2,
          lineHeight: "30px",
          fontWeight: 500,
          maxWidth: { xs: "280px", md: "320px" },
          mx: { xs: "auto", md: 0 },
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default MetricCard;