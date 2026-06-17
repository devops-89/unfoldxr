import { StaticImageData } from "next/image";

import testing1 from "@/images/resources/infographicImages/testing1.jpg";
import testing2 from "@/images/resources/infographicImages/testing2.jpg";
import testing3 from "@/images/resources/infographicImages/testing3.jpg";
import testing4 from "@/images/resources/infographicImages/testing4.jpg";
import testing5 from "@/images/resources/infographicImages/testing5.jpg";
import AiIsRewriting from "@/images/resources/infographicImages/AI-IS-REWRITING.jpg";
import EightyofTheWorkforce from "@/images/resources/infographicImages/Eighty-of-the-workforce.jpg";

export interface BrochuresData {
    finalCTAsection: { 
    title: string;
    subtitle: string;
  };
}

export const brochuresData: BrochuresData = {
  finalCTAsection: {
    title: "Bring intelligence to Your manufacturing floor",
    subtitle: "See how UnfoldXR improves execution, reduces downtime, and scales expertise accross your operations.",
  },
};

export type BrochureCategory =
  | "Infographic"
  | "Events & Webinar"
  | "Brochure"
  | "eBook"
  | "Report";

export interface BrochureItem {
  id: number;
  title: string;
  slug?: string;
  image: string | StaticImageData;
  pdf?: string;
  category: BrochureCategory;
}

export const allBrochuresData: BrochureItem[] = [
  { id: 1, title: "Card 1", image: AiIsRewriting, slug: "ai-is-rewritting", pdf: "/ResourcePdf/infographicsPdf/AI-IS-REWRITING.pdf", category: "Infographic" },
  { id: 2, title: "Card 2", image: EightyofTheWorkforce, slug: "80%-of-workforce", pdf: "/ResourcePdf/infographicsPdf/Eighty-percent-of-the-Workforce-Still.pdf", category: "Infographic" },
];