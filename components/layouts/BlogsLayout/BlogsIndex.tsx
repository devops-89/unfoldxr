"use client";
import { Box, Container } from "@mui/material";
import BlogsHero from "@/components/layouts/BlogsLayout/BlogsHero";
import FinalCTASection from "@/components/layouts/BlogsLayout/FinalCTASection";
import BlogsGrid from "./BlogsGrid";
import BlogsPagination from "./BlogsPagination";
import { blogsItems, blogsData } from "./data";
import { useState } from "react";


export default function BlogsPage() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = blogsItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const featuredBlog = blogsItems.find(
          (blog) => blog.featured
        );

  return (
    <Box>
    <BlogsHero image={blogsData.hero.image} title={blogsData.hero.title} overlayOpacity={blogsData.hero.overlayOpacity} featuredBlog={featuredBlog} />
    <Container maxWidth={false}
     sx={{ 
        py: 6,
        width: { xs: "95%", md: "90%", lg: "87%" },
        margin: "0 auto",
     }}>
      <BlogsGrid blogs={currentItems} />
      <BlogsPagination count={Math.ceil(blogsItems.length / itemsPerPage)}
        page={page}
        onChange={handleChange}/>
    </Container>
    <FinalCTASection title={blogsData.finalCTAsection.title} subtitle={blogsData.finalCTAsection.subtitle} />
    </Box>
  );
}