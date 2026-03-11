import ContainedButton from "@/components/widgets/ContainedButton";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Meetava = () => {
  return (
    <Box
      sx={{
        mt: 10,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: 50,
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          {homePage.meetAva.heading}
        </Typography>

        <Grid container alignItems={"center"}>
          <Grid size={6}>
            {homePage.meetAva.leftSection.description.map((val, i) => (
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: "30px",
                }}
              >
                {val.label}
              </Typography>
            ))}
            <ContainedButton sx={{ mt: 3 }}>Book a demo now</ContainedButton>
          </Grid>
          <Grid size={6} sx={{ textAlign: "center" }}>
            <Image src={homePage.meetAva.rightSection.img} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Meetava;
