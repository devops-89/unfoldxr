import { StaticImageData } from "next/image";

import BlogCard1 from "@/images/blogs-img/BlogsCardImages/blogs1.jpg";
import BlogCard2 from "@/images/blogs-img/BlogsCardImages/blogs2.jpg";
import BlogCard3 from "@/images/blogs-img/BlogsCardImages/blogs3.jpg";
import BlogCard4 from "@/images/blogs-img/BlogsCardImages/blogs4.jpg";
import BlogCard5 from "@/images/blogs-img/BlogsCardImages/blogs5.jpg";

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
  image: string | StaticImageData;
}

export const brochureTabs: BrochureCategory[] = [
  "Infographic",
  "Events & Webinar",
  "Brochure",
  "eBook",
  "Report",
];


export const brochureTabData: Record<
  BrochureCategory,
  BrochureItem[]
> = {

  "Infographic": [
    { id: 1, title: "Card 1", image: BlogCard1 },
    { id: 2, title: "Card 2", image: BlogCard1 },
    { id: 3, title: "Card 3", image: BlogCard1 },
    { id: 4, title: "Card 4", image: BlogCard1 },
    { id: 5, title: "Card 5", image: BlogCard1 },
    { id: 6, title: "Card 6", image: BlogCard1 },
  ],

  "Events & Webinar": [
    { id: 7, title: "Card 7", image: BlogCard2 },
    { id: 8, title: "Card 8", image: BlogCard2 },
    { id: 9, title: "Card 9", image: BlogCard2 },
    { id: 10, title: "Card 10", image: BlogCard2 },
    { id: 11, title: "Card 11", image: BlogCard2 },
    { id: 12, title: "Card 12", image: BlogCard2 },
  ],

  "Brochure": [
    { id: 13, title: "Card 13", image: BlogCard3 },
    { id: 14, title: "Card 14", image: BlogCard3 },
    { id: 15, title: "Card 15", image: BlogCard3 },
    { id: 16, title: "Card 16", image: BlogCard3 },
    { id: 17, title: "Card 17", image: BlogCard3 },
    { id: 18, title: "Card 18", image: BlogCard3 },
  ],

  "eBook": [
    { id: 19, title: "Card 19", image: BlogCard4 },
    { id: 20, title: "Card 20", image: BlogCard4 },
    { id: 21, title: "Card 21", image: BlogCard4 },
    { id: 22, title: "Card 22", image: BlogCard4 },
    { id: 23, title: "Card 23", image: BlogCard4 },
    { id: 24, title: "Card 24", image: BlogCard4 },
  ],

  "Report": [
    { id: 25, title: "Card 25", image: BlogCard5 },
    { id: 26, title: "Card 26", image: BlogCard5 },
    { id: 27, title: "Card 27", image: BlogCard5 },
    { id: 28, title: "Card 28", image: BlogCard5 },
    { id: 29, title: "Card 29", image: BlogCard5 },
    { id: 30, title: "Card 30", image: BlogCard5 },
  ],
};