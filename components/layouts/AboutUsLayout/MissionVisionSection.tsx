"use client";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  const { missionVisionSection: data } = aboutPage;
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontSize: { xs: 24, md: 18, lg: 18 },
            fontWeight: 700,
            lineHeight: "28px",
            mb: 1.5,
            fontFamily: din.style.fontFamily,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontSize: { xs: 38, md: 36, lg: 36 },
            lineHeight: { xs: 1.1, md: "52px" },
            textTransform: "uppercase",
            color: COLORS.PRIMARY_GREEN,
            fontWeight: 900,
            maxWidth: 1488,
            fontFamily: din.style.fontFamily,
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
            mt: 1,
            maxWidth: 920,
            fontSize: { xs: 20, md: 18, lg: 18 },
            lineHeight: { xs: 1.25, md: "28px" },
            fontFamily: helvetica.style.fontFamily,
            fontWeight: 400,
          }}
        >
          {data.subHeading}
        </Typography>
        <Box
          component={motion.div}
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            mt: 4,
            bgcolor: COLORS.CARD_BG_DARK,
            borderRadius: "20px",
            p: { xs: 3, md: 3 },
            maxWidth: 1661,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, md: 18, lg: 18 },
              lineHeight: { xs: 1.45, md: "28px" },
              fontFamily: helvetica.style.fontFamily,
              color: COLORS.TEXT_GREY,
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            {data.description}
          </Typography>
        </Box>
        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontSize: { xs: 28, md: 36, lg: 36 },
            fontWeight: 700,
            lineHeight: "52px",
            mt: 6,
            mb: 2,
            fontFamily: din.style.fontFamily,
          }}
        >
          {data.brandDnaTitle}
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 3 }}
          alignItems="stretch"
          component={motion.div}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {data.brandDna.map((item, idx) => (
            <Box 
              key={idx} 
              sx={{ flex: 1 }}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <Box
                sx={{
                  height: "100%",
                  bgcolor: COLORS.CARD_BG_DARK,
                  color: COLORS.WHITE,
                  borderRadius: "20px",
                  p: { xs: 4, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  minHeight: { xs: 240, md: 240 },
                  justifyContent: "space-between",
                  gap: { xs: 4, md: 2 },
                  mb: { xs: 3, md: 0 },
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: "0 22px 45px rgba(0,0,0,0.22)",
                    borderColor: "rgba(182, 236, 26, 0.3)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.16), transparent 72%)",
                    transform: "translateX(-120%)",
                    transition: "transform 0.65s ease",
                    zIndex: 0,
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
                    fontSize: { xs: 16, md: 18 },
                    color: COLORS.TEXT_GREY,
                    lineHeight: { xs: 1.4, md: "28px" },
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    px: 2,
                    py: 0.8,
                    borderRadius: "4px",
                    width: "fit-content",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 14, md: 25 },
                      fontWeight: 900,
                      lineHeight: 1.2,
                      fontFamily: din.style.fontFamily,
                      textTransform: "uppercase",
                      color: COLORS.PRIMARY_GREEN,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default MissionVisionSection;
