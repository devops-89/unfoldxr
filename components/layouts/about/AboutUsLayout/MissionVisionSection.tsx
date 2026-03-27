import { Card, CardContent, Container, Grid, Typography, Box } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { BRAND_VALUES, MISSION_VISION_DESCRIPTION } from "./constants";

const MissionVisionSection = () => (
  <Box sx={{ bgcolor: "#0b0b0b", color: "#fff", py: { xs: 8, md: 12 } }}>
    <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5 } }}>
      <Typography sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 700, mb: 1.5, fontFamily: din.style.fontFamily }}>Mission & Vision</Typography>
      <Typography sx={{ fontSize: { xs: 38, md: 74 }, lineHeight: { xs: 1.1, md: "1.05" }, textTransform: "uppercase", color: "#B6EC1A", fontWeight: 900, maxWidth: 1120, fontFamily: din.style.fontFamily }}>
        The 1 Million Productivity Leap
      </Typography>
      <Typography sx={{ mt: 2.5, maxWidth: 920, fontSize: { xs: 24, md: 45 }, lineHeight: { xs: 1.25, md: "54px" }, fontFamily: helvetica.style.fontFamily }}>
        At UnfoldXR we aim to enable 1 million frontline workers to perform better with confidence and safety by 2030.
      </Typography>

      <Card sx={{ mt: 4.5, bgcolor: "#272829", color: "#d7d7d7", borderRadius: 2.5, boxShadow: "none" }}>
        <CardContent sx={{ p: { xs: 2, md: 3.5 } }}>
          <Typography sx={{ fontSize: { xs: 18, md: 39 }, lineHeight: { xs: 1.45, md: "46px" }, fontFamily: helvetica.style.fontFamily }}>
            {MISSION_VISION_DESCRIPTION}
          </Typography>
        </CardContent>
      </Card>

      <Typography sx={{ fontSize: { xs: 28, md: 46 }, fontWeight: 700, mt: 7, mb: 3, fontFamily: din.style.fontFamily }}>Brand DNA</Typography>
      <Grid container spacing={2.5}>
        {BRAND_VALUES.map((value) => (
          <Grid key={value.title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%", bgcolor: "#272829", color: "#fff", borderRadius: 2.5 }}>
              <CardContent sx={{ p: { xs: 2.2, md: 3 }, minHeight: { xs: 200, md: 330 }, display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: { xs: 18, md: 39 }, color: "#d9d9d9", lineHeight: { xs: 1.35, md: "44px" }, fontFamily: helvetica.style.fontFamily }}>
                  {value.description}
                </Typography>
                <Typography sx={{ mt: "auto", pt: 2.5, fontSize: { xs: 38, md: 54 }, fontWeight: 700, lineHeight: 1, fontFamily: din.style.fontFamily }}>
                  {value.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default MissionVisionSection;
