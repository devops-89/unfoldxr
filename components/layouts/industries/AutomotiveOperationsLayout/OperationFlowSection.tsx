import { din, helvetica } from "@/utils/fonts";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { AUTOMOTIVE_OPERATION_FLOW } from "./constants";

const OperationFlowSection = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 6 } }}>
        <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 34, md: 64 }, lineHeight: 1.05, textTransform: "uppercase", fontWeight: 900, maxWidth: 1220 }}>
          Intelligence Across the Entire Automotive Operation
        </Typography>
        <Grid container spacing={2.5} sx={{ mt: 4 }}>
          {AUTOMOTIVE_OPERATION_FLOW.map((block) => (
            <Grid key={block.phase} size={{ xs: 12, md: 4 }}>
              <Card sx={{ bgcolor: "#101010", borderRadius: 2.5, border: "2px solid #B6EC1A", height: "100%" }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontFamily: din.style.fontFamily, fontSize: { xs: 24, md: 32 }, textTransform: "uppercase", mb: 2 }}>
                    {block.phase}
                  </Typography>
                  {block.items.map((item) => (
                    <Typography key={item} sx={{ fontFamily: helvetica.style.fontFamily, color: "#cacaca", fontSize: { xs: 16, md: 23 }, lineHeight: 1.35, mb: 1.5 }}>
                      - {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OperationFlowSection;
