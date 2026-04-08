"use client";

import ContainedButton from "@/components/widgets/ContainedButton";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FutureWorkCard from "./components/Future-Work-Card";
import { FUTURE_WORK_CARD_DATA } from "@/utils/constant";
import { useDemoModal } from "@/components/context/DemoModalContext";

const FutureWork = () => {
  const { openModal } = useDemoModal();
  const [expandedSteps, setExpandedSteps] = useState([0]);

  const handleToggle = (index: number) => {
    if (expandedSteps.includes(index)) {
      setExpandedSteps(expandedSteps.filter((i) => i !== index));
    } else {
      let nextArray = [...expandedSteps, index].sort();
      if (nextArray.length > 2) {
        // If we opened the 3rd (Edge), close the 1st (Augment)
        if (index === 2) {
          nextArray = nextArray.filter((i) => i !== 0);
        } 
        // If we opened the 1st (Augment), close the 3rd (Edge)
        else if (index === 0) {
          nextArray = nextArray.filter((i) => i !== 2);
        }
        // Fallback for clicking the middle one (index 1)
        else {
          nextArray = nextArray.slice(0, 2);
        }
      }
      setExpandedSteps(nextArray);
    }
  };

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
            borderRadius: "15px",
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 4, md: 8 }}>
              {/* LEFT SECTION */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: 20, md: 48 },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                    lineHeight: { xs: "36px", md: "52px" },
                  }}
                >
                  {homePage.future_work.leftSection.heading}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 12, md: 18},
                    color: COLORS.WHITE,
                    fontWeight: 400,
                    lineHeight:"30px",
                    letterSpacing:"0.52px",
                    my: 2,
                  }}
                >
                  {homePage.future_work.leftSection.description}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 12, md: 18 },
                    fontWeight: 700,
                    color: COLORS.WHITE,
                    fontFamily: helvetica.style.fontFamily,
                    lineHeight:"30px",
                    letterSpacing:"0.52px",
                  }}
                >
                  {homePage.future_work.leftSection.subDescription}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 48 },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: COLORS.PRIMARY_GREEN,
                    lineHeight: { xs: "40px", md: "52px" },
                    fontFamily: din.style.fontFamily,
                    mt: 4,
                  }}
                >
                  {homePage.future_work.leftSection.endHeading}
                </Typography>

                <ContainedButton
                  onClick={openModal}
                  sx={{
                    mt: 3,
                    width: { xs: "100%", md: "auto" },
                    height: { xs: "45px", md: "62px" },
                    fontSize: { xs: 16, md: 18 },
                  }}
                >
                  {homePage.future_work.leftSection.cta}
                </ContainedButton>
              </Grid>

              {/* RIGHT SECTION - INTERACTIVE STEPPER */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={4} sx={{ width: "100%" }}>
                  {FUTURE_WORK_CARD_DATA.map((val, i) => (
                    <FutureWorkCard
                      label={val.label}
                      value={val.value}
                      description={val.description}
                      isActive={expandedSteps.includes(i)}
                      onClick={() => handleToggle(i)}
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