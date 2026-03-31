import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import ContainedButton from "@/components/widgets/ContainedButton";

const NewsSection = () => {
  const { newsSection: data } = aboutPage;

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 12 } }}>
      <Container maxWidth={false} sx={{ width: { xs: "95%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}>
        <Card 
          sx={{ 
            borderRadius: { xs: 3, md: "45px" }, 
            boxShadow: "none", 
            bgcolor: COLORS.WHITE 
          }}
        >
          <CardContent 
            sx={{ 
              p: { xs: 4, md: "60px 40px" }, 
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography 
              sx={{ 
                fontSize: { xs: 32, md: 64 }, 
                fontWeight: 900, 
                textTransform: "uppercase", 
                fontFamily: din.style.fontFamily,
                color: COLORS.BLACK,
                mb: 2
              }}
            >
              {data.title}
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: 18, md: 24 }, 
                fontFamily: helvetica.style.fontFamily,
                color: COLORS.BLACK,
                maxWidth: 800,
                lineHeight: 1.4,
                mb: 6
              }}
            >
              {data.description}
            </Typography>
            <ContainedButton 
              sx={{ 
                fontSize: { xs: 18, md: 23 }, 
                px: { xs: 4, md: 6 },
                fontWeight: 700
              }}
            >
              Contact Us &rarr;
            </ContainedButton>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default NewsSection;

