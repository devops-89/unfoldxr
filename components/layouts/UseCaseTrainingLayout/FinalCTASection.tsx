"use client";

import { UseCaseData } from "./data";
import SectionCTA from "@/components/widgets/SectionCTA";
import { useDemoModal } from "@/components/context/DemoModalContext";

interface Props {
  data: UseCaseData["finalCTA"];
}

const FinalCTASection = ({ data }: Props) => {
  const { openModal } = useDemoModal();

  return (
    <SectionCTA
      title={data.title}
      subtitle={data.subtitle}
      onBtnClick={openModal}
      innerSx={{
        width: { xs: "85%", md: "90%", lg: "80%" },
        mx: "auto",
      }}
    />
  );
};

export default FinalCTASection;
