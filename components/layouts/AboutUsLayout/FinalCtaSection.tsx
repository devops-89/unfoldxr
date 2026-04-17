"use client";

import { aboutPage } from "@/utils/Website-Data";
import SectionCTA from "@/components/widgets/SectionCTA";
import { useDemoModal } from "@/components/context/DemoModalContext";

const FinalCtaSection = () => {
  const { finalCtaSection: data } = aboutPage;
  const { openModal } = useDemoModal();

  return (
    <SectionCTA
      title={data.heading}
      btnText="Talk to us"
      onBtnClick={() => openModal("about_final_cta")}
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

