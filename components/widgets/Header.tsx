"use client";

import { COLORS } from "@/utils/enum";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LINKS } from "@/utils/constant";
import { helvetica, inter } from "@/utils/fonts";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";

  return (
    <Box>
      {/*  Navbar Wrapper (HIDE on mobile when drawer open) */}
      <Box
        sx={{
          display: {
            xs: open ? "none" : "block",
            ["@media (min-width: 1515px)" as any]: "block",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: COLORS.HEADER_BG,
              borderRadius: "30px",
              border: "1px solid #E3E3E3",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: { xs: 55, md: 60 },
              pl: { xs: 2.5, md: 4 },
              pr: { xs: 1.5, md: 2 },
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              backdropFilter: "blur(10px)",
              mt: { xs: 1, md: 3 },
              width: { xs: "95%", md: "90%", lg: "80%" },
              boxSizing: "border-box",
            }}
          >
            {/* Logo */}
            {isHome ? (
              <Box
                sx={{
                  width: { xs: 130, sm: 160, md: 200 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={logo}
                  alt="logo"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ) : (
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{ width: { xs: 130, sm: 160, md: 200 }, display: "flex" }}
                >
                  <Image
                    src={logo}
                    alt="logo"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Link>
            )}

            {/* Desktop Menu  */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ md: 2, lg: 3 }}
              sx={{
                display: "none",
                "@media (min-width: 1515px)": {
                  display: "flex",
                },
              }}
            >
              {HEADER_LINKS.map((val, i) => (
                <Link
                  href={val.url || "#"}
                  key={i}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { md: 14, lg: 16 },
                      color: COLORS.BLACK,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
              ))}

              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    backgroundColor: COLORS.PRIMARY_GREEN,
                    borderRadius: "23px",
                    border: "1px solid #E3E3E3",
                    width: "max-content",
                    px: { md: 2, lg: 3 },
                    height: "46px",
                    fontFamily: inter.style.fontFamily,
                    color: COLORS.BLACK,
                    fontSize: { md: 12, lg: 14 },
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  CONTACT US
                </Button>
              </Link>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: "block",
                color: COLORS.BLACK,
                "@media (min-width: 1515px)": {
                  display: "none",
                },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/*  Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 3 }}>
          {/*  Top Section  */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            {/* Logo */}
            {isHome ? (
              <Image
                src={logo}
                alt="logo"
                style={{ width: 140, height: "auto" }}
              />
            ) : (
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src={logo}
                  alt="logo"
                  style={{ width: 140, height: "auto" }}
                />
              </Link>
            )}

            {/* Optional Close Button */}
            <IconButton onClick={() => setOpen(false)}>✕</IconButton>
          </Box>

          {/* Menu Items */}
          <Stack spacing={2}>
            {HEADER_LINKS.map((val, i) => (
              <Link
                href={val.url || "#"}
                key={i}
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: 16,
                    color: COLORS.BLACK,
                  }}
                >
                  {val.label}
                </Typography>
              </Link>
            ))}

            <Link
              href="/contact-us"
              style={{ textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              <Button
                sx={{
                  mt: 2,
                  backgroundColor: COLORS.PRIMARY_GREEN,
                  borderRadius: "23px",
                  border: "1px solid #E3E3E3",
                  height: "46px",
                  width: "100%",
                  fontFamily: inter.style.fontFamily,
                  color: COLORS.BLACK,
                  fontSize: 16,
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                CONTACT US
              </Button>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
