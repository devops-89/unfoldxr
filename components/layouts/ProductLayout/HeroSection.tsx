import PageHeroSection from "@/components/widgets/PageHeroSection";
import { homePage } from "@/utils/Website-Data";

const HeroSection = () => {
  const { hero } = homePage.productPage.supportOperations;

  return (
    <PageHeroSection
      image={hero.bg}
      title={hero.title}
      subtitle={hero.subtitle}
      description={hero.description}
      primaryBtn={{ label: hero.cta }}
    />
  );
};

export default HeroSection;
