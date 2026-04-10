import { Box, Button, Grid, Typography } from "@mui/material";
import { helvetica, inter, din } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["businessResults"];
}
const BusinessResultsSection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 15 } }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 48 },
            lineHeight: "52px",
            mb: { xs: 6, md: 8 },
            maxWidth: 900,
          }}
        >
          Business Results You Can Measure
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 4, md: 3 },
            gridAutoRows: "1fr",
          }}
        >
          {data.items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: COLORS.CHARCOAL,
                  color: COLORS.WHITE,
                  borderRadius: "28px",
                  p: { xs: 2.5, md: 3.5 },
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 800,
                    fontSize: { xs: 20, md: 22 },
                    textTransform: "uppercase",
                    lineHeight: "30px",
                    letterSpacing: "0.52px",
                    color: COLORS.PRIMARY_GREEN,
                    mb: 2.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 14, md: 18 },
                    // lineHeight: 1.5,
                    color: COLORS.WHITE_ALPHA_80,
                    letterSpacing: "0.52px",
                    mb: 0,
                  }}
                >
                  {item.description}
                </Typography>

              </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessResultsSection;
