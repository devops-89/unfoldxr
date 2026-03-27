import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import ToolsLeftSection from "./components/tools/ToolsLeftSection";
import ToolsRightSection from "./components/tools/ToolsRightSection";

// Assets
import toolsTeam from "@/images/banner/homePage/tools/tools-team.png";
import aiPowered from "@/images/banner/homePage/tools/ai-powered.png";
import augmenting from "@/images/banner/homePage/tools/augmenting.png";
import futureWork from "@/images/banner/homePage/tools/future-work.png";
import support from "@/images/banner/homePage/tools/support.png";

const Tools = () => {
  return (
    <Box
  sx={{
    backgroundColor: COLORS.BLACK,
    height: { xs: "auto", md: "100vh" }, // ✅ fix overflow
    display: "flex",
    alignItems: { xs: "flex-start", md: "center" },
    justifyContent: "center",
    py: { xs: 6, md: 20 }, // ✅ reduce mobile padding
  }}
>
  <Box sx={{ py: { xs: 4, md: 10 }, bgcolor: COLORS.WHITE, borderRadius: 4, width:{xs:"90%",md:"auto"} }}>
    <Container maxWidth="lg">

      {/* TOP SECTION */}
      <Grid container alignItems="flex-end" spacing={{ xs: 2, md: 0 }}>
        
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 28, md: 50 }, // ✅ responsive
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: COLORS.BLACK,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {homePage.tools.heading}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ mt: 3, mb: 5 }}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Divider
              sx={{
                width: { xs: 60, md: 100 },
                borderBottomWidth: 2,
                borderColor: COLORS.BLACK,
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 14, md: 18 },
                color: COLORS.BLACK,
                textAlign: { xs: "center", md: "right" },
                width: { xs: "auto", md: 200 },
              }}
            >
              {homePage.tools.subHeading}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* BOTTOM SECTION */}
      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: {xs:0,md:6},mb:6  }}>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <ToolsLeftSection {...homePage.tools.leftSection} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ToolsRightSection {...homePage.tools.rightSection} />
        </Grid>

      </Grid>
    </Container>
  </Box>
</Box>
  );
};

export default Tools;
