"use client";
import { useState } from "react";
import { Box, Button, Grid, Typography, Stack, alpha } from "@mui/material";

import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { motion } from "framer-motion";

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
      component={motion.section}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
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
          <Grid
            size={{ xs: 12, md: 5 }}
            component={motion.div}
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <Typography
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
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Description */}
          <Grid
            size={{ xs: 12, md: 7 }}
            component={motion.div}
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.08 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
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
              container
              spacing={{ xs: 6, md: 4 }}
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {data.cards.map((card, index) => (
                <Grid
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 34, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={index}
                  size={{ xs: 12, md: 4 }}
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ y: -8, scale: 1.025 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
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
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(110deg, transparent 25%, rgba(182,236,26,0.18), transparent 72%)",
                        transform: "translateX(-120%)",
                        transition: "transform 0.65s ease",
                      },
                      "&:hover::after": {
                        transform: "translateX(120%)",
                      },
                      "& > *": {
                        position: "relative",
                        zIndex: 1,
                      },
                    }}
                  >
                    <Typography
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
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            whileHover={{ y: -10, scale: 1.015 }}
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
              alt="Tablet Intervention"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection2;
