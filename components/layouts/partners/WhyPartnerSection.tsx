"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import WhyPartnerCard from "./components/WhyPartnerCard";
import { partnersPage } from "@/utils/Website-Data";
import { motion } from "framer-motion";

const WhyPartnerSection = () => {
  return (
    <Box
      component={motion.section}
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
        backgroundColor: "#000",
        // minHeight: { md: "90vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
        }}
      >
        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            color: "#fff",
            fontSize: { xs: 28, md: 36 },
            fontWeight: 900,
            mb: { xs: 6, md: 4 },
            textTransform: "uppercase",
            lineHeight: "52px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {partnersPage.whyPartnerSection.heading}
        </Typography>

        <Grid 
          container 
          rowSpacing={{ xs: 6, md: 3 }} 
          columnSpacing={3}
          component={motion.div}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {partnersPage.whyPartnerSection.why_partner_card_data.map(
            (card, i) => (
              <Grid 
                size={{ xs: 12, md: 4 }} 
                key={i}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.5 } 
                  },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
              >
                <WhyPartnerCard {...card} />
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPartnerSection;
