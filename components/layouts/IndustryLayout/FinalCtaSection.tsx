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
      innerSx={{
        width: { xs: "85%", md: "90%", lg: "80%" },
        mx: "auto",
      }}
    />
  );
};

export default FinalCtaSection;
