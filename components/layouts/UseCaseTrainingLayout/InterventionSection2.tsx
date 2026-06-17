"use client";
import { useState, useRef } from "react";
import { Box, Button, Grid, Typography, Stack, alpha } from "@mui/material";

import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import ScrollRevealText from "@/components/widgets/ScrollRevealText";

// VARIANTS FOR THE RIGHT SIDE TEXT
const blurInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

interface Props {
  data: UseCaseData["intervention"];
}

const MATURITY_LEVELS = [
  "Standard Guidance",
  "Advanced Enablement",
  "Autonomous Excellence",
];

const InterventionSection2 = ({ data }: Props) => {
  const isSideBySide = data.layout === "side-by-side";

  // ADDED: Ref and InView hook for the Vertical Blinds
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-100px" });

  // Word-Wrapper Logic
  /*
  const renderVerticalBlindsText = (text: string) => {
    if (!text) return null;

    // Split into words first
    const words = text.split(" ");
    const totalLength = text.length; // Keep total string length for the wave math
    let globalIndex = 0; // Tracks the absolute character index

    return words.map((word, wordIndex) => {
      const hasSpace = wordIndex !== words.length - 1;

      // 1. Animate the letters of the current word
      const letters = word.split("").map((char, charIndex) => {
        const currentIndex = globalIndex++;
        const distanceFromEdge = Math.min(currentIndex, totalLength - 1 - currentIndex);

        return (
          <Box
            key={charIndex}
            component={motion.span}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + (distanceFromEdge * 0.04),
              ease: "easeOut",
            }}
            sx={{
              display: "inline-block",
              transformOrigin: "center",
            }}
          >
            {char}
          </Box>
        );
      });

      // 2. Add the space back after the word (and animate it so the timing stays perfect)
      let spaceElement = null;
      if (hasSpace) {
        const spaceIndex = globalIndex++;
        const spaceDist = Math.min(spaceIndex, totalLength - 1 - spaceIndex);
        spaceElement = (
          <Box
            component={motion.span}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + (spaceDist * 0.04),
              ease: "easeOut",
            }}
            sx={{ display: "inline-block", transformOrigin: "center", whiteSpace: "pre" }}
          >
            {" "}
          </Box>
        );
      }

      // 3. Wrap the letters and the space in a container that refuses to break mid-word
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
  */

  // if (isSideBySide) {
  //   return (
  //     <Box
  //       sx={{
  //         bgcolor: COLORS.WHITE,
  //         color: COLORS.BLACK,
  //         py: { xs: 6, md: 7 },
  //         position: "relative",
  //         overflow: "hidden",
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           width: { xs: "95%", md: "90%", lg: "84%" },
  //           maxWidth: 1200,
  //           mx: "auto",
  //           px: { xs: 2, md: 0 },
  //         }}
  //       >
  //         {/* Top Row: Title, Desc1, Desc2 */}
  //         <Box
  //           sx={{ maxWidth: { xs: "100%", md: "90%" }, mb: { xs: 5, md: 8 } }}
  //         >
  //           <Typography
  //             sx={{
  //               fontFamily: din.style.fontFamily,
  //               fontWeight: 900,
  //               textTransform: "uppercase",
  //               fontSize: { xs: 28, md: 36 },
  //               lineHeight: 1.1,
  //               mb: 4,
  //               color: COLORS.BLACK,
  //               letterSpacing: "-0.5px",
  //             }}
  //           >
  //             {data.title}
  //           </Typography>
  //           <Box
  //             sx={{
  //               display: "flex",
  //               flexDirection: "column",
  //               gap: 2,
  //             }}
  //           >
  //             <Typography
  //               sx={{
  //                 fontFamily: helvetica.style.fontFamily,
  //                 fontSize: { xs: 16, md: 18 },
  //                 lineHeight: 1.6,
  //               }}
  //             >
  //               {data.description1}
  //             </Typography>
  //             <Typography
  //               sx={{
  //                 fontFamily: helvetica.style.fontFamily,
  //                 fontSize: { xs: 16, md: 18 },
  //                 lineHeight: 1.6,
  //               }}
  //             >
  //               {data.description2}
  //             </Typography>
  //           </Box>
  //         </Box>
  //         <Grid container spacing={{ xs: 5, md: 5 }} alignItems="flex-start">
  //           <Grid size={{ xs: 12, md: 5 }}>
  //             <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
  //               {data.description3 && (
  //                 <Typography
  //                   sx={{
  //                     fontFamily: helvetica.style.fontFamily,
  //                     fontSize: { xs: 16, md: 18 },
  //                     lineHeight: 1.6,
  //                     textAlign: "justify",
  //                   }}
  //                 >
  //                   {data.description3}
  //                 </Typography>
  //               )}
  //               {data.description4 && (
  //                 <Typography
  //                   sx={{
  //                     fontFamily: helvetica.style.fontFamily,
  //                     fontSize: { xs: 16, md: 18 },
  //                     lineHeight: 1.6,
  //                     textAlign: "justify",
  //                   }}
  //                 >
  //                   {data.description4}
  //                 </Typography>
  //               )}
  //             </Box>
  //           </Grid>

  //           {/* Right Side: 3 Vertical Image Cards or single image */}
  //           <Grid size={{ xs: 12, md: 7 }}>
  //             {data.cards && data.cards.length > 0 ? (
  //               <Box>
  //                 <Box
  //                   sx={{
  //                     display: "flex",
  //                     gap: 2,
  //                     height: { xs: 180, md: 200 },
  //                   }}
  //                 >
  //                   {data.cards.map((card, index) => (
  //                     <Box
  //                       key={index}
  //                       sx={{
  //                         flex: 1,
  //                         minWidth: 0,
  //                         position: "relative",
  //                         borderRadius: "16px",
  //                         overflow: "hidden",
  //                         background: COLORS.CHARCOAL,
  //                         display: "flex",
  //                         flexDirection: "column",
  //                         alignItems: "center",
  //                         justifyContent: "center",
  //                         p: 2.5,
  //                         border: "1px solid",
  //                         borderColor: "rgba(255,255,255,0.05)",
  //                         boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  //                       }}
  //                     >
  //                       <Typography
  //                         sx={{
  //                           fontFamily: din.style.fontFamily,
  //                           fontWeight: 900,
  //                           fontSize: { xs: 14, md: 16 },
  //                           textTransform: "uppercase",
  //                           lineHeight: 1.1,
  //                           color: COLORS.PRIMARY_GREEN,
  //                           letterSpacing: "-0.5px",
  //                           textAlign: "center",
  //                           maxWidth: 160,
  //                           zIndex: 3,
  //                         }}
  //                       >
  //                         {card.label}
  //                       </Typography>
  //                     </Box>
  //                   ))}
  //                 </Box>
  //               </Box>
  //             ) : (
  //               <Box>
  //                 <Box
  //                   component="img"
  //                   src={data.image}
  //                   alt={data.title}
  //                   sx={{ width: "100%", height: "auto", borderRadius: "24px" }}
  //                 />
  //               </Box>
  //             )}
  //           </Grid>
  //         </Grid>
  //       </Box>
  //     </Box>
  //   );
  // }

  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        color: COLORS.BLACK,
        pt: { xs: 5, md: 7 },
        pb: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "90%", lg: "84%" },
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* Left Side: Title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              ref={headingRef}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 32, md: 36 },
                lineHeight: 1.1,
                color: COLORS.BLACK,
                textTransform: "uppercase",
                letterSpacing: "-0.5px",
              }}
            >
              {/* {renderVerticalBlindsText(data.title)} */}
              <ScrollRevealText text={data.title} />
            </Typography>
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
                component={motion.p}
                variants={blurInVariant}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.8)",
                  textAlign: "justify",
                }}
              >
                {data.description1}
              </Typography>
              {data.description2 && (
                <Typography
                  component={motion.p}
                  variants={blurInVariant}
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.8)",
                    textAlign: "justify",
                  }}
                >
                  {data.description2} {data.description3 && data.description3}
                </Typography>
              )}
              {data.description3 && (
                <Typography
                  component={motion.p}
                  variants={blurInVariant}
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.6)",
                    mb: { xs: 6, md: 2 },
                    maxWidth: 650,
                  }}
                >
                  {data.description3}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {data.cards && data.cards.length > 0 && (
          <Box sx={{ mt: { xs: 8, md: 5 }, mb: 4, position: "relative" }}>
            <Grid 
              component={motion.div}
              container 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              spacing={{ xs: 6, md: 4 }}>
              {data.cards.map((card, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, md: 4 }}
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    component={motion.div}
                    variants={blurInVariant}
                    sx={{

                      width: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                      background: COLORS.CHARCOAL,
                      p: { xs: 2.5 },
                      height: "100%",
                      minHeight: 100,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid",
                      borderColor: "rgba(255,255,255,0.05)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        background: COLORS.PRIMARY_GREEN,
                        borderColor: COLORS.PRIMARY_GREEN,
                        "& .card-label": {
                          color: COLORS.BLACK,
                        }
                      }
                    }}
                  >
                    <Typography
                      className="card-label"
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontWeight: 900,
                        fontSize: { xs: 16, md: 18 },
                        textTransform: "uppercase",
                        lineHeight: 1.1,
                        color: COLORS.PRIMARY_GREEN,
                        letterSpacing: "-0.5px",
                        textAlign: "center",
                        zIndex: 3,
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      {card.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {!data.cards?.length && data.description3 && (
          <Typography
            sx={{
              mt: 6,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.6,
              color: "rgba(0,0,0,0.8)",
              maxWidth: "100%",
            }}
          >
            {data.description3}
          </Typography>
        )}
      </Box>

      {/* Tablet Area with Overlap Transition */}
      <Box sx={{ position: "relative", mt: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: COLORS.WHITE,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: COLORS.BLACK,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", md: "60%", lg: "70%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            variants={blurInVariant}
            viewport={{ once: false, margin: "-50px" }}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 750,
              height: { xs: 250, md: 400, lg: 575 },
              display: "block",
              borderRadius: { xs: 4, md: "24px" },
              filter: `drop-shadow(0px 30px 60px rgba(0,0,0,0.2))`,
            }}
          >
            <Image
              src={data.image}
              alt={`${data.title} interface`}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection2;
