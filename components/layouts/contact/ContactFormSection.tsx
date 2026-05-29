"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import ContactForm from "./components/ContactForm";
import ShootUsEmail from "./components/ShootUsEmail";
import GiveUsCall from "./components/GiveUsCall";
import { contactPage } from "@/utils/Website-Data";
import { din } from "@/utils/fonts";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { motion } from "framer-motion";

// Main exported component with Suspense boundary
export default function ContactFormSection() {
  return (
    <Suspense fallback={<Box sx={{ minHeight: '400px', bgcolor: '#fff' }} />}>
      <ContactFormSectionContent />
    </Suspense>
  );
}

// Internal content component that uses searchParams
const ContactFormSectionContent = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "email") {
      setActiveTab(1);
    } else if (tab === "call") {
      setActiveTab(2);
    } else if (tab === "form") {
      setActiveTab(0);
    }
  }, [searchParams]);

  const tabs = [
    { label: "Submit a form", icon: <AssignmentTurnedInIcon sx={{ fontSize: 28 }} /> },
    { label: "Shoot us an email", icon: <MailOutlineIcon sx={{ fontSize: 28 }} /> },
    // { label: "Give us a call", icon: <PhoneInTalkIcon sx={{ fontSize: 28 }} /> },
  ];

  return (
    <Box 
      sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 10 } }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1300 }}>
        <Box
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "24px",
            p: { xs: 4, md: 6, lg: 8 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 36, lg: 36 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  color: "#000",
                  position: { md: "sticky" },
                  top: { md: 80 },
                }}
              >
                Let&apos;s augment human productivity together.
              </Typography>
            </Grid>

            <Grid 
              size={{ xs: 12, md: 7 }}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 1, md: 4 }}
                sx={{ mb: 0, position: "relative" }}
              >
                {tabs.map((tab, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveTab(index)}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      pb: 2,
                      flex: 1,
                      borderBottom: activeTab === index ? "3px solid #b8ed1a" : "3px solid transparent",
                      color: activeTab === index ? "#000" : "#555",
                      transition: "all 0.3s ease",
                      "&:hover": { color: "#000" },
                    }}
                  >
                    {tab.icon}
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontSize: { xs: 11, md: 16 },
                        fontWeight: 700,
                        mt: 0.5,
                        textAlign: "center",
                      }}
                    >
                      {tab.label}
                    </Typography>
                  </Box>
                ))}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    backgroundColor: "#D0D0D0",
                    zIndex: -1,
                  }}
                />
              </Stack>

              <Box sx={{ mt: 1, display: "grid" }}>
                <Box
                  sx={{
                    gridArea: "1/1",
                    visibility: activeTab === 0 ? "visible" : "hidden",
                    opacity: activeTab === 0 ? 1 : 0,
                    pointerEvents: activeTab === 0 ? "auto" : "none",
                    transition: "opacity 0.3s ease",
                    backgroundColor: "#EEEEEE",
                    borderRadius: "16px",
                    p: { xs: 3, md: 5 },
                  }}
                >
                  <ContactForm
                    formData={contactPage.contactFormSection.contactFormData}
                    note={contactPage.contactFormSection.note}
                  />
                </Box>
                <Box
                  sx={{
                    gridArea: "1/1",
                    visibility: activeTab === 1 ? "visible" : "hidden",
                    opacity: activeTab === 1 ? 1 : 0,
                    pointerEvents: activeTab === 1 ? "auto" : "none",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <ShootUsEmail />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

