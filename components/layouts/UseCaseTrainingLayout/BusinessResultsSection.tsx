"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import { helvetica, inter, din } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

interface Props {
  data: UseCaseData["businessResults"];
}
const BusinessResultsSection = ({ data }: Props) => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          component={motion.div}
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 36 },
            lineHeight: { xs: "35px", md: "42px" },
            mb: { xs: 6, md: 6 },
            maxWidth: 900,
          }}
        >
          Business Results You Can Measure
        </Typography>

        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 4, md: 3 },
            gridAutoRows: "1fr",
          }}
        >
          {data.items.map((item, index) => (
              <Box
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 34, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                key={index}
                sx={{
                  bgcolor: COLORS.CHARCOAL,
                  color: COLORS.WHITE,
                  borderRadius: "28px",
                  p: { xs: 2.5, md: 3.5 },
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 22px 45px rgba(0,0,0,0.22)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 72%)",
                    transform: "translateX(-120%)",
                    transition: "transform 0.65s ease",
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
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 800,
                    fontSize: { xs: 20, md: 18 },
                    textTransform: "uppercase",
                    lineHeight: { xs: "28px", md: "24px" },
                    letterSpacing: "0.52px",
                    color: COLORS.PRIMARY_GREEN,
                    mb: 2.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: { xs: "26px", md: "24px" },
                    color: COLORS.WHITE_ALPHA_80,
                    letterSpacing: "0.52px",
                    mb: 2
                  }}
                >
                  {item.description}
                </Typography>

              </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessResultsSection;
