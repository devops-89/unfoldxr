import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const HeroSection = () => {
  const data = homePage.productPage.supportOperations;

  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, color: COLORS.WHITE }}>
      <Box
        sx={{
          minHeight: { xs: 560, md: 860 },
          pt: { xs: 14, md: 24 },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={data.hero.bg}
          alt="Product Hero"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            width: { xs: "95%", md: "80%" },
            mx: "auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1.1,
                maxWidth: 900,
              }}
            >
              {data.hero.title}
            </Typography>
            <Typography
              sx={{
                mt: 4,
                fontFamily: helvetica.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 16, md: 18, lg: 20 },
                lineHeight: 1.3,
                maxWidth: "100%",
              }}
            >
              {data.hero.subtitle}
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontFamily: helvetica.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: 14, md: 18, lg: 18 },
                lineHeight: 1.5,
                color: COLORS.TEXT_GRAY,
                maxWidth: 600,
              }}
            >
              {data.hero.description}
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Button
                sx={{
                  bgcolor: COLORS.PRIMARY_GREEN,
                  color: COLORS.BLACK,
                  borderRadius: 99,
                  px: { xs: 4, md: 5 },
                  py: 1.5,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: COLORS.PRIMARY_HOVER, boxShadow: "none" },
                }}
              >
                {data.hero.cta}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
