"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  data: UseCaseData["intervention"];
}
const InterventionSection = ({ data }: Props) => {
  const isSideBySide = data.layout === "side-by-side";

  if (isSideBySide) {
    return (
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
        sx={{
          bgcolor: COLORS.WHITE,
          color: COLORS.BLACK,
          py: { xs: 8, md: 8 },
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Top Row: Title, Desc1, Desc2 */}
          <Box
            sx={{ maxWidth: { xs: "100%", md: "90%" }, mb: { xs: 5, md: 8 } }}
          >
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 36 },
                lineHeight: { xs: "35px", md: "42px" },
                mb: 4,
                color: COLORS.BLACK,
              }}
            >
              {data.title}
            </Typography>
            <Box
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: { xs: "28px", md: 1.5 },
                }}
              >
                {data.description1}
              </Typography>
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: { xs: "28px", md: "28px" },
                }}
              >
                {data.description2}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Row: Desc3/Desc4 (Left) | Cards (Right) */}
          <Grid container spacing={{ xs: 5, md: 5 }} alignItems="flex-start">
            {/* Left Side: Text Content */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box 
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                component={motion.div}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {data.description3 && (
                  <Typography
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: { xs: "28px", md: 1.5 },
                      textAlign: "justify",
                    }}
                  >
                    {data.description3}
                  </Typography>
                )}
                {data.description4 && (
                  <Typography
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18, lg: 18 },
                      lineHeight: { xs: "28px", md: "28px" },
                      textAlign: "justify",
                    }}
                  >
                    {data.description4}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Right Side: 3 Vertical Image Cards or single image */}
            <Grid size={{ xs: 12, md: 7 }}>
              {data.cards && data.cards.length > 0 ? (
                <Box>
                  <Box
                    component={motion.div}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.15 },
                      },
                    }}
                    sx={{
                      display: "flex",
                      gap: 2,
                      height: { xs: 360, md: 440 },
                    }}
                  >
                    {data.cards.map((card, index) => (
                      <Box
                        key={index}
                        component={motion.div}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9, y: 30 },
                          visible: { opacity: 1, scale: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                        sx={{
                          flex: 1,
                          minWidth: 0,
                          position: "relative",
                          borderRadius: "16px",
                          overflow: "hidden",
                          cursor: "pointer",
                          "&:hover .hover-btn": {
                            opacity: 1,
                            transform: "translateX(-50%) scale(1)",
                          },
                        }}
                      >
                        <Box
                         sx={{
                           position: "relative",
                           width: "100%",
                           height: "100%",
                         }}
                       >
                         <Image
                           src={card.image}
                           alt={card.label}
                           fill
                           style={{ objectFit: "cover" }}
                         />
                       </Box>
                        {/* Dark Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
                          }}
                        />
                        {/* Top center line pin */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 2,
                            height: 70,
                            bgcolor: COLORS.WHITE,
                            zIndex: 1,
                          }}
                        />
                        {/* Rotated Label - just below top line */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 160,
                            left: "50%",
                            transform: "translateX(-50%) rotate(-90deg)",
                            transformOrigin: "center center",
                            whiteSpace: "nowrap",
                            zIndex: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: COLORS.WHITE,
                              fontFamily: din.style.fontFamily,
                              fontWeight: 900,
                              fontSize: { xs: 13, md: 15 },
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              fontStyle: "italic",
                            }}
                          >
                            {card.label}
                          </Typography>
                        </Box>
                        {/* Hover Button - pinned at bottom */}
                        <Button
                          className="hover-btn"
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            left: "50%",
                            transform: "translateX(-50%) scale(0.8)",
                            opacity: 0,
                            transition: "all 0.3s ease",
                            bgcolor: COLORS.PRIMARY_GREEN,
                            color: COLORS.BLACK,
                            borderRadius: 99,
                            px: 3,
                            py: 1,
                            fontFamily: din.style.fontFamily,
                            fontWeight: 900,
                            fontSize: 13,
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                            overflow: "hidden",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: "-75%",
                              width: "50%",
                              height: "100%",
                              background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent)",
                              transform: "skewX(-20deg)",
                            },
                            "&:hover::after": {
                              left: "125%",
                              transition: "left 0.6s ease",
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Box
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Box
                 sx={{
                   position: "relative",
                   width: "100%",
                   height: 400,
                   borderRadius: "24px",
                   overflow: "hidden",
                 }}
               >
                 <Image
                   src={data.image}
                   alt={data.title}
                   fill
                   style={{ objectFit: "cover" }}
                 />
               </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
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
      sx={{
        bgcolor: COLORS.WHITE,
        color: COLORS.BLACK,
        pt: { xs: 6, md: 10 },
        pb: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* Left Side: Title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: 32, md: 36 },
                lineHeight: { xs: "35px", md: "42px" },
                color: COLORS.BLACK,
                textTransform: "uppercase",
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: { xs: "28px", md: "28px" },
                  color: COLORS.BLACK,
                  textAlign: "justify",
                }}
              >
                {data.description1}
              </Typography>
              {data.description2 && (
                <Typography
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: { xs: "28px", md: "28px" },
                    color: COLORS.BLACK,
                    textAlign: "justify",
                  }}
                >
                  {data.description2}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Third Description paragraph or Variants Cards */}
        {data.cards && data.cards.length > 0 ? (
          <Box 
            sx={{ mt: 5, mb: 4 }}
            component={motion.div}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {data.description3 && (
              <Typography
                component={motion.div}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: { xs: "28px", md: 1.5 },
                  color: COLORS.BLACK,
                  mb: 5,
                  textAlign: "justify",
                }}
              >
                {data.description3}
              </Typography>
            )}
            <Grid 
              container 
              spacing={4} 
              justifyContent="center"
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {data.cards.map((card, index) => (
                <Grid 
                  size={{ xs: 12, sm: 6, md: 4 }} 
                  key={index}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      minHeight: { xs: 80, md: 100 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 3,
                      borderRadius: "20px",
                      bgcolor: "transparent",
                      border: "1px solid rgba(184, 237, 26, 0.9)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "default",
                      "&:hover": {
                        borderColor: COLORS.PRIMARY_GREEN,
                        transform: "translateY(-5px)",
                        boxShadow: `0 10px 30px rgba(0,0,0,0.05)`,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        fontWeight: 900,
                        fontSize: { xs: 16, md: 18 },
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: COLORS.BLACK,
                        textAlign: "center",
                      }}
                    >
                      {card.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          data.description3 && (
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              sx={{
                mt: 6,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                lineHeight: { xs: "28px", md: 1.5 },
                color: COLORS.BLACK,
                maxWidth: "100%",
              }}
            >
              {data.description3}
            </Typography>
          )
        )}
      </Box>

      {/* Tablet Area with Overlap Transition */}
      <Box 
        sx={{ position: "relative", mt: { xs: 8, md: 8 } }}
        component={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Split - Top White, Bottom Black */}
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

        {/* The Tablet Image Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", md: "70%", lg: "80%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 900,
              height: "auto",
              display: "block",
              borderRadius: { xs: 4, md: "24px" },
              filter: `drop-shadow(0px 30px 60px ${COLORS.BLACK_ALPHA_30})`,
            }}
          >
            <Image
              src={data.image}
              alt="Tablet Intervention"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection;
