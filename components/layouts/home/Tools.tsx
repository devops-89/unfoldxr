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
import { motion } from "framer-motion";

const Tools = () => {
  const { openModal } = useDemoModal();
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "95%", lg: "90%" },
          maxWidth: 1600,
          mx: "auto",
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            py: { xs: 4, md: 4 },
            px: { xs: 4, sm: 6, md: 10 },
            bgcolor: COLORS.WHITE,
            borderRadius: "45px",
          }}
        >
          {/* TOP SECTION */}
          <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ mb: { xs: 4, md: 6 } }}>
            {/* Top Line of Heading */}
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: "35px", md: "48px" },
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
                  fontSize: { xs: 28, md: 36 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: { xs: "35px", md: "52px" },
                  color: COLORS.BLACK,
                  textAlign: { xs: "center", md: "left" },
                  whiteSpace: { xs: "normal", md: "nowrap" },
                }}
              >
                ONE PLATFORM
              </Typography>

              {/* Stretching Divider - only visible horizontally on desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  borderBottom: `2px solid ${COLORS.BLACK}`,
                  minWidth: "50px",
                  display: { xs: "none", md: "block" },
                  position: "relative",
                  top: "-16px",
                }}
              />

              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: { xs: "28px", md: "28px" },
                  letterSpacing: "0.52px",
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
            spacing={{ xs: 3, md: 8 }}
            sx={{ mt: { xs: 4, md: 4 } }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <Grid 
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            >
              <ToolsLeftSection
                {...homePage.tools.leftSection}
                onCtaClick={() => openModal("tools")}
              />
            </Grid>

            <Grid 
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            >
              <ToolsRightSection {...homePage.tools.rightSection} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;
