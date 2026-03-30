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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {/*  Navbar Wrapper (HIDE on mobile when drawer open) */}
      <Box
        sx={{
          display: {
            xs: open ? "none" : "block", 
            md: "block", 
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
              height: 60,
              pl: 4,
              pr: 2,
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              backdropFilter: "blur(10px)",
              mt: 3,
              width: { xs: "95%", md: "80%" },
              boxSizing: "border-box",
            }}
          >
            {/* Logo */}
            <Image src={logo} alt="" style={{ width: 200, height: "auto" }} />

            {/* Desktop Menu  */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {HEADER_LINKS.map((val, i) => (
                <Link href={val.url} key={i} style={{ textDecoration: "none" }}>
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

              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY_GREEN,
                  borderRadius: "23px",
                  border: "1px solid #E3E3E3",
                  width: "max-content",
                  px: 3,
                  height: "46px",
                  fontFamily: inter.style.fontFamily,
                  color: COLORS.BLACK,
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                CONTACT US
              </Button>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/*  Mobile Drawer */}
    <Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
>
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
      <Image
        src={logo}
        alt="logo"
        style={{ width: 140, height: "auto" }}
      />

      {/* Optional Close Button */}
      <IconButton onClick={() => setOpen(false)}>
        ✕
      </IconButton>
    </Box>

    {/* Menu Items */}
    <Stack spacing={2}>
      {HEADER_LINKS.map((val, i) => (
        <Link
          href={val.url}
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

      <Button
        sx={{
          mt: 2,
          backgroundColor: COLORS.PRIMARY_GREEN,
          borderRadius: "23px",
          border: "1px solid #E3E3E3",
          height: "46px",
          fontFamily: inter.style.fontFamily,
          color: COLORS.BLACK,
          fontSize: 16,
          fontWeight: 900,
          textTransform: "uppercase",
        }}
      >
        CONTACT US
      </Button>
    </Stack>
  </Box>
</Drawer>
    </Box>
  );
};

export default Header;