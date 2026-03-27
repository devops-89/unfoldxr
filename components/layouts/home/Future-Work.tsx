import ContainedButton from "@/components/widgets/ContainedButton";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FutureWorkCard from "./components/Future-Work-Card";
import { FUTURE_WORK_CARD_DATA } from "@/utils/constant";

const FutureWork = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "39px",
            py: { xs: 6, md: 10 }, // 👈 responsive padding
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }}>
              
              {/* LEFT SECTION */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: 20, md: 45 },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                    lineHeight: { xs: "36px", md: "60px" },
                  }}
                >
                  {homePage.future_work.leftSection.heading}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 12, md: 20 },
                    color: COLORS.WHITE,
                    fontWeight: 400,
                    my: 2,
                  }}
                >
                  {homePage.future_work.leftSection.description}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 12, md: 20 },
                    fontWeight: 700,
                    color: COLORS.WHITE,
                    fontFamily: helvetica.style.fontFamily,
                  }}
                >
                  {homePage.future_work.leftSection.subDescription}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 50 },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.PRIMARY_GREEN,
                    lineHeight: { xs: "40px", md: "60px" },
                    fontFamily: din.style.fontFamily,
                    mt: 4,
                  }}
                >
                  {homePage.future_work.leftSection.endHeading}
                </Typography>

                <ContainedButton sx={{ mt: 3, width: { xs: "100%", md: "auto" } }}>
                  {homePage.future_work.leftSection.cta}
                </ContainedButton>
              </Grid>

              {/* RIGHT SECTION */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack
                  spacing={3}
                  sx={{
                    maxHeight: { xs: "none", md: "100vh" }, // 👈 remove scroll on mobile
                    overflowY: { xs: "visible", md: "auto" },
                    direction: "rtl",
                    pl: { xs: 0, md: 2 },
                    "& > *": {
                      direction: "ltr",
                    },
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: COLORS.WHITE,
                      borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: COLORS.PRIMARY_GREEN,
                      borderRadius: "10px",
                    },
                  }}
                >
                  {FUTURE_WORK_CARD_DATA.map((val, i) => (
                    <FutureWorkCard
                      label={val.label}
                      value={val.value}
                      description={val.description}
                      key={i}
                    />
                  ))}
                </Stack>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default FutureWork;