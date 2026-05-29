"use client";
import { COLORS } from '@/utils/enum';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { BlogsItem } from './data';
import FeaturedBlogCard from './FeaturedBlogCard';

interface BlogsHeroProps {
    image: string | StaticImageData;
    title: string;
    titleMaxWidth?: number | string;
    objectPosition?: any;
    overlayOpacity?: number;
    featuredBlog?: BlogsItem
}

const BlogsHero = ({image, title, titleMaxWidth, objectPosition="center", overlayOpacity, featuredBlog}: BlogsHeroProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", md: "100vh" },
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
        component={motion.div}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          height: "100%",
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
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
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
        {featuredBlog && (
           <Box
             component={motion.div}
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.15 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
             sx={{ position: "relative", zIndex: 3, width: "100%", display: "flex", justifyContent: "center" }}
           >
             <FeaturedBlogCard blog={featuredBlog} />
           </Box>
         )}
      </Box>
  )
}

export default BlogsHero
