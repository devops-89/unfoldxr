"use client";
import { Grid } from "@mui/material";
import BlogsCard from "./BlogsCard";
import { BlogsItem } from "./data";
import { motion } from "framer-motion";

export default function NewsGrid({ news }: { news: BlogsItem[] }) {
  return (
    <Grid 
      container 
      spacing={3}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {news.map((item) => (
        <Grid 
          size={{ xs: 12, sm: 6, md: 3 }} 
          key={item.id}
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut" }
            },
          }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        >
          <BlogsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}