import { Box, Container, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import ContainedButton from "@/components/widgets/ContainedButton";

const FinalCtaSection = () => {
  const { finalCtaSection: data } = aboutPage;

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, pb: { xs: 8, md: 15 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
        <Box 
          sx={{ 
            borderRadius: "24px", 
            border: "1px solid rgba(182, 255, 46, 0.15)",
            bgcolor: COLORS.WHITE,
            p: { xs: 4, md: "80px 40px" },
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
              maxWidth: 1000,
              lineHeight: 1.1,
              mb: 6
            }}
          >
            {data.heading}
          </Typography>
          
          <ContainedButton 
            sx={{ 
              fontSize: { xs: 18, md: 23 }, 
              px: { xs: 4, md: 6 },
              fontWeight: 700
            }}
          >
            Talk to us &rarr;
          </ContainedButton>
        </Box>
      </Container>
    </Box>
  );
};

export default FinalCtaSection;

