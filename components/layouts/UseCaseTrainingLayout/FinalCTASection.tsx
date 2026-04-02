import { UseCaseData } from "./data";
import SectionCTA from "@/components/widgets/SectionCTA";

interface Props {
  data: UseCaseData["finalCTA"];
}

const FinalCTASection = ({ data }: Props) => {
  return (
    <SectionCTA
      title={data.title}
      subtitle={data.subtitle}
    />
  );
};

export default FinalCTASection;
