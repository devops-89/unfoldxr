import { aboutPage } from "@/utils/Website-Data";
import SectionCTA from "@/components/widgets/SectionCTA";

const FinalCtaSection = () => {
  const { finalCtaSection: data } = aboutPage;

  return (
    <SectionCTA
      title={data.heading}
      btnText="Talk to us"
      variant="about"
      sx={{ pb: 0 }} // About us page has a different outer spacing requirement
    />
  );
};

export default FinalCtaSection;

