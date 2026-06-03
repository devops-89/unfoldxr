"use client";
import { Box, Container } from "@mui/material";
import BlogsHero from "@/components/layouts/BlogsLayout/BlogsHero";
import FinalCTASection from "@/components/layouts/BlogsLayout/FinalCTASection";
import BlogsGrid from "./BlogsGrid";
import BlogsPagination from "./BlogsPagination";
import { blogsItems, blogsData } from "./data";
import { useState, useMemo } from "react";


export default function BlogsPage() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;

  const { latestFeaturedBlog, remainingBlogs } = useMemo(() => {
    // Sort Newest to Oldest based on date
    const sorted = [...blogsItems].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    return {
      latestFeaturedBlog: sorted[0],       // The absolute newest blog
      remainingBlogs: sorted.slice(1)      // The rest of the array (no duplicates!)
    };
  }, []);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

// 2. Pagination math is now applied ONLY to the remaining grid blogs
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = remainingBlogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box>
    <BlogsHero image={blogsData.hero.image} title={blogsData.hero.title} overlayOpacity={blogsData.hero.overlayOpacity} featuredBlog={latestFeaturedBlog} />
    <Container maxWidth={false}
     sx={{ 
        py: 6,
        width: { xs: "95%", md: "90%", lg: "87%" },
        margin: "0 auto",
     }}>
      <BlogsGrid blogs={currentItems} />
      <BlogsPagination count={Math.ceil(remainingBlogs.length / itemsPerPage)}
        page={page}
        onChange={handleChange}/>
    </Container>
    <FinalCTASection title={blogsData.finalCTAsection.title} subtitle={blogsData.finalCTAsection.subtitle} />
    </Box>
  );
}