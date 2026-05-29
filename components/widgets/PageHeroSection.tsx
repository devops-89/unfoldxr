"use client";

import BlurText from "./BlurText";
import SplitText from "./SplitText";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useDemoModal } from "../context/DemoModalContext";
import { motion } from "framer-motion";

interface ButtonConfig {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface PageHeroSectionProps {
  image: string | StaticImageData;
  titleOutlined?: string;
  title: string;
  subtitle?: string;
  description?: string;
  titleMaxWidth?: number | string;
  overlayOpacity?: number;
  primaryBtn?: ButtonConfig;
  secondaryBtn?: ButtonConfig;
  objectPosition?: any;
}
const PageHeroSection = ({
  image,
  titleOutlined,
  title,
  subtitle,
  description,
  titleMaxWidth,
  overlayOpacity = 0.4,
  primaryBtn,
  secondaryBtn,
  objectPosition = "center",
}: PageHeroSectionProps) => {
  const { openModal } = useDemoModal();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        color: COLORS.WHITE,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
    <Box
      component={motion.div}
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
  <Image
    src={image}
    alt={title}
    fill
    style={{
      objectFit: "cover",
      objectPosition: objectPosition,
    }}
    priority
  />
  </Box>

      {/* Dark Overlay */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1 }}
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1,
        }}
      />

      <Box
        component={motion.div}
        aria-hidden
        initial={{ x: "-120%", opacity: 0 }}
        whileInView={{ x: "120%", opacity: [0, 0.7, 0] }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 2.8, delay: 0.7, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(105deg, transparent 35%, rgba(182,236,26,0.22) 50%, transparent 65%)",
        }}
      />

      {/* Content */}
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.25,
              staggerChildren: 0.12,
            },
          },
        }}
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "100%", md: "80%" },
          boxSizing: "border-box",
          mx: "auto",
          pt: { xs: 12, md: 18 },
          pb: { xs: 8, md: 12 },
          pl: { xs: 0, md: 2 },
          px: { xs: 3, md: 0 },
        }}
      >
        {titleOutlined && (
          <Typography
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 34 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 26, md: 50, lg: 36 },
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: { xs: "35px", md: "42px" },
              textTransform: "uppercase",
              WebkitTextStrokeWidth: { xs: "1px", md: "2px" },
              WebkitTextStrokeColor: "#FFF",
              color: "transparent",
            }}
          >
            {titleOutlined}
          </Typography>
        )}

        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 26, md: 50, lg: 36 },
            lineHeight: { xs: "35px", md: "42px" },
            maxWidth: titleMaxWidth || 1050,
            whiteSpace: "pre-line",
            width: { xs: "100%", lg: "70%" },
          }}
        >
          <BlurText
            text={title}
            animateBy="words"
            direction="top"
          />
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 20, md: 28, lg: 18 },
              lineHeight: { xs: "35px", md: 1.1 },
              mt: 3,
              maxWidth: 800,
            }}
          >
            <SplitText text={subtitle} splitType="lines" delay={50} globalDelay={0.5} />
          </Typography>
        )}

        {description && (
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 16, md: 26, lg: 18 },
              lineHeight: { xs: "28px", md: "20px" },
              letterSpacing: "0.52px",
              mt: { xs: 2, md: 1 },
              maxWidth: 1000,
              textTransform: "none",
              color: COLORS.WHITE,
              width: { xs: "100%", md: "50%" },
            }}
          >
           <SplitText text={description} splitType="lines" delay={30} globalDelay={0.9} />
          </Typography>
        )}

        {(primaryBtn || secondaryBtn) && (
          <Box
            component={motion.div}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 1.3 }}
            sx={{
              mt: { xs: 4, md: 5 },
              display: "flex",
              gap: 2.5,
              flexWrap: "wrap",
            }}
          >
            {primaryBtn && (
              <Button
                href={primaryBtn.href}
                onClick={
                  primaryBtn.onClick ||
                  (["demo", "expert", "specialist", "partner"].some((kw) =>
                    primaryBtn.label.toLowerCase().includes(kw),
                  )
                    ? () => openModal("hero")
                    : undefined)
                }
                sx={{
                  bgcolor: COLORS.PRIMARY_GREEN,
                  color: COLORS.BLACK,
                  borderRadius: 99,
                  px: { xs: 2.5, md: 4 },
                  py: 1.2,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: 14, md: 18, lg: 16 },
                  textTransform: "none",
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
                {primaryBtn.label}
              </Button>
            )}
            {secondaryBtn && (
              <Button
                variant="outlined"
                href={secondaryBtn.href}
                onClick={
                  secondaryBtn.onClick ||
                  (["demo", "expert", "specialist", "partner"].some((kw) =>
                    secondaryBtn.label.toLowerCase().includes(kw),
                  )
                    ? () => openModal("hero")
                    : undefined)
                }
                sx={{
                  borderColor: COLORS.PRIMARY_GREEN,
                  color: COLORS.WHITE,
                  borderRadius: 99,
                  px: { xs: 2.5, md: 3 },
                  py: 1,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: 14, md: 16, lg: 16 },
                  textTransform: "none",
                  "&:hover": {
                    borderColor: COLORS.PRIMARY_HOVER,
                    bgcolor: "rgba(162,211,37,0.08)",
                  },
                }}
              >
                {secondaryBtn.label}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PageHeroSection;
