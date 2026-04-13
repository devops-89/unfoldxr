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
        // minHeight: { md: "85vh" },
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
          <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 48, lg: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.BLACK,
                lineHeight: { xs: "35px", md: "52px" },
                mb: 2,
              }}
            >
              {data.heading}
            </Typography>
            {data.paragraphs.map((para, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 15, md: 18 },
                  color: COLORS.BLACK,
                  lineHeight: { xs: "28px", md: "30px" },
                  textAlign: "justify",
                  mb: 2,
                }}
              >
                {para}
              </Typography>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Box
              component="img"
              src={data.image}
              alt="Meet AVA"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: { xs: 3, md: "45px" },
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MeetAvaIntroSection;
