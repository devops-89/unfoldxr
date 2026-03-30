import { Box, Container, Grid, Typography } from "@mui/material";
import ClientBusinessCard from "./components/ClientBusinessCard";
import { partnersPage } from "@/utils/Website-Data";
import Image from "next/image";
const ClientBusinessSection = () => {
  return (
   <Box
  sx={{
    position: "relative", // 👈 IMPORTANT
    backgroundColor: "#000",
    color: "#fff",
    py: 10,
    overflow: "hidden",
  }}
>
  <Container maxWidth="lg">
    
    {/* LEFT CONTENT */}
    <Box maxWidth="700px">
      <Typography variant="h4" fontWeight={800}>
        {partnersPage.clientBusinessSection.title}
      </Typography>

      <Box mt={4} display="flex" flexDirection="column" gap={3}>
        {partnersPage.clientBusinessSection.client_business_card_data.map((item) => (
          <ClientBusinessCard key={item.id} {...item} />
        ))}
      </Box>
    </Box>

  </Container>

  {/* RIGHT FIXED IMAGE */}
  <Box
    component="img"
    src={partnersPage.clientBusinessSection.image.src}
    alt="Worker"
    sx={{
      position: "absolute",
      right: 0,          
      bottom: 0,          
      height: "100%",    
      maxHeight: "500px",
      objectFit: "contain",

      // Responsive
      display: { xs: "none", md: "block" },
    }}
  />
</Box>
  );
};

export default ClientBusinessSection;
