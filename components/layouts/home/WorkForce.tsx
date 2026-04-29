import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WorkforceCard from "./components/WorkForce-Card";
import SplitText from "@/components/widgets/animations/SplitText";

const WorkForce = () => {
  return (
    <Box>
      <Container maxWidth={false} disableGutters>
        <Box
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
          }}
        >
          <Box sx={{ width: "100%" }}>
            {/* Heading */}
            <SplitText
              text={homePage.workforce.heading}
              tag="h2"
              splitType="words"
              delay={40}
              duration={1.2}
              ease="power3.out"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign={{ xs: "center", md: "left" } as any}
              sx={{
                color: "#000",
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 24, md: 36 },
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: { xs: "35px", md: "52px" },
                textTransform: "uppercase",
                wordBreak: "break-word",
              }}
            />

            {/* Description */}
            <SplitText
              text={homePage.workforce.description}
              tag="p"
              splitType="lines"
              delay={100}
              duration={1}
              ease="power3.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign={{ xs: "center", md: "left" } as any}
              sx={{
                color: "#000",
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: 1.4, md: "30px" },
                letterSpacing: "0.52px",
                mt: { xs: 2, md: 2 },
              }}
            />

            {/* Cards */}
            <Grid container sx={{ mt: { xs: 4, md: 10 } }} spacing={4}>
              {homePage.workforce.data.map((val, i) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={i}
                  sx={{
                    mt: { xs: 0, md: 0 },
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
