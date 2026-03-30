import PageHeroSection from "@/components/widgets/PageHeroSection";
import contactHeroBg from "@/images/banner/contact/contact-hero-bg.png";
import { contactPage } from "@/utils/Website-Data";

const HeroSection = () => {
  return (
    <PageHeroSection
      image={contactHeroBg.src}
      title={contactPage.herosection.heading1}
      titleMaxWidth={600}
      description={contactPage.herosection.description}
    />
  );
};

export default HeroSection;