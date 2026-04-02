import React from "react";
import { Box, Button, Container, Typography, SxProps, Theme } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  btnText?: string;
  onBtnClick?: () => void;
  variant?: "default" | "industry" | "about";
  sx?: SxProps<Theme>;
}

const SectionCTA: React.FC<SectionCTAProps> = ({
  title,
  subtitle,
  btnText = "Request a Demo",
  onBtnClick,
  variant = "default",
  sx,
}) => {
  const isIndustry = variant === "industry";
  const isAbout = variant === "about";

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        py: { xs: 8, md: 15 },
        pb: isAbout ? { xs: 8, md: 15 } : undefined,
        ...sx,
      }}
    >
      <Container
        maxWidth={isIndustry ? false : "xl"}
        sx={{
          maxWidth: isIndustry ? 1440 : undefined,
          px: { xs: 0, md: isIndustry ? 4 : 5 },
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            border: isIndustry || isAbout ? "1px solid rgba(182, 255, 46, 0.15)" : "none",
            width: { xs: "80%", md: "100%" },
            mx: "auto",
            py: { xs: 4, md: isAbout ? "80px" : 10 },
            px: { xs: 2, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              variant === "default"
                ? `0px 20px 40px ${COLORS.BLACK_ALPHA_10}`
                : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {variant === "default" && (
            <Box
              sx={{
                position: "absolute",
                left: -40,
                top: -40,
                width: 250,
                height: 250,
                background: `radial-gradient(circle, ${COLORS.PURPLE_GLOW} 0%, ${COLORS.TRANSPARENT_PURPLE} 70%)`,
                zIndex: 0,
              }}
            />
          )}

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                fontSize: { xs: variant === "about" ? 24 : 26, md: 64 },
                lineHeight: 1.1,
                letterSpacing: variant === "default" ? "-0.051px" : "normal",
                color: COLORS.BLACK,
                textAlign: "center",
                textTransform: "uppercase",
                maxWidth: 1000,
                mx: "auto",
                mb: isAbout ? 6 : 0,
              }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: isIndustry ? 28 : 22 },
                  color: COLORS.BLACK,
                  fontWeight: isIndustry ? 400 : 500,
                  lineHeight: 1.5,
                  maxWidth: isIndustry ? 900 : 700,
                  mx: "auto",
                }}
              >
                {subtitle}
              </Typography>
            )}

            <Button
              onClick={onBtnClick}
              sx={{
                mt: isAbout ? 0 : 6,
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 4, md: 6 },
                py: 2,
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 14, md: isAbout ? 23 : 20 },
                textTransform: "uppercase",
                "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 },
              }}
            >
              {btnText} {isAbout && <Box component="span" sx={{ ml: 1 }}>&rarr;</Box>}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionCTA;
