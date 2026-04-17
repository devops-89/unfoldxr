"use client";
import { useState } from "react";
import { Box, Container, Grid, Typography, Stack, alpha } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";

const LeadershipSection = () => {
  const { leadershipSection: data } = aboutPage;

  return (
    <Container
      maxWidth={false}
      sx={{
        width: { xs: "90%", md: "90%", lg: "83%" },
        mx: "auto",
        px: 0,
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, md: 36 },
          fontWeight: 900,
          textTransform: "uppercase",
          mb: 8,
          fontFamily: din.style.fontFamily,
          color: COLORS.BLACK,
          lineHeight: "52px",
        }}
      >
        {data.title}
      </Typography>

      <Stack spacing={12}>
        {data.members.map((member, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <Grid
              container
              key={idx}
              spacing={{ xs: 4, md: 10 }}
              alignItems="flex-start"
              direction={isEven ? "row-reverse" : "row"}
            >
              <Grid
                size={{ xs: 12, md: 4.5 }}
                sx={{ position: "relative", overflow: "hidden" }}
              >
                {isEven ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={600}
                    style={{
                      width: isEven ? "250px" : "400px",
                      height: isEven ? "auto" : "auto",
                      display: "block",
                      marginTop: "50px",
                    }}
                    priority={idx === 0}
                  />
                ) : (
                  <Image
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: isEven ? "250px" : "400px",
                      height: isEven ? "auto" : "auto",
                      display: "block",
                    }}
                    priority={idx === 0}
                  />
                )}
              </Grid>
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Box
                  sx={{
                    textAlign: "left",
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 26, md: 36 },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      fontFamily: din.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 20 },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      mb: 4,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.PRIMARY_GREEN,
                      lineHeight: 1.3,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: "28px",
                      fontFamily: helvetica.style.fontFamily,
                      color: "rgba(0, 0, 0, 0.8)",
                      textAlign: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Container>
  );
};

export default LeadershipSection;
