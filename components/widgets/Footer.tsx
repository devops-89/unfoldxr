"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/utils/constant";
import glowingBall from "@/images/homepage/globe.gif";

import logoWhite from "@/images/logo/logo_white.png";
import linkedin from "@/images/social_icons/linkedin.svg";
import youtube from "@/images/social_icons/youtube.svg";
import facebook from "@/images/social_icons/facebook.svg";
import x from "@/images/social_icons/twitter.svg";
import instagram from "@/images/social_icons/insta.svg";

export default function Footer() {
  const socialIcons = [
    {
      src: linkedin,
      alt: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
    },
    {
      src: youtube,
      alt: "YouTube",
      href: SOCIAL_LINKS.youtube,
    },
    {
      src: facebook,
      alt: "Facebook",
      href: SOCIAL_LINKS.facebook,
    },
    { src: x, alt: "X", href: SOCIAL_LINKS.x },
    {
      src: instagram,
      alt: "Instagram",
      href: SOCIAL_LINKS.instagram,
    },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: "black", pt: 8, pb: 4 }}>
      <Box
        sx={{
          position: "relative",
          maxWidth: 1920,
          mx: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 2 }}
            justifyContent="space-between"
            sx={{ pb: { xs: 8, md: 10 }, borderBottom: "1px solid #222" }}
          >
            {FOOTER_COLUMNS.map((column) => (
              <Grid
                key={column.title}
                size={{ xs: 6, sm: 4, md: "auto" }}
                sx={{ flex: 1, minWidth: { md: 0, xs: 120 } }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, mb: 1.5, color: "#ffffff" }}
                >
                  {column.title}
                </Typography>
                {column.links.map((link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    sx={{
                      color: "#efefef",
                      mb: 0.5,
                      fontSize: 14,
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>

          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: { xs: 4, md: 8 } }}
          >
            {/* Left: Glowing Ball */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" alignItems="center">
                <Box
                  sx={{
                    width: { xs: 180, sm: 240, md: 300 },
                    height: { xs: 180, sm: 240, md: 300 },
                    position: "relative",
                    display: "block",
                    mx: { xs: "auto", md: 0 },
                    opacity: 0.9,
                  }}
                >
                  <Image
                    src={glowingBall}
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    unoptimized
                  />
                </Box>
               
                <Stack
                  spacing={3}
                  alignItems={{ xs: "center", md: "center" }}
                  sx={{ textAlign: "center" }}
                >
                  <Stack spacing={1} sx={{textAlign:"left"}}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "#ffffff",
                        fontSize: { xs: 24, md: 32 },
                        lineHeight: 1.2,
                      }}
                    >
                      The 1 Million <br />
                      Productivity Leap
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, md: 18 },
                        color: "#ffffff",
                        opacity: 0.8,
                        fontWeight: 500,
                      }}
                    >
                      Ready to improve your work quality?
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 52,
                      alignSelf: "flex-start",
                      px: { lg: 6, xs: 4 },
                      py: 1.5,
                      bgcolor: "#b6ec1a",
                      color: "black",
                      fontSize: { lg: 18, xs: 16 },
                      fontWeight: 700,
                      textTransform: "none",
                      boxShadow: "0px 4px 14px rgba(182, 236, 26, 0.3)",
                      "&:hover": {
                        bgcolor: "#a3d713",
                      },
                    }}
                  >
                    Request a Demo
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack
                spacing={3}
                alignItems={{ xs: "center", md: "flex-end" }}
                sx={{ textAlign: { xs: "center", md: "right" } }}
              >
                <Box
                  sx={{
                    height: { xs: 32, md: 30 },
                    width: { xs: "200px", sm: "250px", md: "250px" },
                    position: "relative",
                  }}
                >
                  <Image
                    src={logoWhite}
                    alt="UnfoldXR"
                    fill
                    style={{ objectFit: "contain" }}
                    unoptimized
                  />
                </Box>
                 <Typography
                  component="a"
                  href="mailto:info@unfoldxr.com"
                  sx={{
                    color: "#efefef",
                    opacity: 0.8,
                    fontSize: 20,
                    textDecoration: "none",
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "underline",
                    },
                  }}
                >
                  info@unfoldxr.com
                </Typography>
                <Stack direction="row" spacing={2}>
                  {socialIcons.map((icon, idx) => (
                    <IconButton
                      key={idx}
                      size="small"
                      component="a"
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: "white",
                        p: { xs: 0.8, md: 1 },
                        "&:hover": { bgcolor: "#f1f1f1" },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 18, md: 22 },
                          height: { xs: 18, md: 22 },
                          position: "relative",
                        }}
                      >
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      </Box>
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{
              pt: 4,
              borderTop: "1px solid #222",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#efefef", opacity: 0.6, textAlign: "center" }}
            >
              Copyright ©2026 All rights reserved
            </Typography>
            <Box
              sx={{
                position: { sm: "absolute" },
                right: { sm: 0 },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Link href="#" style={{ textDecoration: "none" }}>
                <Button
                  variant="text"
                  sx={{
                    color: "#efefef",
                    opacity: 0.6,
                    textTransform: "none",
                    fontSize: 14,
                    padding: 0,
                    minWidth: 0,
                    "&:hover": { opacity: 1, bgcolor: "transparent" },
                  }}
                >
                  Terms & Condition
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
