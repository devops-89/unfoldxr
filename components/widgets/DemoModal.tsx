"use client";

import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
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
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      <Box sx={{ position: "absolute", right: 12, top: 12, zIndex: 1 }}>
        <IconButton onClick={closeModal} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent sx={{ p: { xs: 2.5, md: 4 }, pt: { xs: 5, md: 6 } }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 22, md: 28, lg: 22 },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.2,
              mb: 1.5,
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
