import React from "react";
import { UseCaseData } from "./data";
import GlobalIndustrySection from "@/components/widgets/IndustrySection";

interface Props {
  data: UseCaseData["industry"];
}

const IndustrySection = ({ data }: Props) => {
  return (
    <GlobalIndustrySection
      title={data.title}
      description={data.subtitle}
    />
  );
};

export default IndustrySection;
