import { homePage } from "@/utils/Website-Data";
import React from "react";
import IndustrySection from "@/components/widgets/IndustrySection";

const AiIndustry = () => {
  return (
    <IndustrySection
      title={homePage.Ai_industry.heading}
      description={homePage.Ai_industry.description}
    />
  );
};

export default AiIndustry;
