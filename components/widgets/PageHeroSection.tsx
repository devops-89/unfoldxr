"use client";

import { Box, Button, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface ButtonConfig {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface PageHeroSectionProps {
  image: string;
  titleOutlined?: string;
  title: string;
  subtitle?: string;
  description?: string;
  titleMaxWidth?: number | string;
  overlayOpacity?: number;
  primaryBtn?: ButtonConfig;
  secondaryBtn?: ButtonConfig;
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
}: PageHeroSectionProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "80vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        color: COLORS.WHITE,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={image}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "100%", md: "80%" },
          mx: "auto",
          pt: { xs: 12, md: 18 },
          pb: { xs: 8, md: 12 },
          pl: { xs: 0, md: 2 },
          px: { xs: 3, md: 0 },
        }}
      >
        {/* Outlined Title (optional — home page style) */}
        {titleOutlined && (
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 32, md: 56, lg: 64 },
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: { xs: "40px", md: "90px" },
              textTransform: "uppercase",
              WebkitTextStrokeWidth: { xs: "1px", md: "2px" },
              WebkitTextStrokeColor: "#FFF",
              color: "transparent",
            }}
          >
            {titleOutlined}
          </Typography>
        )}

        {/* Title */}
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 56, lg: 64 },
            lineHeight: { xs: "40px", md: "92px" },
            maxWidth: titleMaxWidth || 950,
          }}
        >
          {title}
        </Typography>

        {/* Subtitle (optional) */}
        {subtitle && (
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 20, md: 28, lg: 32 },
              lineHeight: 1.3,
              mt: 2,
              maxWidth: 800,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {/* Description (optional) */}
        {description && (
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 20, md: 30, lg: 36 },
              lineHeight: { xs: "normal", md: "44px" },
              letterSpacing: "2.52px",
              mt: { xs: 2, md: 3 },
              maxWidth: 1200,
              textTransform: "capitalize",
              color: COLORS.WHITE,
            }}
          >
            {description}
          </Typography>
        )}

        {/* Buttons (optional) */}
        {(primaryBtn || secondaryBtn) && (
          <Box
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
                onClick={primaryBtn.onClick}
                sx={{
                  bgcolor: COLORS.PRIMARY_GREEN,
                  color: COLORS.BLACK,
                  borderRadius: 99,
                  px: { xs: 3, md: 4.5 },
                  py: 1.5,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: 16, md: 20, lg: 23 },
                  textTransform: "none",
                  "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                }}
              >
                {primaryBtn.label}
              </Button>
            )}
            {secondaryBtn && (
              <Button
                variant="outlined"
                href={secondaryBtn.href}
                onClick={secondaryBtn.onClick}
                sx={{
                  borderColor: COLORS.PRIMARY_GREEN,
                  color: COLORS.WHITE,
                  borderRadius: 99,
                  px: { xs: 3, md: 4.5 },
                  py: 1.5,
                  fontFamily: din.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: 16, md: 20, lg: 23 },
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
