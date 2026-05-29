"use client";
import { Box } from "@mui/material";

import BrochureCard from "@/components/layouts/BrochuresLayout/BrochuresCard";

import { BrochureItem } from "@/components/layouts/BrochuresLayout/data";
import { motion } from "framer-motion";

interface BrochureGridProps {
  items: BrochureItem[];
}

const BrochureGrid = ({
  items,
}: BrochureGridProps) => {
  return (
    <Box
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
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        },
        gap: "24px",
        mt: 5,
      }}
    >
      {items.map((item) => (
        <Box
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
          <BrochureCard
            item={item}
          />
        </Box>
      ))}
    </Box>
  );
};

export default BrochureGrid;