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
            fontSize: { xs: 28, md: 54 },
            lineHeight: 1.1,
            mb: { xs: 6, md: 8 },
          }}
        >
          Business Results You <br /> Can Measure
        </Typography>

        <Grid container rowSpacing={{ xs: 4, md: 12 }} columnSpacing={3}>
          {data.items.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: COLORS.CHARCOAL,
                  color: COLORS.WHITE,
                  borderRadius: "28px",
                  p: { xs: 4, md: 5 },
                  height: "100%",
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
                    fontSize: { xs: 20, md: 25 },
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    mb: 2.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: 1.5,
                    color: COLORS.WHITE_ALPHA_80,
                    mb: 5,
                  }}
                >
                  {item.description}
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Button
                    sx={{
                      bgcolor: COLORS.PRIMARY_GREEN,
                      color: COLORS.BLACK,
                      borderRadius: 99,
                      px: { xs: 2.5, md: 4 },
                      py: 1.2,
                      fontSize: { xs: 14, md: 18, lg: 20 },
                      fontWeight: 600,
                      fontFamily: inter.style.fontFamily,
                      textTransform: "none",
                      "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                    }}
                  >
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BusinessResultsSection;
