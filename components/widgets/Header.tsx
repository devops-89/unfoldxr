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
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LINKS } from "@/utils/constant";
import { helvetica, inter } from "@/utils/fonts";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const pathname = usePathname();

  return (
    <Box>
      {/* Navbar Wrapper */}
      <Box
        sx={{
          display: open ? "none" : "block",
          "@media (min-width: 1340px)": {
            display: "block",
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
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: { xs: 130, sm: 160, md: 200 }, display: "flex" }}>
                <Image src={logo} alt="logo" style={{ width: "100%", height: "auto" }} />
              </Box>
            </Link>

            {/* Desktop Menu */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ md: 1.5, lg: 2 }}
              sx={{
                display: "none",
                "@media (min-width: 1340px)": { display: "flex" },
                height: "100%",
              }}
            >
              {HEADER_LINKS.map((val, i) => (
                <Box
                  key={i}
                  onMouseEnter={() => val.subLinks && setActiveMenu(val.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {val.subLinks ? (
                    <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          gap: 0.5,
                        }}
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
                        <KeyboardArrowDownIcon
                          sx={{
                            fontSize: 18,
                            color: COLORS.BLACK,
                            transition: "transform 0.3s ease",
                            transform: activeMenu === val.label ? "rotate(180deg)" : "none",
                          }}
                        />
                      </Box>

                      {/* Custom Dropdown Box (Attached with no gap) */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          pt: 1,
                          visibility: activeMenu === val.label ? "visible" : "hidden",
                          opacity: activeMenu === val.label ? 1 : 0,
                          transition: "all 0.2s ease-in-out",
                          zIndex: 10000,
                        }}
                      >
                        <Box
                          sx={{
                            minWidth: 220,
                            borderRadius: "16px",
                            boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
                            border: "1px solid rgba(0,0,0,0.08)",
                            bgcolor: "white",
                            overflow: "hidden",
                            p: 1,
                          }}
                        >
                          {val.subLinks.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.url}
                              style={{ textDecoration: "none", display: "block" }}
                            >
                              <Box
                                sx={{
                                  py: 1.2,
                                  px: 2,
                                  borderRadius: "8px",
                                  transition: "0.2s",
                                  "&:hover": {
                                    bgcolor: "rgba(197, 255, 46, 0.15)",
                                  },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: helvetica.style.fontFamily,
                                    color: COLORS.BLACK,
                                    fontSize: 14,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {sub.label}
                                </Typography>
                              </Box>
                            </Link>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Link href={val.url || "#"} style={{ textDecoration: "none" }}>
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
                  )}
                </Box>
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
                "@media (min-width: 1340px)": { display: "none" },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src={logo} alt="logo" style={{ width: 140, height: "auto" }} />
            </Link>
            <IconButton onClick={() => setOpen(false)}>✕</IconButton>
          </Box>

          <Stack spacing={1}>
            {HEADER_LINKS.map((val, i) => (
              <Box key={i}>
                {val.subLinks ? (
                  <Box>
                    <Box
                      onClick={() => setMobileExpanded(mobileExpanded === val.label ? null : val.label)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        py: 1,
                        cursor: "pointer",
                      }}
                    >
                      <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: 16, color: COLORS.BLACK }}>
                        {val.label}
                      </Typography>
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: mobileExpanded === val.label ? "rotate(180deg)" : "none",
                          transition: "0.3s",
                        }}
                      />
                    </Box>
                    <Collapse in={mobileExpanded === val.label}>
                      <Stack spacing={1} sx={{ pl: 2, mb: 1 }}>
                        {val.subLinks.map((sub, j) => (
                          <Link
                            key={j}
                            href={sub.url}
                            onClick={() => setOpen(false)}
                            style={{ textDecoration: "none", padding: "8px 0", display: "block" }}
                          >
                            <Typography sx={{ fontFamily: helvetica.style.fontFamily, fontSize: 14, color: COLORS.BLACK }}>
                              {sub.label}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Collapse>
                  </Box>
                ) : (
                  <Link
                    href={val.url || "#"}
                    style={{ textDecoration: "none", display: "block", paddingTop: 8, paddingBottom: 8 }}
                    onClick={() => setOpen(false)}
                  >
                    <Typography
                      sx={{ fontFamily: helvetica.style.fontFamily, fontSize: 16, color: COLORS.BLACK, py: 1 }}
                    >
                      {val.label}
                    </Typography>
                  </Link>
                )}
              </Box>
            ))}

            <Link href="/contact-us" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
              <Button
                sx={{
                  mt: 3,
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
