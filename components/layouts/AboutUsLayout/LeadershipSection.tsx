import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
const LeadershipSection = () => {
  const { leadershipSection: data } = aboutPage;
  return (
    <Container
      maxWidth={false}
      sx={{
        width: { xs: "90%", md: "90%", lg: "83%" },
        mx: "auto",
        px: 0,
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, md: 36 },
          fontWeight: 900,
          textTransform: "uppercase",
          mb: 4,
          fontFamily: din.style.fontFamily,
          color: COLORS.BLACK,
          lineHeight: "52px",
        }}
      >
        {data.title}
      </Typography>

      <Stack spacing={12}>
        {data.members.map((member, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <Grid
              container
              key={idx}
              spacing={{ xs: 4, md: 8 }}
              alignItems="flex-start"
              direction={isEven ? "row-reverse" : "row"}
            >
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    maxWidth: { md: 450 },
                    maxHeight: { md: 700 },
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "12px",
                    display: "block",
                    mx: "auto",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Box
                  sx={{
                    textAlign: { xs: "left", md: isEven ? "left" : "right" },
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 26, md: 36 },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      fontFamily: din.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: "52px",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 20 },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      mt: 1,
                      mb: 3,
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: "30px",
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 18 },
                      lineHeight: "28px",
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      textAlign: "justify",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Container>
  );
};

export default LeadershipSection;
