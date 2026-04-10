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
import { COLORS } from "@/utils/enum";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/utils/constant";
import logoWhite from "@/images/logo/logo_white.png";
import linkedin from "@/images/social_icons/linkedin.svg";
import youtube from "@/images/social_icons/youtube.svg";
import facebook from "@/images/social_icons/facebook.svg";
import x from "@/images/social_icons/twitter.svg";
import instagram from "@/images/social_icons/insta.svg";
import { usePathname } from "next/navigation";
import { useDemoModal } from "../context/DemoModalContext";

export default function Footer() {
  const { openModal } = useDemoModal();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";

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
    <Box component="footer" sx={{ bgcolor: "black", pt: 4, pb: 2 }}>
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
            sx={{ pb: { xs: 4, md: 4 }, borderBottom: "1px solid #222" }}
          >
            {FOOTER_COLUMNS.map((column) => {
              const isSingleLink =
                column.links.length === 1 &&
                column.links[0].label === column.title;

              return (
                <Grid
                  key={column.title}
                  size={{ xs: 6, sm: 4, md: "auto" }}
                  sx={{
                    flex: 1,
                    minWidth: { md: 0, xs: 120 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {isSingleLink ? (
                    <Link
                      href={column.links[0].url}
                      style={{
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: "#ffffff",
                          transition: "0.2s",
                          "&:hover": {
                            color: COLORS.PRIMARY_GREEN,
                          },
                        }}
                      >
                        {column.title}
                      </Typography>
                    </Link>
                  ) : (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, mb: 1.4, color: "#ffffff" }}
                      >
                        {column.title}
                      </Typography>
                      {column.links.map((link, idx) => (
                        <Box
                          key={idx}
                          onClick={(e) => {
                            if (link.label.toLowerCase().includes("demo")) {
                              e.preventDefault();
                              openModal();
                            }
                          }}
                          sx={{ display: "block", cursor: "pointer" }}
                        >
                          <Link
                            href={link.url}
                            style={{
                              textDecoration: "none",
                              display: "block",
                              pointerEvents: link.label === "Book a Demo" ? "none" : "auto",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#efefef",
                                mb: 0.5,
                                fontSize: 14,
                                opacity: 0.8,
                                transition: "0.2s",
                                "&:hover": {
                                  color: COLORS.PRIMARY_GREEN,
                                  opacity: 1,
                                },
                              }}
                            >
                              {link.label}
                            </Typography>
                          </Link>
                        </Box>
                      ))}
                    </>
                  )}
                </Grid>
              );
            })}
          </Grid>

          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ pt: { xs: 4, md: 2 }, pb: 0 }}
          >
            {/* Left: Glowing Ball + Heading */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={{ xs: 2, md: 4 }}
              >
                <Box
                  sx={{
                    width: { xs: 220, sm: 250, md: 250 },
                    height: { xs: 220, sm: 250, md: 250 },
                    position: "relative",
                    display: "block",
                    mx: { xs: "auto", md: 0 },
                    opacity: 0.9,
                    // mb: -4,
                  }}
                >
                  <Box
                    component="video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      width: { xs: "100%", md: "85%" },
                      height: { xs: "100%", md: "90%" },
                      objectFit: "contain",
                    }}
                  >
                    <source src="/images/homepage/Globe.mp4" type="video/mp4" />
                  </Box>
                </Box>

                <Stack
                  spacing={3}
                  alignItems={{ xs: "center", md: "flex-start" }}
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                  <Stack spacing={1}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "#ffffff",
                        fontSize: { xs: 24, md: 22 },
                        lineHeight: 1.2,
                      }}
                    >
                      The 1 Million <br />
                      Productivity Leap
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, md: 16 },
                        color: "#ffffff",
                        opacity: 0.8,
                        fontWeight: 500,
                      }}
                    >
                      Ready to improve your work quality?
                    </Typography>
                  </Stack>
                  <Button
                    onClick={openModal}
                    variant="contained"
                    sx={{
                      borderRadius: 52,
                      alignSelf: { xs: "center", md: "flex-start" },
                      px: { lg: 3, xs: 4 },
                      py: 1.1,
                      bgcolor: "#b6ec1a",
                      color: "black",
                      fontSize: { lg: 16, xs: 16 },
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "0px 4px 14px rgba(182, 236, 26, 0.3)",
                      "&:hover": {
                        bgcolor: "#a3d713",
                      },
                    }}
                  >
                    Request a demo
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
                {isHome ? (
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
                ) : (
                  <Link href="/" style={{ display: "block", textDecoration: "none", cursor: "pointer" }}>
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
                  </Link>
                )}
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
                          width: { xs: 18, md: 18 },
                          height: { xs: 18, md: 18 },
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
              pt: 2,
              borderTop: "1px solid #222",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#efefef", opacity: 0.6, textAlign: "center" }}
            >
              Copyright ©2026 All rights reserved
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                position: { sm: "absolute" },
                right: { sm: 0 },
                mt: { xs: 3, sm: 0 },
              }}
            >
              {/* <Link href="#" style={{ textDecoration: "none" }}>
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
                  Terms & Conditions
                </Button>
              </Link> */}
              <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
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
                  Privacy Policy
                </Button>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
