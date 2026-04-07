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
      innerSx={{
        width: { xs: "85%", md: "90%", lg: "80%" },
        mx: "auto",
      }}
    />
  );
};

export default FinalCTASection;
