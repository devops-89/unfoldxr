"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ClientBusinessCard from "./components/ClientBusinessCard";
import { partnersPage } from "@/utils/Website-Data";
import Image from "next/image";
import { motion } from "framer-motion";

const ClientBusinessSection = () => {
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
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        // minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
        overflow: "visible",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          mt: 3,
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
          zIndex: 1,
          mb: 4,
        }}
      >
        <Grid container spacing={4} alignItems="stretch">
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box maxWidth="700px">
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 28, md: 36 },
                  lineHeight: "52px",
                  textTransform: "uppercase",
                  mb: 4,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {partnersPage.clientBusinessSection.title}
              </Typography>

              <Stack 
                spacing={4}
                component={motion.div}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {partnersPage.clientBusinessSection.client_business_card_data.map(
                  (item) => (
                    <Box
                      key={item.id}
                      component={motion.div}
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.5 }
                        },
                      }}
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22 }}
                    >
                      <ClientBusinessCard {...item} />
                    </Box>
                  ),
                )}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT FIXED IMAGE - Anchored to stretch alongside content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.img}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src={partnersPage.clientBusinessSection.image}
              alt="Worker"
              sx={{
                width: { xs: "100%", md: "100%" },
                height: { xs: "auto", md: "100%" },
                objectFit: "cover",
                objectPosition: "center",
                display: { xs: "none", md: "block" },
                pointerEvents: "none",
                borderRadius: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientBusinessSection;
