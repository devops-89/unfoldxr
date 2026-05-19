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
  featured?: boolean;
};

export const blogsData: BlogsData = {
  hero: {
    image: BlogHero,
    title: "Reimaging How Frontline Works",
    overlayOpacity: 0.7,
  },
  finalCTAsection: {
    title: "Bring intelligence to Your manufacturing floor",
    subtitle: "See how UnfoldXR improves execution, reduces downtime, and scales expertise accross your operations.",
  },
};

const generateSlug = (title: string, id: number) => {
  const slug = title
    .toLowerCase()
    .split(" ")
    .slice(0, 4)
    .join("-")
    .replace(/[^\w-]+/g, "");

  return `${slug}-${id}`;
};

const createBlogsItem = (
  item: Omit<BlogsItem, "slug">
): BlogsItem => ({
  ...item,
  slug: generateSlug(item.title, item.id),
});

export const blogsItems: BlogsItem[] = [
  createBlogsItem({
    id: 1,
    title: "UnfoldXR Partners with Realwear",
    image: BlogCard1,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    featured: true,
  }),
  createBlogsItem({
    id: 2,
    title: "Digital Transformation Strategies for Growing Businesses",
    image: BlogCard2,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 3,
    title: "Emerging Technologies Shaping the Future of IT",
    image: BlogCard3,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 4,
    title: "How ERP Systems Improve Operational Efficiency",
    image: BlogCard4,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 5,
    title: "Building Strong Digital Marketing Strategies for Startups",
    image: BlogCard5,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 6,
    title: "Trends in Mobile App Development for 2026",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 7,
    title: "Long established App Development for 2026",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 8,
    title: "Long established Systems Improve Operational Efficiency",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
  createBlogsItem({
    id: 9,
    title: "Long established Marketing Strategies for Startups",
    image: BlogCard6,
    date: "May 20th 2020",
    readTime: "5 min reading",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }),
];