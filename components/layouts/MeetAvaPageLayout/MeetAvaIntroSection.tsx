import { din, helvetica } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import { meetAvaPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const MeetAvaIntroSection = () => {
  const { introSection: data } = meetAvaPage;

  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        minHeight: { md: "85vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
          px: { xs: 0, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="video"
              src={data.image}
              alt="Meet AVA"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: { xs: 3, md: "45px" },
                display: "block",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 48, lg: 60 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                mb: 3,
              }}
            >
              {data.heading}
            </Typography>
            {data.paragraphs.map((para, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 15, md: 20 },
                  color: COLORS.BLACK,
                  lineHeight: 1.6,
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                {para}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MeetAvaIntroSection;
