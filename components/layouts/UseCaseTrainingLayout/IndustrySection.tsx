import { Box, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { AI_INDUSTRY_DATA } from "@/utils/constant";
import Image from "next/image";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["industry"];
}

const IndustrySection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 10, md: 10 } }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 24, md: 36 },
            lineHeight: "42px",
            mb: 2,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18 },
            color: COLORS.BLACK,
            maxWidth: 1000,
            letterSpacing: "0.52px",
            lineHeight: "30px",
            mx: "auto",
            mb: { xs: 4, md: 6 },
          }}
        >
          {data.subtitle}
        </Typography>

        {/* Industry Chips Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {(data.customIndustries || AI_INDUSTRY_DATA).map(
            (industry, index) => {
              // Find matching industry in AI_INDUSTRY_DATA to get icon if needed
              const industryInfo = AI_INDUSTRY_DATA.find(
                (item) => item.label.toLowerCase() === industry.label.toLowerCase()
              );
              const icon = industryInfo?.icon;
              const img = industry.img || industryInfo?.img;

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, md: 1.5 },
                    bgcolor: "transparent",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    borderRadius: 99,
                    pl: 1,
                    pr: { xs: 2.5, md: 3.5 },
                    py: { xs: 0.6, md: 0.8 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 26, md: 34 },
                      height: { xs: 26, md: 34 },
                      bgcolor: COLORS.BLACK,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {img ? (
                      <Image
                        src={img}
                        alt={industry.label}
                        width={16}
                        height={16}
                        style={{
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    ) : icon ? (
                      <Box
                        component={icon}
                        sx={{
                          fontSize: { xs: 16, md: 18 },
                          color: COLORS.WHITE,
                        }}
                      />
                    ) : null}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 10, md: 16 },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      color: COLORS.BLACK,
                      letterSpacing: "0.52px",
                      lineHeight: "30px",
                    }}
                  >
                    {industry.label}
                  </Typography>
                </Box>
              );
            },
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default IndustrySection;
