import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import { contactPage } from "@/utils/Website-Data";
const ContactFormSection = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", py: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#EAEAEA",
            borderRadius: "20px",
            p: { xs: 3, md: 6 },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            
            {/* LEFT SIDE */}
            <Grid size={{xs:12 ,md:5}}>
              <Typography
                sx={{
                  fontSize: { xs: 28, md: 48 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}
              >
                {contactPage.contactFormSection.heading}
              </Typography>
            </Grid>

            {/* RIGHT SIDE FORM */}
            <Grid size={{xs:12 ,md:7}}>
              <ContactForm
                formData={contactPage.contactFormSection.contactFormData}
                note={contactPage.contactFormSection.note}
              />
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFormSection;