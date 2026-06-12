"use client";
import { Grid } from "@mui/material";
import NewsCards from "./NewsCards";
import { NewsItem } from "./data";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)", 
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function NewsGrid({ news }: { news: NewsItem[] }) {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: false, amount: 0.1 });

  return (
    <Grid 
      container 
      spacing={3}
      ref={gridRef}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={isGridInView ? "visible" : "hidden"}
    >
      {news.map((item) => (
        <Grid 
          size={{ xs: 12, sm: 6, md: 3 }} 
          key={item.id}
          component={motion.div}
          variants={cardVariants}
        >
          <NewsCards item={item} />
        </Grid>
      ))}
    </Grid>
  );
}