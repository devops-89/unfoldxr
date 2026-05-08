"use client";

import Image from "next/image";
import { Box } from "@mui/material";

import { BrochureItem } from "@/components/layouts/BrochuresLayout/data";

interface BrochureCardProps {
  item: BrochureItem;
}

const BrochureCard = ({
  item,
}: BrochureCardProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default BrochureCard;