import PageHeroSection from "@/components/widgets/PageHeroSection";
import banner from "@/images/about-us/about-heroSection2.jpg.png";
import { aboutPage } from "@/utils/Website-Data";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={banner.src}
      title={aboutPage.herosection.heading}
      overlayOpacity={0.7}
      primaryBtn={{ label: aboutPage.herosection.cta }}
    />
  );
};

export default HeroSection;
