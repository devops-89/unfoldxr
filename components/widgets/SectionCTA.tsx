import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  btnText?: string;
  onBtnClick?: () => void;
  variant?: "default" | "industry" | "about";
  sx?: SxProps<Theme>;
  innerSx?: SxProps<Theme>;
}

const SectionCTA: React.FC<SectionCTAProps> = ({
  title,
  subtitle,
  btnText = "Request a demo",
  onBtnClick,
  variant = "default",
  sx,
  innerSx,
}) => {
  const isIndustry = variant === "industry";
  const isAbout = variant === "about";

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        py: { xs: 6, md: 8 },
        pb: isAbout ? { xs: 6, md: 8 } : undefined,
        ...sx,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: 0,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "24px",
            border:
              isIndustry || isAbout
                ? "1px solid rgba(182, 255, 46, 0.15)"
                : "none",
            width: { xs: "95%", md: "90%", lg: "80%" },
            mx: "auto",
            py: { xs: 4, md: isAbout ? "60px" : 6 },
            px: { xs: 3, md: 5 },
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
            ...innerSx,
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
                fontSize: { xs: variant === "about" ? 24 : 26, md: 36 },
                lineHeight: { xs: "35px", md: "42px" },
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
                  fontSize: { xs: 16, md: isIndustry ? 18 : 18 },
                  color: COLORS.BLACK,
                  fontWeight: isIndustry ? 400 : 500,
                  lineHeight: { xs: "28px", md: "30px" },
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
                mt: isAbout ? 0 : 4,
                bgcolor: COLORS.PRIMARY_GREEN,
                color: COLORS.BLACK,
                borderRadius: 99,
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontFamily: din.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 14, md: 16 },
                textTransform: "none",
                "&:hover": { bgcolor: COLORS.PRIMARY_GREEN, opacity: 0.9 },
              }}
            >
              {btnText}{" "}
              {isAbout && (
                <Box component="span" sx={{ ml: 1 }}>
                  &rarr;
                </Box>
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionCTA;
