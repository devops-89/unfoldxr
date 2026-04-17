import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import RealityNeedsSection from "./RealityNeedsSection";
import OperationFlowSection from "./OperationFlowSection";
import UseCasesSection from "./UseCasesSection";
import OutcomesSection from "./OutcomesSection";
import FinalCtaSection from "./FinalCtaSection";
import { IndustryData } from "./data";

interface Props {
  data: IndustryData;
}

const IndustryLayout = ({ data }: Props) => {
  return (
    <Box>
      <HeroSection data={data.hero} />
      <RealityNeedsSection data={data.realityNeeds} />
      <OperationFlowSection
        data={data.operationFlow}
        ctaIcon={data.finalCta.ctaIcon}
      />
      <UseCasesSection data={data.useCases} />
      <OutcomesSection data={data.outcomes} />
      <FinalCtaSection data={data.finalCta} />
    </Box>
  );
};

export default IndustryLayout;
