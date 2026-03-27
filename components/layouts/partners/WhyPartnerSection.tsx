import { Box, Container, Grid, Typography } from "@mui/material";
import WhyPartnerCard from "./components/WhyPartnerCard";
import { partnersPage } from "@/utils/Website-Data";


const WhyPartnerSection = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: 24, md: 32 },
            fontWeight: 900,
            mb: 5,
          }}
        >
          {partnersPage.whyPartnerSection.heading}
        </Typography>

        <Grid container spacing={3}>
          {partnersPage.whyPartnerSection.why_partner_card_data.map((card, i) => (
            <Grid size={{xs:12,md:4}} key={i}>
              <WhyPartnerCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPartnerSection;