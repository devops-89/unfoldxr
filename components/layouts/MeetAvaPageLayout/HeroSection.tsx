"use client";

import PageHeroSection from "@/components/widgets/PageHeroSection";
import { meetAvaPage } from "@/utils/Website-Data";
import { useDemoModal } from "@/components/context/DemoModalContext";

const HeroSection = () => {
  const { heroSection: data } = meetAvaPage;
  const { openModal } = useDemoModal();

  return (
    <PageHeroSection
      image={"/images/meet-ava/HeroBackground.png"}
      overlayOpacity={0.6}
      titleOutlined="AVA"
      title={data.heading}
      description={data.subHeading}
      objectPosition="center"
      primaryBtn={{ label: "Request a demo", onClick: openModal }}
    />
  );
};

export default HeroSection;
