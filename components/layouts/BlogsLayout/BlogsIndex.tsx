"use client";
import { Container } from "@mui/material";
import BlogsGrid from "./BlogsGrid";
import BlogsPagination from "./BlogsPagination";
import { blogsItems, featuredCardItems } from "./data";
import { useState } from "react";
import BlogsFeaturedCard from "./BlogsFeaturedCard";


export default function BlogsPage() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = blogsItems.slice(
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
      <BlogsFeaturedCard
        title={featuredCardItems.title}
        description={featuredCardItems.summary}
        image={featuredCardItems.image}
        date={featuredCardItems.date}
        readTime={featuredCardItems.readTime}
      />
      <BlogsGrid news={currentItems} />
      <BlogsPagination count={Math.ceil(blogsItems.length / itemsPerPage)}
        page={page}
        onChange={handleChange}/>
    </Container>
  );
}