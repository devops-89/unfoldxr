"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { NewsItem } from "@/components/layouts/NewsLayout/data";
import { motion, useInView, Variants } from "framer-motion";

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

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }, 
  },
};

interface FeaturedNewsCardProps {
  news: NewsItem;
}

const FeaturedNewsCard = ({ news }: FeaturedNewsCardProps) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: false, amount: 0.1 });

  return (
    <Box
      ref={cardRef}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      sx={{
        position: "absolute",
        bottom: { xs: "4%", md: "8%" },
        width: { xs: "95%", md: "90%", lg: "84%" },
        backgroundColor: COLORS.WHITE,
        borderRadius: "0px",
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
        component={motion.div}
        variants={cardVariants}
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
          LATEST NEWS
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
          {news.title}
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
          {news.content.slice(0, 180)}...
        </Typography>

        <Link
          href={`/resources/news/${news.slug}`}
          style={{
            width: "fit-content",
            textDecoration: "none",
          }}
        >
          <Button
            component={motion.button}
            variants={buttonVariants}
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
            Read News
          </Button>
        </Link>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        component={motion.div}
        variants={cardVariants}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", md: "42%" },
          minHeight: { xs: 260, md: "auto" },
          p: { xs: 3, md: 5 },
        }}
      >
        <Image
          src={typeof news.image === 'object' ? news.image.src : news.image}
          alt={news.title}
          width={800} 
          height={500}
          priority
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            border: `2px solid ${COLORS.PRIMARY_GREEN}`,
          }}
        />
      </Box>
    </Box>
  );
};

export default FeaturedNewsCard;