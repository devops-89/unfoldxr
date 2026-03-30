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
import { useCasesData } from "./data";
import { COLORS } from "@/utils/enum";

interface UseCaseTrainingLayoutProps {
  slug?: string;
}

const UseCaseTrainingLayout = ({ slug }: UseCaseTrainingLayoutProps) => {
  const data = useCasesData[slug || "training"] || useCasesData["training"];

  if (!data) return null;

  return (
    <Box sx={{ bgcolor: COLORS.WHITE }}>
      <HeroSection data={data.hero} />
      <KnowledgeSection data={data.knowledge} />
      <InterventionSection data={data.intervention} />
      <CapabilitiesSection data={data.capabilities} />
      <BusinessResultsSection data={data.businessResults} />
      <IndustrySection data={data.industry} />
      <DeviceDeploymentSection data={data.deviceDeployment} />
      <PlatformSummarySection data={data.platformSummary} />
      <FinalCTASection data={data.finalCTA} />
    </Box>
  );
};

export default UseCaseTrainingLayout;
