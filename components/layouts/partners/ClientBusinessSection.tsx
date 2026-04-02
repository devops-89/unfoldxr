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
        minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
        overflow: "visible", 
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
          zIndex: 1,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box maxWidth="700px">
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 32, md: 50 },
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  mb: 8,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {partnersPage.clientBusinessSection.title}
              </Typography>

              <Stack spacing={4}>
                {partnersPage.clientBusinessSection.client_business_card_data.map(
                  (item) => (
                    <ClientBusinessCard key={item.id} {...item} />
                  )
                )}
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT OFFSET FOR IMAGE */}
          <Grid size={{ xs: 12, md: 5 }} />
        </Grid>
      </Container>

      {/* RIGHT FIXED IMAGE - Anchored to bottom right */}
      <Box
        component="img"
        src={partnersPage.clientBusinessSection.image.src}
        alt="Worker"
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: { md: "40%", lg: "28%" },
          maxWidth: "700px",
          height: "auto",
          objectFit: "contain",
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default ClientBusinessSection;
