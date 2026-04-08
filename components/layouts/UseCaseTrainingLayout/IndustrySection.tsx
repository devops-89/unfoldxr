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
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 10, md: 15 } }}>
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
            fontSize: { xs: 28, md: 48 },
            lineHeight: "52px",
            mb: 2,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 22 },
            color: COLORS.BLACK,
            maxWidth: 1000,
            letterSpacing: "0.52px",
            lineHeight: "30px",
            mx: "auto",
            mb: { xs: 6, md: 8 },
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
            (industry, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, md: 1.5 },
                  bgcolor: COLORS.WHITE,
                  border: `1px solid ${COLORS.BLACK}`,
                  borderRadius: 99,
                  pl: 1,
                  pr: { xs: 2, md: 3 },
                  py: { xs: 0.6, md: 1 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 26, md: 36 },
                    height: { xs: 26, md: 36 },
                    bgcolor: COLORS.BLACK,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={industry.img}
                    alt={industry.label}
                    width={16}
                    height={16}
                    style={{
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 10, md: 18 },
                    fontWeight: { xs: 700, md: 900 },
                    textTransform: "uppercase",
                    color: COLORS.BLACK,
                    letterSpacing: "0.52px",
                    lineHeight: "30px",
                  }}
                >
                  {industry.label}
                </Typography>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default IndustrySection;
