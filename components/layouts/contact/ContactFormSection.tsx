import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import { contactPage } from "@/utils/Website-Data";
import { din } from "@/utils/fonts";
const ContactFormSection = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", py: 8 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1300 }}>
        <Box
          sx={{
            backgroundColor: "#EAEAEA",
            borderRadius: "20px",
            p: { xs: 3, md: 6 },
          }}
        >
          <Grid container spacing={4} alignItems="start">
            {/* LEFT SIDE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 48, lg: 54 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                {contactPage.contactFormSection.heading}
              </Typography>
            </Grid>

            {/* RIGHT SIDE FORM */}
            <Grid size={{ xs: 12, md: 6 }}>
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
