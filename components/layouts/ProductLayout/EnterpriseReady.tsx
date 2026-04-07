import { Box, Grid, Typography } from "@mui/material";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const ICON_MAP: Record<string, React.ReactNode> = {
  integration: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 24 }} />,
  governance: <AccountTreeRoundedIcon sx={{ fontSize: 24 }} />,
  config: <SettingsSuggestRoundedIcon sx={{ fontSize: 24 }} />,
  devices: <DevicesRoundedIcon sx={{ fontSize: 24 }} />,
  procurement: <HandymanRoundedIcon sx={{ fontSize: 24 }} />,
};

const EnterpriseReady = () => {
  const data = homePage.productPage.enterpriseReady;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* VR Woman Image - Bleeding off left edge */}
      <Box
        component="img"
        src={data.img}
        alt="Enterprise operations"
        sx={{
          position: "absolute",
          left: 0,
          top: { xs: 0, md: 40 },
          width: { xs: "100%", md: "26%" },
          height: { xs: "50%", md: "85%" },
          objectFit: "cover",
          opacity: { xs: 0.26, md: 0.9 },
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container justifyContent="flex-end" sx={{ pt: { xs: 60, md: 0 } }}>
          <Grid size={{ xs: 12, md: 7.5, lg: 7 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.1,
                fontSize: { xs: 32, md: 48, lg: 52 },
                mb: { xs: 6, md: 8 },
              }}
            >
              {data.title.includes("Enterprise-ready") ? (
                <>
                  Enterprise-ready.
                  <Box component="br" />
                  Operational from day one.
                </>
              ) : (
                data.title
              )}
            </Typography>

            <Grid container spacing={{ xs: 4, md: 6 }}>
              {(data.points as any[]).map((point) => (
                <Grid key={point.title} size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ color: COLORS.PRIMARY_GREEN, mt: 0.5 }}>
                      {ICON_MAP[point.icon]}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 18, md: 20 },
                          textTransform: "uppercase",
                          lineHeight: 1.2,
                          mb: 1.5,
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: COLORS.TEXT_MUTED,
                          fontSize: { xs: 14, md: 16 },
                          lineHeight: 1.5,
                        }}
                      >
                        {point.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EnterpriseReady;
