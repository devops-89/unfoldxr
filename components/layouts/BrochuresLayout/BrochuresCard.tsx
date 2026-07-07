"use client";

import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { helvetica } from "@/utils/fonts";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { BrochureItem } from "@/components/layouts/BrochuresLayout/data";

interface BrochureCardProps {
  item: BrochureItem;
}

const BrochureCardContent = ({ item }: { item: BrochureItem }) => {
  const shortTitle = item.title ? item.title.split(" ").slice(0, 5).join(" ") + (item.title.split(" ").length > 5 ? "..." : "") : "";
  const desc = item.description || "Discover more about our insights and industry updates with this exclusive brochure.";
  const shortSummary = desc.split(" ").slice(0, 15).join(" ") + (desc.split(" ").length > 15 ? "..." : "");

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      {/* Image wrapper */}
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9", flexShrink: 0, borderBottom: `5px solid ${COLORS.PRIMARY_GREEN}` }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* Category Chip */}
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

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100%"
        }}
      >
        <Box>
          <Typography
            fontWeight={700}
            sx={{ fontFamily: helvetica.style.fontFamily, color: COLORS.BLACK }}
          >
            {shortTitle}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontSize: "0.825rem",
              lineHeight: 1.5,
              mt: 0.5
            }}
          >
            {shortSummary}
          </Typography>
        </Box>

        <Box mt="auto" pt={2} display="flex" justifyContent="space-between">
          <Typography
            variant="caption"
            sx={{ fontFamily: helvetica.style.fontFamily, color: COLORS.BLACK }}
          >
            {item.date}
          </Typography>
          {item.readTime && (
            <Typography
              variant="caption"
              sx={{ fontFamily: helvetica.style.fontFamily, color: COLORS.BLACK }}
            >
              {item.readTime}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const BrochureCard = ({ item }: BrochureCardProps) => {
  return item.pdf ? (
    <Link
      href={item.pdf}
      style={{
        textDecoration: "none",
        display: "block",
        height: "100%",
      }}
    >
      <BrochureCardContent item={item} />
    </Link>
  ) : (
    <Box display="block" height="100%" sx={{ cursor: "default" }}>
      <BrochureCardContent item={item} />
    </Box>
  );
};

export default BrochureCard;