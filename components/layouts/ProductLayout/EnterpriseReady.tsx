import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  integration: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 24 }} />,
  governance: <AccountTreeRoundedIcon sx={{ fontSize: 24 }} />,
  config: <SettingsSuggestRoundedIcon sx={{ fontSize: 24 }} />,
  devices: <DevicesRoundedIcon sx={{ fontSize: 24 }} />,
  procurement: <HandymanRoundedIcon sx={{ fontSize: 24 }} />,
};

const EnterpriseReady = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: false, amount: 0.2 });

  const renderSpotlightText = (text: string) => {
    if (!text) return null;
    
    const words = text.split(" ");
    const totalLength = text.length;
    const center = totalLength / 2;
    let globalIndex = 0;

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

      const letters = word.split("").map((char, charIndex) => {
        const currentIndex = globalIndex++;
        const distanceFromCenter = Math.abs(currentIndex - center);

        return (
          <Box
            key={charIndex}
            component={motion.span}
            initial={{ opacity: 0.1, scale: 0.8, filter: "blur(4px)" }}
            animate={isHeadingInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: distanceFromCenter * 0.025, 
              ease: "easeOut",
            }}
            sx={{ display: "inline-block" }}
          >
            {char}
          </Box>
        );
      });

      let spaceElement = null;
      if (hasSpace) {
        const spaceIndex = globalIndex++;
        const spaceDist = Math.abs(spaceIndex - center);
        spaceElement = (
          <Box
            component={motion.span}
            initial={{ opacity: 0.1, scale: 0.8, filter: "blur(4px)" }}
            animate={isHeadingInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.4,
              delay: spaceDist * 0.025,
              ease: "easeOut",
            }}
            sx={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {" "}
          </Box>
        );
      }

      return (
        <Box
          key={wordIndex}
          component="span"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {letters}
          {spaceElement}
        </Box>
      );
    });
  };
  const data = homePage.productPage.enterpriseReady;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 6, md: 6, lg: 5 },
        minHeight: { md: "85vh", lg: "75vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Premium Blending */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: "100%", md: "100%", lg: "1000px" },
          maxWidth: { md: "500px", lg: "520px" },
          zIndex: 1,
          opacity: { xs: 0.3, md: 0.85 },
          // "&::after": {
          //   content: '""',
          //   position: "absolute",
          //   inset: 0,
          //   background: {
          //     xs: `linear-gradient(to bottom, ${COLORS.BLACK} 0%, transparent 40%, transparent 60%, ${COLORS.BLACK} 100%)`,
          //     md: `linear-gradient(to right, transparent 60%, ${COLORS.BLACK} 100%), linear-gradient(to bottom, ${COLORS.BLACK} 0%, transparent 10%, transparent 90%, ${COLORS.BLACK} 100%)`,
          //   },
          // },
        }}
      >
        {/* <Box
          component="img"
          src={data.img}
          alt="Enterprise operations"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        /> */}
      </Box>

      <Box
        sx={{
          width: { xs: "90%", md: "85%", lg: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid 
          container 
          justifyContent="flex-end"
          ref={cardsRef}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
        >
          <Grid size={{ xs: 12, md: 7.5, lg: 7 }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: "1.1", md: "1.1" },
                fontSize: { xs: 22, md: 32, lg: 36 },
                mb: { xs: 4, md: 3, lg: 2 },
              }}
            >
              {data.title.split(".").map((text, i) => (
                <React.Fragment key={i}>
                  {renderSpotlightText(text)}
                  {i < data.title.split(".").length - 1 && (
                    <Box
                      component="br"
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3, lg: 4.5 }}>
              {(data.points as any[]).map((point, index) => (
                <Grid
                  key={point.title}
                  size={{ xs: 12, sm: 6 }}
                  component={motion.div}
                  variants={cardVariants}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 1, md: 1.5 },
                    }}
                  >
                    <Box
                      sx={{
                        color: COLORS.PRIMARY_GREEN,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: 36, md: 44 },
                        height: { xs: 36, md: 44 },
                        borderRadius: "50%",
                        bgcolor: "rgba(204, 249, 25, 0.05)",
                        border: "1px solid rgba(204, 249, 25, 0.15)",
                        boxShadow: "0 0 15px rgba(204, 249, 25, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(204, 249, 25, 0.1)",
                          boxShadow: "0 0 25px rgba(204, 249, 25, 0.15)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      {ICON_MAP[point.icon]}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 14, md: 15 },
                          textTransform: "uppercase",
                          lineHeight: "1.2",
                          mb: 0.5,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: COLORS.TEXT_MUTED,
                          fontSize: { xs: 12, md: 13 },
                          lineHeight: "1.3",
                          opacity: 0.8,
                          maxWidth: "320px",
                        }}
                      >
                        {point.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EnterpriseReady;
