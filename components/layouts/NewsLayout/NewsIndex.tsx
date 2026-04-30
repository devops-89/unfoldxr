"use client";
import { Container } from "@mui/material";
import NewsHeader from "./NewsHeader";
import NewsGrid from "./NewsGrid";
import NewsPagination from "./NewsPagination";
import { newsItems } from "./data";
import { useState } from "react";


export default function NewsPage() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = newsItems.slice(
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
      <NewsHeader />
      <NewsGrid news={currentItems} />
      <NewsPagination count={Math.ceil(newsItems.length / itemsPerPage)}
        page={page}
        onChange={handleChange}/>
    </Container>
  );
}