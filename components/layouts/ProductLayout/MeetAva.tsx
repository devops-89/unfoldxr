import { Box, Container, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import ContainedButton from "@/components/widgets/ContainedButton";

const AVA_IMAGE =
  "https://www.figma.com/api/mcp/asset/aa6f5ea7-949f-4458-83ae-173ca2e9da82";

const MeetAva = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 34, md: 64 },
                lineHeight: { xs: "44px", md: "76px" },
                maxWidth: 920,
              }}
            >
              Meet AVA Your AI virtual assistant for everything work.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontFamily: helvetica.style.fontFamily,
                fontSize: { xs: 18, md: 27 },
                lineHeight: { xs: "31px", md: "39px" },
                maxWidth: 1020,
              }}
            >
              AVA supports your workforce across all three versions of the
              platform. It works alongside your teams as an intelligent assistant,
              a sharp analyser, and a reliable task partner. The perfect work
              buddy.
            </Typography>
            <ContainedButton sx={{ mt: 4 }}>Visit AVA</ContainedButton>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={AVA_IMAGE}
              alt="AVA visual"
              sx={{
                width: "100%",
                maxWidth: 520,
                display: "block",
                ml: { xs: "auto", md: 0 },
                mr: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetAva;
