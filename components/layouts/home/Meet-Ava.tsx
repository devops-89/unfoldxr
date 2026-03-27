import ContainedButton from "@/components/widgets/ContainedButton";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Meetava = () => {
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 10 }, 
        height: { xs: "auto", md: "100vh" }, 
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "center",
        py: { xs: 6, md: 0 }, 
      }}
    >
      <Container maxWidth="lg">
        
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: 28, md: 50 },
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {homePage.meetAva.heading}
        </Typography>

        <Grid container alignItems="center" spacing={{ xs: 4, md: 0 }}>
          
          {/* LEFT TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            {homePage.meetAva.leftSection.description.map((val, i) => (
              <Typography
                key={i}
                sx={{
                  mt: 2,
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 14, md: 20 },
                  fontWeight: 400,
                  lineHeight: { xs: "22px", md: "30px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {val.label}
              </Typography>
            ))}

            <ContainedButton
              sx={{
                mt: 3,
                width: { xs: "100%", md: "auto" }, 
              }}
            >
              Book a demo now
            </ContainedButton>
          </Grid>

          
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: "center" }}
          >
            <Image
              src={homePage.meetAva.rightSection.img}
              alt=""
              style={{
                width: "100%", 
                height: "auto",
                maxWidth: "400px", 
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Meetava;