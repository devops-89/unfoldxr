import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import ContainedButton from "@/components/widgets/ContainedButton";

const CareersSection = () => {
  const { careersSection: data } = aboutPage;

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, color: COLORS.WHITE, py: { xs: 8, md: 15 } }}>
      <Container maxWidth={false} sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}>
        <Typography 
          sx={{ 
            fontSize: { xs: 32, md: 60 }, 
            fontWeight: 900, 
            textTransform: "uppercase", 
            mb: 4, 
            fontFamily: din.style.fontFamily 
          }}
        >
          {data.title}
        </Typography>
        
        <Typography 
          sx={{ 
            fontSize: { xs: 18, md: 24 }, 
            lineHeight: 1.45, 
            maxWidth: 1200, 
            mb: 8, 
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
                    fontSize: { xs: 28, md: 54 }, 
                    color: "rgba(182, 236, 26, 0.4)", 
                    fontWeight: 900, 
                    fontFamily: din.style.fontFamily,
                    lineHeight: 1,
                    minWidth: { xs: 40, md: 60 }
                  }}
                >
                  {`0${i + 1}`}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: { xs: 16, md: 20 }, 
                    textTransform: "uppercase", 
                    fontWeight: 700, 
                    fontFamily: din.style.fontFamily,
                    lineHeight: 1.2
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
            mt: 10, 
            mb: 6, 
            fontSize: { xs: 18, md: 24 }, 
            fontFamily: helvetica.style.fontFamily,
            maxWidth: 1000
          }}
        >
          {data.bottomText}
        </Typography>

        <ContainedButton 
          sx={{ 
            px: { xs: 2.5, md: 4 },
            py: 1.2,
            fontSize: { xs: 14, md: 18, lg: 20 },
            fontWeight: 700
          }}
        >
          Explore Open Roles
        </ContainedButton>
      </Container>
    </Box>
  );
};

export default CareersSection;