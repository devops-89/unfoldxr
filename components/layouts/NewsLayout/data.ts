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
  summary: string;
  image: string | StaticImageData;
  date: string;
  author?: string;
  readTime?: string;
};

export const newsData: NewsData = {
  hero: {
    image: NewsHero,
    title: "Latest News",
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
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 2,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg2,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 3,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg3,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 4,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg4,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 5,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg5,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 6,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 7,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 8,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 9,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: NewsCardImg6,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
];