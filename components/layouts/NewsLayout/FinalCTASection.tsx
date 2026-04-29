"use client";
import { NewsData } from "./data";
import SectionCTA from "@/components/widgets/SectionCTA";
import { useDemoModal } from "@/components/context/DemoModalContext";

interface Props {
  title: string;
  subtitle: string;
}

const FinalCTASection = ({ title, subtitle }: Props) => {
  const { openModal } = useDemoModal();

  return (
    <SectionCTA
      title={title}
      subtitle={subtitle}
      btnText="Talk to us"
      onBtnClick={() => openModal("usecase_final_cta")}
      innerSx={{
        width: { xs: "85%", md: "90%", lg: "80%" },
        mx: "auto",
      }}
    />
  );
};

export default FinalCTASection;