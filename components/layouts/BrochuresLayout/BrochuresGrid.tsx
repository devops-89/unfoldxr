"use client";
import { Box } from "@mui/material";

import BrochureCard from "@/components/layouts/BrochuresLayout/BrochuresCard";

import { BrochureItem } from "@/components/layouts/BrochuresLayout/data";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {},
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface BrochureGridProps {
  items: BrochureItem[];
}

const BrochureGrid = ({
  items,
}: BrochureGridProps) => {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: false, amount: 0.1 });

  return (
    <Box
      ref={gridRef}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={isGridInView ? "visible" : "hidden"}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        },
        gap: "24px",
        mt: 12,
      }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          component={motion.div}
          variants={cardVariants}
        >
          <BrochureCard
            item={item}
          />
        </Box>
      ))}
    </Box>
  );
};

export default BrochureGrid;