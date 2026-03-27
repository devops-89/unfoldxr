import { Box } from "@mui/material";
import FinalCtaSection from "./FinalCtaSection";
import HeroSection from "./HeroSection";
import OperationFlowSection from "./OperationFlowSection";
import OutcomesSection from "./OutcomesSection";
import RealityNeedsSection from "./RealityNeedsSection";
import UseCasesSection from "./UseCasesSection";

const AutomotiveOperationsLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RealityNeedsSection />
      <OperationFlowSection />
      <UseCasesSection />
      <OutcomesSection />
      <FinalCtaSection />
    </Box>
  );
};

export default AutomotiveOperationsLayout;
