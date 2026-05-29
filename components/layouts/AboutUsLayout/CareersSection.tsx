"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import ContainedButton from "@/components/widgets/ContainedButton";
import { useDemoModal } from "@/components/context/DemoModalContext";
import { motion } from "framer-motion";

const CareersSection = () => {
  const { careersSection: data } = aboutPage;
  const { openModal } = useDemoModal();

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
      sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 10 } }}
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
            fontSize: { xs: 28, md: 36 },
            fontWeight: 900,
            textTransform: "uppercase",
            mb: 2,
            fontFamily: din.style.fontFamily,
            lineHeight: "52px",
          }}
        >
          {data.title}
        </Typography>

        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontSize: { xs: 18, md: 18 },
            lineHeight: "28px",
            maxWidth: 1200,
            mb: 4,
            fontFamily: helvetica.style.fontFamily,
            whiteSpace: "pre-line",
          }}
        >
          {data.description}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {data.values.map((text, i) => (
            <Grid 
              key={i} 
              size={{ xs: 12, md: 5.5 }} 
              sx={{ display: "flex" }}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <Box
                sx={{
                  bgcolor: COLORS.CARD_BG_DARK,
                  color: COLORS.WHITE,
                  borderRadius: "20px",
                  p: { xs: 2, md: 2.5 },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, md: 3 },
                  width: "100%",
                  minHeight: { md: 120 },
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
                    fontSize: { xs: 28, md: 36 },
                    color: "rgba(182, 236, 26, 0.4)",
                    fontWeight: 900,
                    fontFamily: din.style.fontFamily,
                    lineHeight: "52px",
                    minWidth: { xs: 40, md: 60 },
                  }}
                >
                  {`0${i + 1}`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontFamily: din.style.fontFamily,
                    lineHeight: "30px",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            mt: 4,
            mb: 4,
            fontSize: { xs: 18, md: 18 },
            fontFamily: helvetica.style.fontFamily,
            maxWidth: 1000,
            lineHeight: "30px",
          }}
        >
          {data.bottomText}
        </Typography>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6 }}
        >
          <ContainedButton
            sx={{
              px: { xs: 2.5, md: 4 },
              py: 1.2,
              fontSize: { xs: 14, md: 16 },
              fontWeight: 500,
              lineHeight: "30px",
            }}
            onClick={() => openModal("career")}
          >
            Write to us to explore open roles
          </ContainedButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CareersSection;
