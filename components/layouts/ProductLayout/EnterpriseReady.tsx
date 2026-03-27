import { Box, Container, Grid, Typography } from "@mui/material";
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
    title: "Seamless System Integration",
    desc: "Integrates with internal systems like CMMS, analytics, BI and IAM for user provisioning, data sync, and secure access control.",
    icon: <IntegrationInstructionsRoundedIcon />,
  },
  {
    title: "Structured Governance Setup",
    desc: "Role-based permissions and organization-level controls ensure compliant, scalable deployment.",
    icon: <AccountTreeRoundedIcon />,
  },
  {
    title: "Rapid Configuration",
    desc: "No-code workflow builder with centralized master setup for assets, processes and task flows.",
    icon: <SettingsSuggestRoundedIcon />,
  },
  {
    title: "Multi-Device Deployment",
    desc: "Native mobile, tablet, web and smart glasses support ready for immediate rollout across teams.",
    icon: <DevicesRoundedIcon />,
  },
  {
    title: "Device Procurement Support",
    desc: "As authorized resellers for major brands, we support hardware procurement for seamless deployments.",
    icon: <HandymanRoundedIcon />,
  },
];

const EnterpriseReady = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 8, md: 14 }, position: "relative", overflow: "hidden" }}>
      <Box
        component="img"
        src={PROFILE_IMG}
        alt="Enterprise operations"
        sx={{
          position: "absolute",
          left: 0,
          top: { xs: 0, md: 120 },
          width: { xs: "100%", md: "35%" },
          height: { xs: 260, md: "72%" },
          objectFit: "cover",
          opacity: { xs: 0.26, md: 0.9 },
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          sx={{
            ml: { md: "38%" },
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 64 },
            lineHeight: { xs: "42px", md: "92px" },
            maxWidth: 950,
          }}
        >
          Enterprise-ready. Operational from day one.
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 5, ml: { md: "38%" } }}>
          {points.map((point) => (
            <Grid key={point.title} size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <Box sx={{ mt: 0.2, color: "#b6ec1a" }}>{point.icon}</Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: din.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: 23, md: 32 },
                      lineHeight: { xs: "31px", md: "37px" },
                    }}
                  >
                    {point.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontFamily: helvetica.style.fontFamily,
                      color: "#eaeaea",
                      fontSize: { xs: 17, md: 24 },
                      lineHeight: { xs: "29px", md: "36px" },
                    }}
                  >
                    {point.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EnterpriseReady;
