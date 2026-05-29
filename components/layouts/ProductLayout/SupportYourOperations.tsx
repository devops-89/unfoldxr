"use client";

import { useDemoModal } from "@/components/context/DemoModalContext";
import { COLORS } from "@/utils/enum";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import EastIcon from "@mui/icons-material/East";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const SupportYourOperations = () => {
  const data = homePage.productPage.supportOperations;
  const { openModal } = useDemoModal();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      sx={{
        background: `linear-gradient(to bottom, ${COLORS.BLACK} 70%, ${COLORS.WHITE} 30%)`,
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "95%", md: "90%", lg: "80%" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* TEXT CONTENT */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          sx={{
            mb: { xs: 6, md: 8 },
            maxWidth: "900px",
            alignSelf: "flex-start",
          }}
        >
          {/* HEADING */}
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: { xs: "1.2", md: "1.1" },
              fontSize: { xs: 24, md: 36, lg: 40 },
              color: COLORS.WHITE,
              mb: 4,
              textAlign: "left",
            }}
          >
            {data.lifecycle.title}
          </Typography>

          {/* STAGES */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            {data.lifecycle.stages.map((stage, i) => (
              <Typography
                key={i}
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                }}
                whileHover={{
                  x: 8,
                  color: "#A2D325",
                }}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  color: COLORS.WHITE,
                  opacity: 0.9,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {stage}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* IMAGE / VIDEO CONTAINER */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.92, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
          }}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: { xs: 4, md: 8 },
            overflow: "hidden",
            position: "relative",
            boxShadow: "0px 20px 60px rgba(0,0,0,0.5)",
            aspectRatio: { xs: "16/10", md: "16/9" },
            alignSelf: "center",
          }}
        >
          {/* FLOATING GLOW */}
          <Box
            component={motion.div}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(162,211,37,0.35), transparent 70%)",
              top: "-10%",
              right: "-5%",
              filter: "blur(40px)",
              zIndex: 1,
            }}
          />

          {/* FLOATING IMAGE */}
          <Box
            component={motion.div}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <Image
              src={data.lifecycle.bg}
              alt="Operations lifecycle"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>

          {/* DARK OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.25)",
              zIndex: 2,
            }}
          />

          {/* ANIMATED BORDER */}
          <Box
            component={motion.div}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: { xs: 4, md: 8 },
              padding: "2px",
              background:
                "linear-gradient(135deg, rgba(162,211,37,0.7), rgba(0,212,255,0.7), rgba(162,211,37,0.7))",
              backgroundSize: "300% 300%",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          {/* CTA BUTTON */}
          <Box
            component={motion.div}
            
            whileTap={{
              scale: 0.95,
            }}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              bgcolor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "100px",
              pl: 2,
              pr: 3,
              py: 1.3,
              cursor: "pointer",
              transition: "all 0.3s ease",
              zIndex: 4,

              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                boxShadow: "0px 10px 30px rgba(162,211,37,0.3)",
              },
            }}
            onClick={() => openModal("home_hero")}
          >
            <Typography
              component="div"
              sx={{
                color: COLORS.WHITE,
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              Connect to see UnfoldXR in Action

              <motion.div
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                <EastIcon sx={{ fontSize: 16 }} />
              </motion.div>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SupportYourOperations;