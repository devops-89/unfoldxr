import React from "react";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import IndustrySection from "@/components/widgets/IndustrySection";

const OneAiPlatform = () => {
  const data = homePage.productPage.oneAiPlatform;

  return (
    <IndustrySection
      title={data.title}
      description={data.description}
      bgColor={COLORS.BLACK}
      textColor={COLORS.WHITE}
      pillBgColor={COLORS.WHITE}
      pillTextColor={COLORS.BLACK}
    />
  );
};

export default OneAiPlatform;
