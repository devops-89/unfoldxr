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
  image: string | StaticImageData;
  date: string;
  author?: string;
  readTime?: string;
  slug: string;
  content: string;
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
     title: "UnfoldXR Partners with Realwear",
    image: CaseStydiesCard1,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "unfoldxr-parters-with-realwear",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 2,
    title: "Digital Transformation Strategies for Growing Businesses",
    image: CaseStydiesCard2,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "digital-transformation-strategies",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 3,
    title: "Emerging Technologies Shaping the Future of IT",
    image: CaseStydiesCard3,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "emerging-technologies-shaping-the-future",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 4,
    title: "How ERP Systems Improve Operational Efficiency",
    image: CaseStydiesCard4,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "how-erp-systems-improve",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 5,
    title: "Building Strong Digital Marketing Strategies for Startups",
    image: CaseStydiesCard5,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "building-strong-digital-marketing-strategies",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 6,
    title: "Trends in Mobile App Development for 2026",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "trends-in-mobile-app-development",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 7,
    title: "Long established",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 8,
    title: "Long established",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 9,
    title: "Long established",
    image: CaseStydiesCard6 ,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 10,
    title: "Long established",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 11,
    title: "Long established",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 12,
    title: "Long established",
    image: CaseStydiesCard6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
];