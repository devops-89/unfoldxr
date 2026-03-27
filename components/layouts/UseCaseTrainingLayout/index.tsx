import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import KnowledgeSection from "./KnowledgeSection";
import InterventionSection from "./InterventionSection";
import CapabilitiesSection from "./CapabilitiesSection";
import BusinessResultsSection from "./BusinessResultsSection";
import IndustrySection from "./IndustrySection";
import DeviceDeploymentSection from "./DeviceDeploymentSection";
import PlatformSummarySection from "./PlatformSummarySection";
import FinalCTASection from "./FinalCTASection";

const UseCaseTrainingLayout = () => {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <HeroSection />
      <KnowledgeSection />
      <InterventionSection />
      <CapabilitiesSection />
      <BusinessResultsSection />
      <IndustrySection />
      <DeviceDeploymentSection />
      <PlatformSummarySection />
      <FinalCTASection />
    </Box>
  );
};

export default UseCaseTrainingLayout;
