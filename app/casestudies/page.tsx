import { caseStudiesData } from "@/components/layouts/CaseStudiesLayout/data";
import CaseStudiesHero from "@/components/layouts/CaseStudiesLayout/CaseStudiesHero";
import FinalCTASection from "@/components/layouts/CaseStudiesLayout/FinalCTASection";
import CaseStudiesIndex from "@/components/layouts/CaseStudiesLayout/CaseStudiesIndex";
import AiIndustries from "@/components/layouts/CaseStudiesLayout/Ai-Industries";

const page = () => {
    const data = caseStudiesData;
  return (
    <div>
        <CaseStudiesHero image={data.hero.image} title={data.hero.title} overlayOpacity={data.hero.overlayOpacity} />
        <AiIndustries />
        <CaseStudiesIndex />
        <FinalCTASection title={data.finalCTAsection.title} subtitle={data.finalCTAsection.subtitle} />
    </div>
  ) 
}

export default page