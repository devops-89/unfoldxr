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
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.BLACK,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ py: 10, bgcolor: COLORS.WHITE, borderRadius: 4 }}>
          <Container maxWidth="lg">
            <Grid container alignItems={"flex-end"}>
              <Grid size={7}>
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: 50,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    color: COLORS.BLACK,
                  }}
                >
                  {homePage.tools.heading}
                </Typography>
              </Grid>
              <Grid size={5}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mt: 3, mb: 5 }}
                  justifyContent={"flex-end"}
                >
                  <Divider
                    sx={{
                      width: 100,
                      borderBottomWidth: 2,
                      borderColor: COLORS.BLACK,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 18,
                      color: COLORS.BLACK,
                      textAlign: "right",
                      width: 200,
                    }}
                  >
                    {homePage.tools.subHeading}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            {/* bottom section */}
            <Grid container spacing={4}>
              <Grid size={6}>
                <ToolsLeftSection {...homePage.tools.leftSection} />
              </Grid>

              <Grid size={6}>
                <ToolsRightSection {...homePage.tools.rightSection} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;
