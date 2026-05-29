"use client";

import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const MeetAvaIntroSection = () => {
  const { introSection: data } = meetAvaPage;

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      sx={{
        bgcolor: "#f7f7f7",
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 48, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                lineHeight: { xs: "35px", md: "52px" },
                mb: 2,
              }}
            >
              {data.heading}
            </Typography>
            {data.paragraphs.map((para, index) => (
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 15, md: 18 },
                  color: COLORS.BLACK,
                  lineHeight: { xs: "28px", md: "30px" },
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                {para}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, scale: 0.9, x: -30 },
                visible: { opacity: 1, scale: 1, x: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              sx={{
                width: "100%",
                borderRadius: { xs: 3, md: "45px" },
                overflow: "hidden",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={data.image}
                alt="Meet AVA"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MeetAvaIntroSection;
