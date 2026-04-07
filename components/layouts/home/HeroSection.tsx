"use client";

import PageHeroSection from "@/components/widgets/PageHeroSection";
import { homePage } from "@/utils/Website-Data";
import banner from "@/images/banner/homePage/hero.png";
import { useDemoModal } from "@/components/context/DemoModalContext";

const HeroSection = () => {
  const data = homePage.herosection;
  const { openModal } = useDemoModal();

  return (
    <PageHeroSection
      image={banner.src}
      titleOutlined={data.heading1}
      title={data.heading2}
      description={data.description}
      primaryBtn={{ label: data.cta1 }}
      secondaryBtn={{ label: data.cta2, onClick: openModal }}
    />
  );
};

export default HeroSection;
