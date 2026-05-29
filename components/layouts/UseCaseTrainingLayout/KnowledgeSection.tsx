"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

interface Props {
  data: UseCaseData["knowledge"];
}

const KnowledgeSection = ({ data }: Props) => {
  const isStacked = data.layout === "stacked";

  if (isStacked) {
    return (
      <Box
        component={motion.section}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        sx={{
          bgcolor: COLORS.BLACK,
          color: COLORS.WHITE,
          py: { xs: 4, md: 6 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, transparent 0%, rgba(182,236,26,0.08) 48%, transparent 72%)",
            transform: "translateX(-100%)",
            animation: "knowledgeSweep 8s ease-in-out infinite",
          },
          "@keyframes knowledgeSweep": {
            "0%, 45%": { transform: "translateX(-100%)" },
            "70%, 100%": { transform: "translateX(100%)" },
          },
          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="flex-end">
            {/* Left Side: Title */}
            <Grid
              size={{ xs: 12, md: 7 }}
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: 26, md: 36 },
                  lineHeight: { xs: "35px", md: "42px" },
                  maxWidth: 800,
                  mb: { xs: 2, md: 2 },
                }}
              >
                {data.title}
              </Typography>
            </Grid>

            {/* Right Side: Items (Paragraphs) */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                sx={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                {data.items.map((item, index) => (
                  <Typography
                    component={motion.p}
                    variants={{
                      hidden: { opacity: 0, y: 26 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    key={index}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 17, md: 18 },
                      lineHeight: { xs: "28px", md: "28px" },
                      color: COLORS.WHITE,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
          {/* Footer Text outside grid to align with total width */}
          {data.footerText && (
            <Typography
              sx={{
                mt: { xs: 4, md: 6 },
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 17, md: 18 },
                lineHeight: { xs: "28px", md: "28px" },
                color: COLORS.WHITE,
              }}
            >
              {data.footerText}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }

  return (
      <Box
        component={motion.section}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        sx={{
          bgcolor: COLORS.BLACK,
          color: COLORS.WHITE,
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, transparent 0%, rgba(182,236,26,0.08) 48%, transparent 72%)",
            transform: "translateX(-100%)",
            animation: "knowledgeSweep 8s ease-in-out infinite",
          },
          "@keyframes knowledgeSweep": {
            "0%, 45%": { transform: "translateX(-100%)" },
            "70%, 100%": { transform: "translateX(100%)" },
          },
          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 10 }}>
          {/* Left Side: Title */}
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 26, md: 36 },
                lineHeight: { xs: "35px", md: "44px" },
                maxWidth: 600,
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Bullet Points */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {data.items.map((item, index) => (
                <Box
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  key={index}
                  sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: COLORS.WHITE,
                      mt: { xs: 1, md: 1.3 },
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: { xs: "28px", md: "28px" },
                      letterSpacing: "0.52px",
                      color: COLORS.WHITE,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        {/* Footer Text outside grid to align with total width */}
        {data.footerText && (
          <Typography
            sx={{
              mt: { xs: 6, md: 6 },
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              lineHeight: { xs: "28px", md: "28px" },
              color: COLORS.WHITE,
            }}
          >
            {data.footerText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default KnowledgeSection;
