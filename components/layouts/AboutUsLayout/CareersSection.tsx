import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import ContainedButton from "@/components/widgets/ContainedButton";

const CareersSection = () => {
  const { careersSection: data } = aboutPage;

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}>
        <Typography 
          sx={{ 
            fontSize: { xs: 28, md: 36 }, 
            fontWeight: 900, 
            textTransform: "uppercase", 
            mb: 2, 
            fontFamily: din.style.fontFamily,
            lineHeight: "52px",
          }}
        >
          {data.title}
        </Typography>
        
        <Typography 
          sx={{ 
            fontSize: { xs: 18, md: 18 }, 
            lineHeight: "28px", 
            maxWidth: 1200, 
            mb: 4, 
            fontFamily: helvetica.style.fontFamily,
            whiteSpace: "pre-line"
          }}
        >
          {data.description}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {data.values.map((text, i) => (
            <Grid key={i} size={{ xs: 12, md: 5.5 }} sx={{ display: "flex" }}>
              <Box 
                sx={{ 
                  bgcolor: COLORS.CARD_BG_DARK, 
                  color: COLORS.WHITE, 
                  borderRadius: "20px",
                  p: { xs: 2, md: 2.5 },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, md: 3 },
                  width: "100%",
                  minHeight: { md: 120 }
                }}
              >
                <Typography 
                  sx={{ 
                    fontSize: { xs: 28, md: 36 }, 
                    color: "rgba(182, 236, 26, 0.4)", 
                    fontWeight: 900, 
                    fontFamily: din.style.fontFamily,
                    lineHeight: "52px",
                    minWidth: { xs: 40, md: 60 }
                  }}
                >
                  {`0${i + 1}`}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: { xs: 16, md: 18 }, 
                    textTransform: "uppercase", 
                    fontWeight: 700, 
                    fontFamily: din.style.fontFamily,
                    lineHeight: "30px",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography 
          sx={{ 
            mt: 4, 
            mb: 4, 
            fontSize: { xs: 18, md: 18 }, 
            fontFamily: helvetica.style.fontFamily,
            maxWidth: 1000,
            lineHeight: "30px",
          }}
        >
          {data.bottomText}
        </Typography>

        <ContainedButton 
          sx={{ 
            px: { xs: 2.5, md: 4 },
            py: 1.2,
            fontSize: { xs: 14, md: 16 },
            fontWeight: 500,
            lineHeight: "30px",
          }}
        >
          Explore open roles
        </ContainedButton>
      </Container>
    </Box>
  );
};

export default CareersSection;