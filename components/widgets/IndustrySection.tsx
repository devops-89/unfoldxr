"use client";
import { Box, Container, Typography, alpha } from "@mui/material";
import Link from "next/link";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { MASTER_INDUSTRIES } from "@/utils/constant";
import React from "react";
import { motion } from "framer-motion";

interface IndustrySectionProps {
  title: string;
  description: string;
  bgColor?: string;
  cardBgColor?: string;
  pillBgColor?: string;
  pillTextColor?: string;
  textColor?: string;
}

const IndustrySection = ({
  title,
  description,
  bgColor = "transparent",
  cardBgColor = COLORS.WHITE, // unused now
  pillBgColor = COLORS.BLACK,
  pillTextColor = COLORS.WHITE,
  textColor = COLORS.BLACK,
}: IndustrySectionProps) => {
  return (
    <Box 
        component={motion.div}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        sx={{ 
          backgroundColor: bgColor, 
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(182,236,26,0.55), transparent)",
            transform: "scaleX(0)",
            transformOrigin: "center",
            animation: "industryLineReveal 5s ease-in-out infinite",
          },
          "@keyframes industryLineReveal": {
            "0%, 35%": { transform: "scaleX(0)", opacity: 0 },
            "55%": { transform: "scaleX(1)", opacity: 1 },
            "100%": { transform: "scaleX(1)", opacity: 0 },
          },
          }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
           component={motion.div}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.6, delay: 0.1 }}
           sx={{
             textAlign: "center",
             fontFamily: din.style.fontFamily,
             fontWeight: 900,
             textTransform: "uppercase",
             fontSize: { xs: 24, md: 36 },
             lineHeight: { xs: "35px", md: "52px" },
             color: textColor,
             mb: 2,
           }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18 },
            lineHeight: { xs: "28px", md: "30px" },
            color: textColor,
            maxWidth: 1000,
            mx: "auto",
            mb: { xs: 4, md: 6 },
          }}
        >
          {description}
        </Typography>

        {/* Industry Pills Container */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1.5, md: 2.5 },
          }}
        >
          {MASTER_INDUSTRIES.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.label}
                href={item.url}
                style={{ textDecoration: "none" }}
              >
                <Box
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                     y: -6,
                     scale: 1.04,
                   }}
                   transition={{
                     type: "spring",
                     stiffness: 120,
                     damping: 12,
                   }}
                  sx={{
                    border: textColor === COLORS.WHITE 
                      ? "1px solid rgba(255, 255, 255, 0.15)" 
                      : "1px solid rgba(0, 0, 0, 0.08)",
                    borderRadius: "99px",
                    p: "6px",
                    pr: { xs: 2.5, md: 3.5 },
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, md: 1.5 },
                    minWidth: "fit-content",
                    maxWidth: "100%",
                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",

                    "&:hover": {
                      bgcolor: alpha(COLORS.PRIMARY_GREEN, 0.1),
                      boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
                    },
                    "&:hover .industry-icon": {
                      transform: "rotate(-8deg) scale(1.08)",
                    },
                  }}
                >
                  <Box
                    className="industry-icon"
                    sx={{
                      width: { xs: 26, md: 34 },
                      height: { xs: 26, md: 34 },
                      bgcolor: pillBgColor,
                      borderRadius: "50%",
                      color: pillTextColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "transform 0.25s ease",
                    }}
                  >
                    {IconComponent && <IconComponent sx={{ fontSize: { xs: 14, md: 18 } }} />}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: { xs: 10, md: 16 },
                      lineHeight: { xs: "24px", md: "27px" },
                      color: textColor,
                      letterSpacing: "0.52px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default IndustrySection;
