import { Box, Grid, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";
import StylizedDivider from "@/components/widgets/StylizedDivider";

interface Props {
  data: UseCaseData["deviceDeployment"];
}

const DeviceDeploymentSection = ({ data }: Props) => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE, py: { xs: 8, md: 10 } }}>
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
            fontSize: { xs: 28, md: 36 },
            lineHeight: { xs: "35px", md: "42px" },
            mb: { xs: 6, md: 6 },
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
                height: { xs: 300, md: 260 },
                bgcolor: "#111",
              }}
            >
              <Box
                component="img"
                src={data.deviceA.image}
                alt={data.deviceA.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: COLORS.OVERLAY_02,
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
                    color: COLORS.WHITE,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 18 },
                    lineHeight: { xs: "28px", md: "30px" },
                    mb: 2,
                  }}
                >
                  {data.deviceA.title}
                </Typography>
                <StylizedDivider />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 300, md: 260 },
              }}
            >
              <Box
                component="img"
                src={data.deviceB.image}
                alt={data.deviceB.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "right",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: COLORS.OVERLAY_04,
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
                    color: COLORS.WHITE,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 18 },
                    lineHeight: { xs: "28px", md: "30px" },
                    width: 340,
                    mb: 2,
                  }}
                >
                  {data.deviceB.title}
                </Typography>
                <StylizedDivider />
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
                height: { xs: 300, md: 265 },
              }}
            >
              <Box
                component="img"
                src={data.deviceC.image}
                alt={data.deviceC.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "100% center",
                }}
              />
              {/* <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: COLORS.BLACK_ALPHA_60,
                }}
              /> */}
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
                    color: COLORS.WHITE,
                    fontFamily: din.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: 24, md: 18 },
                    lineHeight: { xs: "28px", md: "30px" },
                    mb: 2,
                  }}
                >
                  {data.deviceC.title}
                </Typography>
                <StylizedDivider />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DeviceDeploymentSection;
