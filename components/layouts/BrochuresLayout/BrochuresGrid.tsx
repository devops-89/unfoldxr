// components/brochures/BrochureGrid.tsx

"use client";

import { Box } from "@mui/material";

import BrochureCard from "@/components/layouts/BrochuresLayout/BrochuresCard";

import { BrochureItem } from "@/components/layouts/BrochuresLayout/data"

interface BrochureGridProps {
  items: BrochureItem[];
}

const BrochureGrid = ({
  items,
}: BrochureGridProps) => {
  return (
    <Box
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
        <BrochureCard
          key={item.id}
          item={item}
        />
      ))}
    </Box>
  );
};

export default BrochureGrid;