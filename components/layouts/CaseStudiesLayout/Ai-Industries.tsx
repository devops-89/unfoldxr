import { caseStudiesData } from "@/components/layouts/CaseStudiesLayout/data";
import IndustrySection from "@/components/widgets/IndustrySection";

const AiIndustry = () => {
  return (
    <IndustrySection
      title={caseStudiesData.Ai_industry.heading}
      description={caseStudiesData.Ai_industry.description}
    />
  );
};

export default AiIndustry;