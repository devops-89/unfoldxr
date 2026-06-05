"use client";
import { Box, Container } from "@mui/material";
import NewsHero from '@/components/layouts/NewsLayout/NewsHero'
import FinalCTASection from '@/components/layouts/NewsLayout/FinalCTASection'
import NewsHeader from "./NewsHeader";
import NewsGrid from "./NewsGrid";
import NewsPagination from "./NewsPagination";
import { newsItems, newsData } from "./data";
import { useState, useMemo, useEffect } from "react";

export default function NewsPage() {
  const data = newsData;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

const allSortedNews = useMemo(() => {
    return [...newsItems].sort((a, b) => {
      const timeDifference = new Date(b.date).getTime() - new Date(a.date).getTime();

      if (timeDifference === 0) return b.id - a.id;
      
      return timeDifference;
    });
  }, []);

const filteredNews = useMemo(() => {
    if (!searchTerm) return allSortedNews;
    
    return allSortedNews.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allSortedNews, searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

const startIndex = (page - 1) * itemsPerPage;
  const currentItems = filteredNews.slice( 
    startIndex,
    startIndex + itemsPerPage
  );

{/*  const filteredNews = remainingNews.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  ); */}

  return (
    <Box>
    <NewsHero image={data.hero.image} title={data.hero.title} subtitle={data.hero.subtitle} overlayOpacity={data.hero.overlayOpacity} />
    <Container maxWidth={false}
     sx={{ 
        py: 6,
        width: { xs: "95%", md: "90%", lg: "87%" },
        margin: "0 auto",
     }}>
      <NewsHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewsGrid news={currentItems} />
      <NewsPagination 
        count={Math.ceil(filteredNews.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
      />
    </Container>
    <FinalCTASection title={data.finalCTAsection.title} subtitle={data.finalCTAsection.subtitle} />
    </Box>
  );
}