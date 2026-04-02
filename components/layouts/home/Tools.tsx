import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import ToolsLeftSection from "./components/tools/ToolsLeftSection";
import ToolsRightSection from "./components/tools/ToolsRightSection";

const Tools = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        height: { xs: "auto", md: "110vh" },
        minHeight: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          py: { xs: 4, md: 10 },
          px: { xs: 2, md: 4 },
          bgcolor: COLORS.WHITE,
          borderRadius: "15px",
          width: { xs: "90%", md: "96%" },
          maxWidth: "1300px",
        }}
      >
        <Container maxWidth="lg" disableGutters>
          {/* TOP SECTION */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            {/* Top Line of Heading */}
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 32, md: 56 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.1,
                color: COLORS.BLACK,
                textAlign: { xs: "center", md: "left" },
                display: "block",
              }}
            >
              THE WORK OF MANY TOOLS.
            </Typography>

            {/* Bottom Line of Heading + Stretching Divider + Subheading */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-end" }}
              spacing={{ xs: 2, md: 3 }}
              sx={{ width: "100%", mt: { xs: 1, md: 0 } }}
            >
              <Typography
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontSize: { xs: 32, md: 56 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  color: COLORS.BLACK,
                  textAlign: { xs: "center", md: "left" },
                  whiteSpace: "nowrap",
                }}
              >
                ONE AR-ENABLED PLATFORM
              </Typography>

              {/* Stretching Divider - only visible horizontally on desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  borderBottom: `2px solid ${COLORS.BLACK}`,
                  minWidth: "50px",
                  display: { xs: "none", md: "block" },
                  position: "relative",
                  top: "-12px",
                }}
              />

              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 24 },
                  lineHeight: { xs: "24px", md: "28px" },
                  color: COLORS.BLACK,
                  textAlign: { xs: "center", md: "right" },
                  whiteSpace: "pre-line",
                  minWidth: "max-content",
                  pb: { xs: 0, md: "8px" },
                }}
              >
                Augmenting {"\n"}Human Productivity.
              </Typography>
            </Stack>
          </Box>

          {/* BOTTOM SECTION */}
          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            sx={{ mt: { xs: 4, md: 8 } }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <ToolsLeftSection {...homePage.tools.leftSection} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 } }>
              <ToolsRightSection {...homePage.tools.rightSection}  />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Tools;
