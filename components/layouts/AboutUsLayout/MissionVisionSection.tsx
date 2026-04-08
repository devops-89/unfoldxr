import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
const MissionVisionSection = () => {
  const { missionVisionSection: data } = aboutPage;
  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        pt: { xs: 8, md: 10 },
        pb: { xs: 12, md: 24 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 24, md: 28 },
            fontWeight: 700,
            mb: 1.5,
            fontFamily: din.style.fontFamily,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 38, md: 54 },
            lineHeight: { xs: 1.1, md: "70px" },
            textTransform: "uppercase",
            color: COLORS.PRIMARY_GREEN,
            fontWeight: 900,
            maxWidth: 1488,
            fontFamily: din.style.fontFamily,
          }}
        >
          {data.heading}
        </Typography>
        <Typography
          sx={{
            mt: 2.5,
            maxWidth: 920,
            fontSize: { xs: 20, md: 22 },
            lineHeight: { xs: 1.25, md: "1.4" },
            fontFamily: helvetica.style.fontFamily,
            fontWeight: 400,
          }}
        >
          {data.subHeading}
        </Typography>
        <Box
          sx={{
            mt: 6,
            bgcolor: COLORS.CARD_BG_DARK,
            borderRadius: "20px",
            p: { xs: 3, md: "48px 47px 48px 46px" },
            maxWidth: 1661,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, md: 22 },
              lineHeight: { xs: 1.45, md: "43px" },
              fontFamily: helvetica.style.fontFamily,
              color: COLORS.TEXT_GREY,
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            {data.description}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 54 },
            fontWeight: 700,
            mt: 10,
            mb: 4,
            fontFamily: din.style.fontFamily,
          }}
        >
          {data.brandDnaTitle}
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 3 }}
          alignItems="stretch"
        >
          {data.brandDna.map((item, idx) => (
            <Box key={idx} sx={{ flex: 1 }}>
              <Box
                sx={{
                  height: "100%",
                  bgcolor: COLORS.CARD_BG_DARK,
                  color: COLORS.WHITE,
                  borderRadius: "20px",
                  p: { xs: 4, md: "25px 30px" },
                  display: "flex",
                  flexDirection: "column",
                  minHeight: { xs: 220, md: 250 },
                  justifyContent: "space-between",
                  gap: { xs: 6, md: 2 },
                  mb: { xs: 3, md: 0 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 22 },
                    color: COLORS.TEXT_GREY,
                    lineHeight: { xs: 1.35, md: "28px" },
                    fontFamily: helvetica.style.fontFamily,
                    // textAlign: "justify",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 24, md: 36 },
                    fontWeight: 700,
                    lineHeight: 1,
                    fontFamily: din.style.fontFamily,
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default MissionVisionSection;
