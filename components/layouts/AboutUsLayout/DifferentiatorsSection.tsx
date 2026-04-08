import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const DifferentiatorsSection = () => {
  const { differentiatorsSection: data } = aboutPage;

  return (
    <Box
      sx={{
        bgcolor: COLORS.BLACK,
        color: COLORS.WHITE,
        pt: 10,
        pb: { xs: 8, md: 15 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontSize: { xs: 36, md: 48 },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: { xs: 1.1, md: "52px" },
                mb: 6,
                fontFamily: din.style.fontFamily,
              }}
            >
              {data.heading}
            </Typography>
            <Stack spacing={5}>
              {data.items.map((item, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  spacing={3}
                  alignItems="flex-start"
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                      width: 48,
                      height: 48,
                      objectFit: "contain",
                      mt: 0.5,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 22, md: 22},
                        fontWeight: 700,
                        lineHeight: "30px",
                        mb: 1,
                        textTransform: "uppercase",
                        fontFamily: din.style.fontFamily,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 17, md: 18 },
                        lineHeight: "30px",
                        color: COLORS.WHITE,
                        fontFamily: helvetica.style.fontFamily,
                        textAlign: "left",
                        fontWeight: 400,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={data.image}
              alt="Differentiator"
              sx={{
                width: { xs: "100%", md: "85%" },
                ml: { xs: 0, md: "285px" },
                mt: { xs: 4, md: 0 },
                height: "auto",
                objectFit: "cover",
                borderRadius: "20px",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DifferentiatorsSection;
