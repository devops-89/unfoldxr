"use client";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WorkforceCard from "./components/WorkForce-Card";
import { useInView } from "@/utils/useInView";

const WorkForce = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <Box>
      <Container maxWidth={false} disableGutters>
        <Box
          ref={ref}
          sx={{
            backgroundColor: COLORS.WHITE,
            px: { xs: 2, sm: 6, md: 10 },
            pt: { xs: 5, md: 6 },
            pb: { xs: 6, md: 6 },
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { xs: "90%", md: "90%", lg: "80%" },
            mx: "auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.7s ease",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Heading */}
            <Typography
              sx={{
                color: "#000",
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 24, md: 36 },
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: { xs: "35px", md: "52px" },
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
                wordBreak: "break-word",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              {homePage.workforce.heading}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#000",
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: 1.4, md: "30px" },
                letterSpacing: "0.52px",
                mt: { xs: 2, md: 2 },
                textAlign: { xs: "center", md: "left" },
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease 0.2s",
              }}
            >
              {homePage.workforce.description}
            </Typography>

            {/* Cards */}
            <Grid container sx={{ mt: { xs: 4, md: 10 } }} spacing={4}>
              {homePage.workforce.data.map((val, i) => (
                <Grid
                  ref={ref}
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={i}
                  sx={{
                    mt: { xs: 0, md: 0 },
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  <WorkforceCard
                    img={val.img}
                    icon={val.icon}
                    heading={val.heading}
                    description={val.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkForce;
