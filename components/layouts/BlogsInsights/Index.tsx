import { Box } from '@mui/material'
import React from 'react'
import HeroSection from './HeroSection'
import BottomIntelligence from './BottomIntelligence'
import BlogIntro from './BlogIntro'
import BlogCard from './BlogCard'

export default function BlogsInsights() {
  return (
<Box sx={{ bgcolor: "#fff" }}>
 <HeroSection/>
 {/* <BlogIntro/> */}
 <BlogCard/>
 <BottomIntelligence/>
</Box>
  )
}
