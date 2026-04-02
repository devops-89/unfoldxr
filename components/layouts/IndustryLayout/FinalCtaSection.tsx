import { IndustryData } from "./data";
import SectionCTA from "@/components/widgets/SectionCTA";

interface Props {
  data: IndustryData["finalCta"];
}

const FinalCtaSection = ({ data }: Props) => {
  return (
    <SectionCTA
      title={data.title}
      subtitle={data.description}
      btnText={data.ctaText}
      variant="industry"
    />
  );
};

export default FinalCtaSection;
