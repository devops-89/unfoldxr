import PageHeroSection from "@/components/widgets/PageHeroSection";
import { industriesPage } from "@/utils/Website-Data";

const HeroSection = () => {
  const { heroSection: data } = industriesPage.automotive;

  return (
    <PageHeroSection
      image={data.image}
      title={data.title}
      description={data.description}
      // overlayOpacity={0}
      primaryBtn={{ label: "Request a Demo" }}
    />
  );
};

export default HeroSection;
