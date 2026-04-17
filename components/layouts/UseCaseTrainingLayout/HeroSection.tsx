"use client";

import PageHeroSection from "@/components/widgets/PageHeroSection";
import { UseCaseData } from "./data";
import { useDemoModal } from "@/components/context/DemoModalContext";

interface Props {
  data: UseCaseData["hero"];
}

const HeroSection = ({ data }: Props) => {
  const { openModal } = useDemoModal();
  return (
    <PageHeroSection
      image={data.image}
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      overlayOpacity={data.overlayOpacity}
      primaryBtn={{ label: "Request a demo", onClick: () => openModal("usecase_hero") }}
    />
  );
};

export default HeroSection;
