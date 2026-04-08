"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import ToolsLeftSection from "./components/tools/ToolsLeftSection";
import ToolsRightSection from "./components/tools/ToolsRightSection";
import { useDemoModal } from "@/components/context/DemoModalContext";

const Tools = () => {
  const { openModal } = useDemoModal();
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
      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 4, md: 10 },
            px: { xs: 4, sm: 6, md: 8 },
            bgcolor: COLORS.WHITE,
            borderRadius: "45px",
          }}
        >
          {/* TOP SECTION */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            {/* Top Line of Heading */}
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 54 },
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
                  fontSize: { xs: 28, md: 54 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  color: COLORS.BLACK,
                  textAlign: { xs: "center", md: "left" },
                  whiteSpace: { xs: "normal", md: "nowrap" },
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
                  minWidth: { xs: "unset", md: "max-content" },
                  pb: { xs: 0, md: "8px" },
                }}
              >
                Augmenting {"\n"}human productivity.
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
              <ToolsLeftSection {...homePage.tools.leftSection} onCtaClick={openModal} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 } }>
              <ToolsRightSection {...homePage.tools.rightSection}  />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Tools;
