import React from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '@/utils/enum'
import { din } from '@/utils/fonts'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
// import { NewsItem } from '../NewsLayout/data'
// import FeaturedNewsCard from './FeaturedNewsCard'

interface NewsHeroProps {
    image: string | StaticImageData;
    title: string;
    subtitle?: string;
    titleMaxWidth?: number | string;
    objectPosition?: any;
    overlayOpacity?: number;
    // featuredNews?: NewsItem;
}

const NewsHero = ({image, title, subtitle, titleMaxWidth, objectPosition="center", overlayOpacity}: NewsHeroProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "60vh", md: "60vh" },
        backgroundColor: COLORS.WHITE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: COLORS.WHITE,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          // height: "60%",
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: objectPosition,
          }}
        />
      </Box>
       {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1,
        }}
      />
      <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: { xs: "100%", md: "80%" },
                boxSizing: "border-box",
                mx: "auto",
                pt: { xs: 12, md: 18 },
                pb: { xs: 8, md: 12 },
                pl: { xs: 0, md: 2 },
                px: { xs: 3, md: 0 },
              }}
            >
          <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 26, md: 50, lg: 50 },
                lineHeight: { xs: "35px", md: "42px" },
                maxWidth: titleMaxWidth || 1050,
                whiteSpace: "pre-line",
                width: { xs: "100%", lg: "70%" },
              }}
          >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 20, md: 28, lg: 18 },
              lineHeight: 1.6,
              maxWidth: 800,
              mt: 2, // Space between title and subtitle
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>
        )}
        </Box>
       {/* {featuredNews && (
         <FeaturedNewsCard news={featuredNews} />
      )}  */}
      </Box>
  )
}

export default NewsHero
