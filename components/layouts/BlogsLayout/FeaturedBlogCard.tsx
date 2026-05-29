"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { BlogsItem } from "@/components/layouts/BlogsLayout/data";

interface FeaturedBlogCardProps {
  blog: BlogsItem;
}

const FeaturedBlogCard = ({ blog }: FeaturedBlogCardProps) => {
  return (
    <Box
      sx={{
        width: { xs: "95%", md: "90%", lg: "84%" },
        backgroundColor: COLORS.WHITE,
        borderRadius: "20px",
        overflow: "hidden",
        zIndex: 5,
        boxShadow: "0px 15px 50px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        minHeight: { xs: "auto", md: 350, lg: 400 },
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#8A8A8A",
            letterSpacing: "1px",
            mb: 2,
          }}
        >
          FEATURED BLOG
        </Typography>

        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 28, md: 42 },
            lineHeight: { xs: "36px", md: "50px" },
            fontWeight: 800,
            color: COLORS.BLACK,

            mb: 3,
          }}
        >
          {blog.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 15, md: 17 },
            lineHeight: "30px",
            color: "#666",

            mb: 4,

            maxWidth: 650,
          }}
        >
          {blog.content.slice(0, 180)}...
        </Typography>

        <Link
          href={`/blogs/${blog.slug}`}
          style={{
            width: "fit-content",
            textDecoration: "none",
          }}
        >
          <Button
            sx={{
              backgroundColor: COLORS.PRIMARY_GREEN,
              color: COLORS.BLACK,
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                backgroundColor: COLORS.PRIMARY_GREEN,
                opacity: 0.9,
              },
            }}
          >
            View Blog
          </Button>
        </Link>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "42%" },
          minHeight: { xs: 260, md: "auto" },
        }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default FeaturedBlogCard;