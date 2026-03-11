import { COLORS } from "@/utils/enum";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "@/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LINKS } from "@/utils/constant";
import { helvetica, inter } from "@/utils/fonts";
const Header = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: COLORS.HRADER_BG,
            borderRadius: "30px",
            border: "1px solid #E3E3E3",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            pl: 4,
            position: "absolute",
            top: 10,
            zIndex: 9999,
            backdropFilter: "blur(10px)",
            pr: 2,
            mt: 3,
            width: "80%",
          }}
        >
          <Image src={logo} alt="" style={{ width: 200, height: "auto" }} />
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
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
                width: "186px",
                height: "46px",
                fontFamily: inter.style.fontFamily,
                color: COLORS.BLACK,
                fontSize: 16,
              }}
            >
              Book a Demo
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
