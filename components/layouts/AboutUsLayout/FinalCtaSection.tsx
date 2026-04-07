import { aboutPage } from "@/utils/Website-Data";
import SectionCTA from "@/components/widgets/SectionCTA";

const FinalCtaSection = () => {
  const { finalCtaSection: data } = aboutPage;

  return (
    <SectionCTA
      title={data.heading}
      btnText="Talk to us"
      variant="about"
      sx={{ pb: 0 }}
      innerSx={{
        width: { xs: "85%", md: "90%", lg: "80%" },
        mx: "auto",
      }}
    />
  );
};

export default FinalCtaSection;

