import { Box, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { AI_INDUSTRY_DATA } from "@/utils/constant";
import Image from "next/image";

interface Props {
  data: UseCaseData["industry"];
}

const IndustrySection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 10, md: 15 } }}>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 36, lg: 44 },
            mb: 2,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18, lg: 20 },
            color: "rgba(0,0,0,0.6)",
            maxWidth: 800,
            mx: "auto",
            mb: { xs: 6, md: 10 },
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
          {AI_INDUSTRY_DATA.map((industry, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "#fff",
                border: "1px solid #000",
                borderRadius: 99,
                pl: 1,
                pr: 3,
                py: 1,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={industry.img}
                  alt={industry.label}
                  width={20}
                  height={20}
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: 14,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "#000",
                  letterSpacing: "0.02em",
                }}
              >
                {industry.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default IndustrySection;
