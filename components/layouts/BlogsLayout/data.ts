import { StaticImageData } from "next/image";
import BlogHero from "@/images/blogs-img/blogsHero.jpg";
import BlogCard1 from "@/images/blogs-img/BlogsCardImages/blogs1.jpg";
import BlogCard2 from "@/images/blogs-img/BlogsCardImages/blogs2.jpg";
import BlogCard3 from "@/images/blogs-img/BlogsCardImages/blogs3.jpg";
import BlogCard4 from "@/images/blogs-img/BlogsCardImages/blogs4.jpg";
import BlogCard5 from "@/images/blogs-img/BlogsCardImages/blogs5.jpg";
import BlogCard6 from "@/images/blogs-img/BlogsCardImages/blogs6.jpg";

export interface BlogsData {
  hero: {
    image: string | StaticImageData;
    title: string;
    overlayOpacity?: number;
  };
  newsSection: {
    title: string;
    description: string;
  };
    finalCTAsection: { 
    title: string;
    subtitle: string;
  };
}

export type BlogsItem = {
  id: number;
  title: string;
  summary: string;
  image: string | StaticImageData;
  date: string;
  readTime?: string;
};

export type FeaturedBlogsItem = {
  id: number;
  title: string;
  summary: string;
  image: string | StaticImageData;
  date: string;
  readTime?: string;
};

export const blogsData: BlogsData = {
  hero: {
    image: BlogHero,
    title: "Reimaging How Frontline Works",
    overlayOpacity: 0.7,
  },
  newsSection: {
    title: "Stay Updated with Our Latest News",
    description: "Discover the most recent updates and announcements from our team.",
  },
  finalCTAsection: {
    title: "Bring intelligence to Your manufacturing floor",
    subtitle: "See how UnfoldXR improves execution, reduces downtime, and scales expertise accross your operations.",
  },
};

export const featuredCardItems: FeaturedBlogsItem = {
   id: 1,
   title: "UnfoldXR Partners with Realwear...",
   summary: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...",
   image: BlogCard1,
   date: "May 20th 2020",
   readTime: "5 min reading",
};

export const blogsItems: BlogsItem[] = [
  {
    id: 1,
    title: "UnfoldXR Partners with Realwear...",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard1,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 2,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard2,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 3,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard3,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 4,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard4,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 5,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard5,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 6,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 7,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 8,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
  {
    id: 9,
    title: "Long established",
    summary: "It is a long established fact that a reader will be distracted...",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
  },
];