import ContainedButton from "@/components/widgets/ContainedButton";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
            py: 10,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={8}>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: 45,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                    lineHeight: "60px",
                  }}
                >
                  {homePage.future_work.leftSection.heading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: 20,
                    color: COLORS.WHITE,
                    fontWeight: 400,
                    my: 2,
                  }}
                >
                  {homePage.future_work.leftSection.description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: COLORS.WHITE,
                    fontFamily: helvetica.style.fontFamily,
                    // mt: 2,
                  }}
                >
                  {homePage.future_work.leftSection.subDescription}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 50,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.PRIMARY_GREEN,
                    lineHeight: "60px",
                    fontFamily: din.style.fontFamily,
                    mt: 4,
                  }}
                >
                  {homePage.future_work.leftSection.endHeading}
                </Typography>
                <ContainedButton sx={{ mt: 3 }}>
                  {homePage.future_work.leftSection.cta}
                </ContainedButton>
              </Grid>
              <Grid size={6}>
                <Stack
                  spacing={3}
                  sx={{
                    maxHeight: "100vh",
                    overflowY: "auto",
                    direction: "rtl",
                    pl: 2,
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
