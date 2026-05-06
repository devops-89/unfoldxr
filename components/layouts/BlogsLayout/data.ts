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
  image: string | StaticImageData;
  date: string;
  readTime?: string;
  slug: string;
  content: string;
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

export const blogsItems: BlogsItem[] = [
  {
    id: 1,
    title: "UnfoldXR Partners with Realwear...",
    image: BlogCard1,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "unfoldxr-parters-with-realwear",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 2,
    title: "Long established",
    image: BlogCard2,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 3,
    title: "Long established",
    image: BlogCard3,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 4,
    title: "Long established",
    image: BlogCard4,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 5,
    title: "Long established",
    image: BlogCard5,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 6,
    title: "Long established",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 7,
    title: "Long established",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 8,
    title: "Long established",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
  {
    id: 9,
    title: "Long established",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  },
];