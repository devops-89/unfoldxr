import { Box, Container, Grid, Typography } from "@mui/material";
import WhyPartnerCard from "./components/WhyPartnerCard";
import { partnersPage } from "@/utils/Website-Data";

const WhyPartnerSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: { md: "90vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 10, md: 0 },
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
          sx={{
            color: "#fff",
            fontSize: { xs: 32, md: 48 },
            fontWeight: 900,
            mb: { xs: 6, md: 8 },
            textTransform: "uppercase",
            lineHeight: 1.1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {partnersPage.whyPartnerSection.heading}
        </Typography>

        <Grid container rowSpacing={{ xs: 12, md: 3 }} columnSpacing={3}>
          {partnersPage.whyPartnerSection.why_partner_card_data.map(
            (card, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
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
