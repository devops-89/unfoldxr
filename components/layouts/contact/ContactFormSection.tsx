"use client";
import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ShootUsEmail from "./components/ShootUsEmail";
import GiveUsCall from "./components/GiveUsCall";
import { contactPage } from "@/utils/Website-Data";
import { din } from "@/utils/fonts";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const ContactFormSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Submit a form", icon: <AssignmentTurnedInIcon sx={{ fontSize: 28 }} /> },
    { label: "Shoot us an email", icon: <MailOutlineIcon sx={{ fontSize: 28 }} /> },
    { label: "Give us a call", icon: <PhoneInTalkIcon sx={{ fontSize: 28 }} /> },
  ];

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1300 }}>
        {/* OUTER #EEE CARD — wraps everything */}
        <Box
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "24px",
            p: { xs: 4, md: 6, lg: 8 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">

            {/* LEFT: Heading */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 36, md: 48, lg: 48 },
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

            {/* RIGHT: Tabs + Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              {/* TABS HEADER */}
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
                {/* Background divider line */}
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

              {/* TAB CONTENT */}
              <Box sx={{ mt: 1 }}>
                {activeTab === 0 && (
                  <Box
                    sx={{
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
                )}
                {activeTab === 1 && <ShootUsEmail />}
                {activeTab === 2 && <GiveUsCall />}
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFormSection;
