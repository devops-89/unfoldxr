"use client";

import Ava3DCanvas from "@/components/widgets/Ava3DCanvas";
import MeetAvaImg from "@/images/Product/MeetAva.png";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MeetAva = () => {
  const data = homePage.productPage.meetAva;
  const width = 3.2;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10, lg: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            width: { xs: "90%", md: "85%", lg: "83%" },
            mx: "auto",
            position: "relative",
            zIndex: 2,
          }}
      >
        <Grid 
          container 
          spacing={{ xs: 6, md: 8 }} 
          alignItems="flex-start"
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              transition: {
                delayChildren: 0.15,
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <Grid
            size={{ xs: 12, md: 6.5 }}
          >
            <Stack spacing={4}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 28, md: 40, lg: 48 },
                    lineHeight: { xs: "35px", md: "48px", lg: "52px" },
                    maxWidth: "100%",
                    whiteSpace: "pre-line",
                  }}
                >
                  {data.title}
                </Typography>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18, lg: 19 },
                    lineHeight: { xs: "28px", md: "32px" },
                    color: "rgba(255, 255, 255, 0.7)",
                    maxWidth: 720,
                    letterSpacing: "0.52px",
                  }}
                >
                  {data.description.replace("The perfect work buddy.", "")}
                  <Box
                    component="span"
                    sx={{ fontWeight: "bold", color: COLORS.WHITE }}
                  >
                    The perfect work buddy.
                  </Box>
                </Typography>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Box>
                  <Button
                    href={data.ctaLink}
                    sx={{
                      bgcolor: COLORS.PRIMARY_GREEN,
                      color: COLORS.BLACK,
                      borderRadius: 99,
                      px: { xs: 4, md: 5 },
                      py: 1.5,
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: 700,
                      fontSize: 16,
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: COLORS.PRIMARY_HOVER,
                        boxShadow: "none",
                      },
                    }}
                  >
                    {data.cta}
                  </Button>
                </Box>
              </motion.div>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              position: "relative",
              height: { xs: 350, md: 520, lg: 430 },
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              overflow: "visible",
              pl: { md: 2, lg: 3 }, // space between text and image
            }}
          >
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, scale: 0.85, rotate: -5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                },
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.035, rotate: 1.5 }}
              sx={{
                width: "100%",
                height: { xs: 350, md: 520, lg: 430 },
                position: "relative",
                overflow: "visible",
                filter: "drop-shadow(0px 0px 80px rgba(162, 211, 37, 0.25))",
              }}
            >
              <Box
                component={motion.div}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{ width: "100%", height: "100%" }}
              >
                <Ava3DCanvas imageSrc={MeetAvaImg.src} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default MeetAva;

