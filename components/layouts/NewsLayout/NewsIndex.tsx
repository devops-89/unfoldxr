"use client";
import { Container } from "@mui/material";
import NewsHeader from "./NewsHeader";
import NewsGrid from "./NewsGrid";
import NewsPagination from "./NewsPagination";
import { newsItems } from "./data";
import { useState } from "react";


export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredNews = newsItems.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Container maxWidth={false}
     sx={{ 
        py: 6,
        width: { xs: "95%", md: "90%", lg: "87%" },
        margin: "0 auto",
     }}>
      <NewsHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <NewsGrid news={currentItems} />
      <NewsPagination count={Math.ceil(newsItems.length / itemsPerPage)}
        page={page}
        onChange={handleChange}/>
    </Container>
  );
}