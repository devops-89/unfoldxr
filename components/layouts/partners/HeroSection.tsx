import PageHeroSection from "@/components/widgets/PageHeroSection";
import partnersHeroBg from "@/images/banner/partners/partners-hero-bg.png";
import { partnersPage } from "@/utils/Website-Data";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={partnersHeroBg.src}
      title={partnersPage.herosection.heading1}
      description={partnersPage.herosection.description}
      primaryBtn={{ label: partnersPage.herosection.cta1 }}
    />
  );
};

export default HeroSection;