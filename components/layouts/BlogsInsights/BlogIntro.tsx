import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

export default function BlogIntro() {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{background:"#f9f8f8" ,pl: { xs: 3, md: 6 } }}>
        <Grid container spacing={6} alignItems="center" >
          
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: 430 }}>
              
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "28px", md: "34px" },
                }}
              >
                What is Lorem Ipsum?
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  mb: 5,
                }}
              >
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution. It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution...
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#9ca3af", fontSize: "13px" }}
                >
                  May 20
                </Typography>

                <Button
                  variant="text"
                  sx={{
                    color: "#111",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Read more
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT */}
         <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
  <Box
    component="img"
    src="/images/resources/blogsinsights/blogintro.png"
    alt="blog"
    sx={{
      width: "100%",
      height: { xs: 260, md: 420 },
      objectFit: "cover",
       pr:0
    }}
  />
</Grid>

        </Grid>
      </Container>
    </Box>
  );
}