"use client";

import Image from "next/image";
import Link from "next/link";

import { Box } from "@mui/material";

import { BrochureItem } from "@/components/layouts/BrochuresLayout/data";

interface BrochureCardProps {
  item: BrochureItem;
}

const CardImage = ({
  item,
}: {
  item: BrochureItem;
}) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      background: "#eee",
      cursor: item.pdf
        ? "pointer"
        : "default",
    }}
  >
    <Image
      src={item.image}
      alt={item.title}
      fill
      sizes="(max-width: 768px) 100vw, 25vw"
      style={{
        objectFit: "cover",
      }}
    />
  </Box>
);

const BrochureCard = ({
  item,
}: BrochureCardProps) => {

  return item.pdf ? (
    <Link
      href={item.pdf}
      style={{
        textDecoration: "none",
        display: "block",
      }}
    >
      <CardImage item={item} />
    </Link>
  ) : (
    <Box display="block">
      <CardImage item={item} />
    </Box>
  );
};

export default BrochureCard;