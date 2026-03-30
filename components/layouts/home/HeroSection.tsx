import PageHeroSection from "@/components/widgets/PageHeroSection";
import { homePage } from "@/utils/Website-Data";
import banner from "@/images/banner/homePage/hero.png";

const HeroSection = () => {
  const data = homePage.herosection;

  return (
    <PageHeroSection
      image={banner.src}
      titleOutlined={data.heading1}
      title={data.heading2}
      description={data.description}
      primaryBtn={{ label: data.cta1 }}
      secondaryBtn={{ label: data.cta2 }}
    />
  );
};

export default HeroSection;
