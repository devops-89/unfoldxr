"use client";

import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { motion } from "framer-motion";

const PlaceholderSection = () => {
  const { placeholderSection: data } = meetAvaPage;

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, pb: { xs: 8, md: 10 } }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }} component={motion.div} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 32, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: "35px", md: "52px" },
                mb: 2,
              }}
            >
              {data.heading}
            </Typography>
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18, lg: 18 },
                lineHeight: "30px",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "pre-line",
              }}
            >
              {data.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, scale: 0.85, x: 50, rotate: 0 },
                visible: { opacity: 1, scale: 1, x: 0, rotate: 9 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                maxWidth: "100%",
                width: { xs: 280, md: 370 },
                mx: "auto",
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={data.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    filter: "drop-shadow(0px 15px 30px rgba(162, 211, 37, 0.15))",
                  }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlaceholderSection;
