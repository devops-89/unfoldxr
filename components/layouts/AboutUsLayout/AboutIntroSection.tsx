"use client";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion } from "framer-motion";

const AboutIntroSection = () => (
  <Box
    component={motion.div}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.15 }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 },
      },
    }}
    sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 10 } }}
  >
    <Container
      maxWidth={false}
      sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
    >
      <Card
        component={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          borderRadius: { xs: 3, md: "40px" },
          boxShadow: "none",
          bgcolor: COLORS.WHITE,
          pb: { xs: 6, md: 6, lg: 8 },
        }}
      >
        <CardContent
          sx={{ px: { xs: 3, md: 10 }, py: { xs: 4, md: 10, lg: 10 } }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontSize: { xs: 34, md: 36, lg: 36 },
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: "52px",
                  fontFamily: din.style.fontFamily,
                  color: COLORS.BLACK,
                }}
              >
                {aboutPage.introSection.heading}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 7 }}
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <Stack spacing={4}>
                {aboutPage.introSection.paragraphs.map((text, idx) => (
                  <Typography
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    key={idx}
                    sx={{
                      fontSize: { xs: 18, md: 18, lg: 18 },
                      lineHeight: "28px",
                      fontWeight: 400,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      textAlign: "left",
                    }}
                  >
                    {text}
                  </Typography>
                ))}
                <Typography
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    fontSize: { xs: 24, md: 18, lg: 18 },
                    lineHeight: "28px",
                    fontWeight: 700,
                    fontFamily: helvetica.style.fontFamily,
                    color: COLORS.BLACK,
                    textAlign: "left",
                    mt: { xs: 2, md: 1 },
                  }}
                >
                  {aboutPage.introSection.highlight}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  </Box>
);
export default AboutIntroSection;
