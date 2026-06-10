"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import { motion, Variants } from "framer-motion";

// VARIANTS 
const blurUpVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, y: 0, filter: "blur(0px)", 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const blurInVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, filter: "blur(0px)",
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const footerVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } // Waits 0.6s before firing!
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Creates the "stepper" effect
  }
};
// END VARIANTS

interface Props {
  data: UseCaseData["knowledge"];
}

const KnowledgeSection = ({ data }: Props) => {
  const isStacked = data.layout === "stacked";

  if (isStacked) {
    return (
      <Box
        sx={{
          bgcolor: COLORS.BLACK,
          color: COLORS.WHITE,
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="flex-end">
            {/* Left Side: Title */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                component={motion.h2}
                variants={blurUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: 26, md: 36 },
                  lineHeight: { xs: "35px", md: "42px" },
                  maxWidth: 800,
                  mb: { xs: 2, md: 2 },
                }}
              >
                {data.title}
              </Typography>
            </Grid>

            {/* Right Side: Items (Paragraphs) */}
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
                  gap: 4 
                  }}
              >
                {data.items.map((item, index) => (
                  <Typography
                    key={index}
                    component={motion.p}
                    variants={blurInVariant}
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 17, md: 18 },
                      lineHeight: { xs: "28px", md: "28px" },
                      color: COLORS.WHITE,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
          {/* Footer Text outside grid to align with total width */}
          {data.footerText && (
            <Typography
              component={motion.p} 
              variants={footerVariant}  
              initial="hidden"   
              whileInView="visible" 
              viewport={{ once: false, margin: "-50px" }}
              sx={{
                mt: { xs: 4, md: 6 },
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 17, md: 18 },
                lineHeight: { xs: "28px", md: "28px" },
                color: COLORS.WHITE,
              }}
            >
              {data.footerText}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 10 }}>
          {/* Left Side: Title */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component={motion.h2}
              variants={blurUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 26, md: 36 },
                lineHeight: { xs: "35px", md: "44px" },
                maxWidth: 600,
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Bullet Points */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              sx={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: 3 
                }}
            >
              {data.items.map((item, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  variants={blurInVariant}
                  sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: COLORS.WHITE,
                      mt: { xs: 1, md: 1.3 },
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: { xs: "28px", md: "28px" },
                      letterSpacing: "0.52px",
                      color: COLORS.WHITE,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        {/* Footer Text outside grid to align with total width */}
        {data.footerText && (
          <Typography
            component={motion.p}
            variants={footerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            sx={{
              mt: { xs: 6, md: 6 },
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              lineHeight: { xs: "28px", md: "28px" },
              color: COLORS.WHITE,
            }}
          >
            {data.footerText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default KnowledgeSection;
