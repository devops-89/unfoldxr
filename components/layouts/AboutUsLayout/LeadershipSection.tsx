import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const LeadershipSection = () => {
  const { leadershipSection: data } = aboutPage;

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2.5, md: 15 } }}>
      <Typography 
        sx={{ 
          fontSize: { xs: 30, md: 64 }, 
          fontWeight: 900, 
          textTransform: "uppercase", 
          mb: 8, 
          fontFamily: din.style.fontFamily,
          color: COLORS.BLACK
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
                    borderRadius: "12px",
                    display: "block"
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7.5 }}>
                <Box sx={{ textAlign: { xs: "left", md: isEven ? "left" : "right" }, mt: { xs: 3, md: 0 } }}>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: 26, md: 52 }, 
                      fontWeight: 900, 
                      textTransform: "uppercase", 
                      fontFamily: din.style.fontFamily,
                      color: COLORS.BLACK,
                      lineHeight: 1.1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: 20, md: 28 }, 
                      fontWeight: 400,
                      textTransform: "uppercase",
                      mt: 1,
                      mb: 4, 
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: 18, md: 20 }, 
                      lineHeight: 1.55, 
                      fontFamily: helvetica.style.fontFamily,
                      color: COLORS.BLACK,
                      textAlign: "justify",
                      whiteSpace: "pre-line"
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

