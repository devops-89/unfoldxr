import { Box, Grid, Typography } from "@mui/material";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { din, helvetica } from "@/utils/fonts";

const PROFILE_IMG =
  "https://www.figma.com/api/mcp/asset/49b62e4c-e05f-4dc7-b6a4-13ccdb6e18d4";

const points = [
  {
    title: "Seamless system integration",
    desc: "Integrates with internal systems like core enterprise systems, CMMS, analytics & BI, IAM etc for user provisioning, data sync, and secure access control.",
    icon: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Structured governance setup",
    desc: "Role-based permissions and organization-level controls ensure compliant, scalable deployment.",
    icon: <AccountTreeRoundedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Rapid configuration",
    desc: "No-code workflow builder with centralized master setup for assets, processes, and task flows.",
    icon: <SettingsSuggestRoundedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Multi-device deployment",
    desc: "Native mobile, tablet, web, and smart glasses support — ready for immediate rollout across teams.",
    icon: <DevicesRoundedIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Device procurement support",
    desc: "As authorized resellers for all major brands, we also handle hardware and device procurement ensuring a seamless and fully compatible deployment experience.",
    icon: <HandymanRoundedIcon sx={{ fontSize: 24 }} />,
  },
];

const EnterpriseReady = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: { xs: 8, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* VR Woman Image - Bleeding off left edge */}
      <Box
        component="img"
        src={PROFILE_IMG}
        alt="Enterprise operations"
        sx={{
          position: "absolute",
          left: 0,
          top: { xs: 0, md: 100 },
          width: { xs: "100%", md: "35%" },
          height: { xs: 260, md: "75%" },
          objectFit: "cover",
          opacity: { xs: 0.26, md: 0.9 },
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container justifyContent="flex-end">
          <Grid size={{ xs: 12, md: 7.5, lg: 7 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1.1,
                mb: { xs: 6, md: 8 },
              }}
            >
              Enterprise-ready.
              <Box component="br" />
              Operational from day one.
            </Typography>

            <Grid container spacing={{ xs: 4, md: 6 }}>
              {points.map((point) => (
                <Grid key={point.title} size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ color: "#ccf919", mt: 0.5 }}>{point.icon}</Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 18, md: 20 },
                          lineHeight: 1.2,
                          mb: 1.5,
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          color: "#99a1af",
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
