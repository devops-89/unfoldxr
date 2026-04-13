import { Box, Container, Typography, alpha } from "@mui/material";
import Link from "next/link";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { MASTER_INDUSTRIES } from "@/utils/constant";
import React from "react";

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
    <Box sx={{ backgroundColor: bgColor, py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
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
                    transition: "0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0px 4px 15px rgba(0,0,0,0.05)",
                      bgcolor: alpha(COLORS.PRIMARY_GREEN, 0.1),
                    },
                  }}
                >
                  <Box
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
