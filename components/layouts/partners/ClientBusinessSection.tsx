import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ClientBusinessCard from "./components/ClientBusinessCard";
import { partnersPage } from "@/utils/Website-Data";
import Image from "next/image";
const ClientBusinessSection = () => {
  return (
    <Box
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

              <Stack spacing={4}>
                {partnersPage.clientBusinessSection.client_business_card_data.map(
                  (item) => (
                    <ClientBusinessCard key={item.id} {...item} />
                  ),
                )}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT FIXED IMAGE - Anchored to stretch alongside content */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={partnersPage.clientBusinessSection.image}
              alt="Worker"
              sx={{
                width: { xs: "100%", md: "100%" },
                height: { xs: "auto", md: "100%" },
                objectFit: "contain",
                objectPosition: "right bottom",
                display: { xs: "none", md: "block" },
                pointerEvents: "none",
                
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientBusinessSection;
