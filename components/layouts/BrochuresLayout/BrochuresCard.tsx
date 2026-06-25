"use client";

import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { helvetica } from "@/utils/fonts";
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
      borderBottom: "5px solid",
      borderColor: COLORS.PRIMARY_GREEN,
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
    <Box
      sx={{
        position: "absolute",
        top: 12,
        left: 12,
        backgroundColor: COLORS.PRIMARY_GREEN,
        fontFamily: helvetica.style.fontFamily,
        color: COLORS.BLACK,
        padding: "3px 8px",
        borderRadius: "999px",
        fontSize: "9px",
        fontWeight: 550,
        letterSpacing: "0.5px",
        zIndex: 5,
      }}
    >
      {item.category}
    </Box>
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