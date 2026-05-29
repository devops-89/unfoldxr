"use client";

import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

interface Props {
  data: UseCaseData["platformSummary"];
}

const PlatformSummarySection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Box
        component={motion.section}
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.22 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          bgcolor: COLORS.BG_LIGHT,
          borderRadius: { xs: "24px", md: "40px" },
          p: { xs: 3.5, md: 6 },
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, transparent 25%, rgba(182,236,26,0.12), transparent 72%)",
            transform: "translateX(-120%)",
            animation: "platformSummarySweep 7s ease-in-out infinite",
          },
          "@keyframes platformSummarySweep": {
            "0%, 45%": { transform: "translateX(-120%)" },
            "70%, 100%": { transform: "translateX(120%)" },
          },
          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 10 }} alignItems="flex-start">
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 36 },
                lineHeight: { xs: "35px", md: "42px" },
                color: COLORS.BLACK,
              }}
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                lineHeight: { xs: "28px", md: "30px" },
                letterSpacing: "0.52px",
                color: COLORS.OVERLAY_07,
                mb: 2,
              }}
            >
              {data.description1}
            </Typography>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                lineHeight: { xs: "28px", md: 1.6 },
                color: COLORS.OVERLAY_07,
              }}
            >
              {data.description2}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlatformSummarySection;
