import { StaticImageData } from "next/image";
import { AI_INDUSTRY_DATA } from "@/utils/constant";
import CaseHero from "@/images/casestudies-img/casestudiesHero.jpg";
import CaseStydiesCard1 from "@/images/casestudies-img/CaseCardImages/casestudies1.jpg";
import CaseStydiesCard2 from "@/images/casestudies-img/CaseCardImages/casestudies2.jpg";
import CaseStydiesCard3 from "@/images/casestudies-img/CaseCardImages/casestudies3.jpg";
import CaseStydiesCard4 from "@/images/casestudies-img/CaseCardImages/casestudies4.jpg";
import CaseStydiesCard5 from "@/images/casestudies-img/CaseCardImages/casestudies5.jpg";
import CaseStydiesCard6 from "@/images/casestudies-img/CaseCardImages/casestudies6.jpg";

export interface CaseStudiesData {
  hero: {
    image: string | StaticImageData;
    title: string;
    overlayOpacity?: number;
  };
    finalCTAsection: { 
    title: string;
    subtitle: string;
  };
  Ai_industry: {
    heading: string;
    description: string;
    ai_industry_data: typeof AI_INDUSTRY_DATA;
  };
}

export type CaseStudyItem = {
  id: number;
  title: string;
  summary: string;
  image: string | StaticImageData;
  date: string;
  author?: string;
  readTime?: string;
};

export const caseStudiesData: CaseStudiesData = {
  hero: {
    image: CaseHero,
    title: "Reimaging How Frontline Works",
    overlayOpacity: 0.7,
  },
  finalCTAsection: {
    title: "Bring intelligence to Your manufacturing floor",
    subtitle: "See how UnfoldXR improves execution, reduces downtime, and scales expertise accross your operations.",
  },
  Ai_industry: {
      heading: "ONE AI PLATFORM, ANY INDUSTRY",
      description:
        "UnfoldXR enhances skilled operations, on-ground executions & real-time decision making",
      ai_industry_data: AI_INDUSTRY_DATA,
    },
};

export const caseStudyItems: CaseStudyItem[] = [
  {
    id: 1,
     title: "UnfoldXR Partners with Realwear...",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard1,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 2,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard2,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 3,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard3,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 4,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard4,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 5,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard5,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 6,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 7,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 8,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 9,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6 ,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 10,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 11,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
  {
    id: 12,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
  },
];