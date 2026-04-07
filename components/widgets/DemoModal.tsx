"use client";

import { Dialog, DialogContent, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "@/components/layouts/contact/components/ContactForm";
import { useDemoModal } from "../context/DemoModalContext";
import { contactPage } from "@/utils/Website-Data";
import { din } from "@/utils/fonts";

const DemoModal = () => {
  const { isOpen, closeModal } = useDemoModal();

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      <Box sx={{ position: "absolute", right: 16, top: 16, zIndex: 1 }}>
        <IconButton onClick={closeModal}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: { xs: 3, md: 6 }, pt: { xs: 6, md: 8 } }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 28, md: 36, lg: 40 },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {contactPage.contactFormSection.heading}
          </Typography>
        </Box>
        <ContactForm
          formData={contactPage.contactFormSection.contactFormData}
          note={contactPage.contactFormSection.note}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
