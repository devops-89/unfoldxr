

export interface NewsData {
  hero: {
    image: string;
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
  image: string;
  date: string;
  author?: string;
  readTime?: string;
};

export const newsData: NewsData = {
  hero: {
    image: "/images/news-img/news2.jpg",
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
    image: "/images/news1.jpg",
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 2,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: "/images/news2.jpg",
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 3,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: "/images/news2.jpg",
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 4,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: "/images/news2.jpg",
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 5,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: "/images/news2.jpg",
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
  {
    id: 6,
    title: "Long established",
    summary:
      "It is a long established fact that a reader will be distracted...",
    image: "/images/news2.jpg",
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5min reading",
  },
];