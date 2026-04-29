"use client";

import PageHeroSection from "@/components/widgets/PageHeroSection";
import { homePage } from "@/utils/Website-Data";
// banner removed as it was unused
import { useDemoModal } from "@/components/context/DemoModalContext";
import HeroSectionImg from "@/images/homepage/HeroSection.png";

const HeroSection = () => {
  const data = homePage.herosection;
  const { openModal } = useDemoModal();

  return (
    <PageHeroSection
      image={HeroSectionImg}
      overlayOpacity={0.2}
      titleOutlined={data.heading1}
      title={data.heading2}
      description={data.description}
      objectPosition={{ xs: "80% center", md: "center" }}
      primaryBtn={{ label: data.cta2, onClick: () => openModal("home_hero") }}
    />
  );
};

export default HeroSection;
