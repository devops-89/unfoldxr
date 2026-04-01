import PageHeroSection from "@/components/widgets/PageHeroSection";
import { IndustryData } from "./data";

interface Props {
  data: IndustryData["hero"];
}

const HeroSection = ({ data }: Props) => {
  return (
    <PageHeroSection
      image={data.image}
      title={data.title}
      description={data.description}
      primaryBtn={{ label: "Request a Demo" }}
    />
  );
};

export default HeroSection;
