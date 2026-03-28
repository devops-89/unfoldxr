import { Box, Grid, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { UseCaseData } from "./data";

interface Props {
  data: UseCaseData["deviceDeployment"];
}

const DeviceDeploymentSection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 15 } }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 28, md: 36, lg: 44 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {data.title}
        </Typography>

        <Grid container spacing={2.5}>
          {/* Top Row: Device A and B */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 320 },
              }}
            >
              <Box
                component="img"
                src={data.deviceA.image}
                alt={data.deviceA.title}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.5)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: { xs: 20, md: 40 },
                  maxWidth: "80%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 36, lg: 32 },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  {data.deviceA.title}
                </Typography>
                <Box sx={{ width: 80, height: 2, bgcolor: "#fff" }} />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 320 },
              }}
            >
              <Box
                component="img"
                src={data.deviceB.image}
                alt={data.deviceB.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "200px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.5)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: { xs: 20, md: 40 },
                  maxWidth: "80%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 32 },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  {data.deviceB.title}
                </Typography>
                <Box sx={{ width: 80, height: 2, bgcolor: "#fff" }} />
              </Box>
            </Box>
          </Grid>

          {/* Bottom Row: Device C */}
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 360 },
              }}
            >
              <Box
                component="img"
                src={data.deviceC.image}
                alt={data.deviceC.title}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.5)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: { xs: 20, md: 40 },
                  maxWidth: "80%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 36, lg: 32 },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  {data.deviceC.title}
                </Typography>
                <Box sx={{ width: 80, height: 2, bgcolor: "#fff" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DeviceDeploymentSection;
