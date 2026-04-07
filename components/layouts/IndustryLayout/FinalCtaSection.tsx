"use client";

import { IndustryData } from "./data";
import SectionCTA from "@/components/widgets/SectionCTA";
import { useDemoModal } from "@/components/context/DemoModalContext";

interface Props {
  data: IndustryData["finalCta"];
}

const FinalCtaSection = ({ data }: Props) => {
  const { openModal } = useDemoModal();

  return (
    <SectionCTA
      title={data.title}
      subtitle={data.description}
      btnText={data.ctaText}
      onBtnClick={openModal}
      variant="industry"
      innerSx={{
        width: { xs: "85%", md: "90%", lg: "80%" },
        mx: "auto",
      }}
    />
  );
};

export default FinalCtaSection;
