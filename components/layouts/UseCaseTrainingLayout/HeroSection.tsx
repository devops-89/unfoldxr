import PageHeroSection from "@/components/widgets/PageHeroSection";
import { UseCaseData } from "./data";

interface Props {
  data: UseCaseData["hero"];
}

const HeroSection = ({ data }: Props) => {
  return (
    <PageHeroSection
      image={data.image}
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      primaryBtn={{ label: "Watch in action" }}
      secondaryBtn={{ label: "Request a Demo" }}
    />
  );
};

export default HeroSection;
