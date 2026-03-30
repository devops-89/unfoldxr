import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { partnersPage } from "@/utils/Website-Data";
import OutlinedButton from "@/components/widgets/OutlinedButton";

const EcosystemSection = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#EDEDED",
            borderRadius: "16px",
            p: { xs: 3, md: 5 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: 20, md: 26 },
              mb: 3,
            }}
          >
            {partnersPage.ecosystemSystem.heading}
          </Typography>

          <Grid container spacing={4}>
            {/* LEFT */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ borderRight: { md: "2px solid #000" } }}
            >
              <Stack spacing={2}>
                <OutlinedButton sx={{ width: "350px", height: "40px" }}>
                  {partnersPage.ecosystemSystem.tag}
                </OutlinedButton>

                {partnersPage.ecosystemSystem.leftItems.map((item, i) => (
                  <Typography key={i} sx={{ fontSize: 14 }}>
                    {item.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            {/* RIGHT */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  height: "260px",
                  pl: { md: 3 },
                }}
              >
                <Typography sx={{ fontSize: 14, lineHeight: "22px" }}>
                  {partnersPage.ecosystemSystem.rightText}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EcosystemSection;
