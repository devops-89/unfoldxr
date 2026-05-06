import { StaticImageData } from "next/image";
import NewsHero from "@/images/news-img/dummyNewsHero.jpg";
import NewsCardImg from "@/images/news-img/CardsImages/news1.jpg";
import NewsCardImg2 from "@/images/news-img/CardsImages/news2.jpg";
import NewsCardImg3 from "@/images/news-img/CardsImages/news3.jpg";
import NewsCardImg4 from "@/images/news-img/CardsImages/news4.jpg";
import NewsCardImg5 from "@/images/news-img/CardsImages/news5.jpg";
import NewsCardImg6 from "@/images/news-img/CardsImages/news6.jpg";

export interface NewsData {
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

export type NewsItem = {
  id: number;
  title: string;
  image: string | StaticImageData;
  date: string;
  author?: string;
  readTime?: string;
  slug: string;
  content: string;
};

export const newsData: NewsData = {
  hero: {
    image: NewsHero,
    title: "Latest News",
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

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "UnfoldXR Partners with Realwear...",
    image: NewsCardImg,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 2,
    title: "Long established",
    image: NewsCardImg2,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 3,
    title: "Long established",
    image: NewsCardImg3,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 4,
    title: "Long established",
    image: NewsCardImg4,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 5,
    title: "Long established",
    image: NewsCardImg5,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 6,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 7,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 8,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 9,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 10,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 11,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: 12,
    title: "Long established",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    slug: "long-established",
    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
];