"use client";

import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "@/components/layouts/contact/components/ContactForm";
import { useDemoModal } from "../context/DemoModalContext";
import { contactPage } from "@/utils/Website-Data";
import { din, helvetica } from "@/utils/fonts";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const DemoModal = () => {
  const { isOpen, closeModal, isSuccess, source } = useDemoModal();

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
        {isSuccess && source === "capabilities" ? (
          <Box
            sx={{
              textAlign: "center",
              py: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CheckCircleRoundedIcon
              sx={{ color: "#B6EC1A", fontSize: 80, mb: 1 }}
            />
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 24, md: 30 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              You've done your part.
              <br /> We'll execute ours.
            </Typography>
            <Typography
              sx={{
                fontFamily: helvetica.style.fontFamily,
                fontSize: 16,
                color: "#666",
                maxWidth: 300,
                mx: "auto",
              }}
            >
              Thank you for writing to us.
              <br /> A real human from the UnfoldXR team will get back to you
              soon.
            </Typography>
            <Button
              onClick={closeModal}
              sx={{
                mt: 2,
                backgroundColor: "#000",
                color: "#B6EC1A",
                borderRadius: 50,
                px: 4,
                textTransform: "none",
                fontWeight: 700,
                "&:hover": { backgroundColor: "#B6EC1A", color: "#000" },
              }}
            >
              Close
            </Button>
          </Box>
        ) : (
          <>
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
