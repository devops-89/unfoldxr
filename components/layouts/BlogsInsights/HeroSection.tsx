import PageHeroSection from '@/components/widgets/PageHeroSection'
import banner from "@/images/resources/blogsinsights/blog-heroSection.png";
import { BlogsInsightsPage } from '@/utils/Website-Data';
import React from 'react'

export default function HeroSection() {
  return (
   <PageHeroSection
   image={banner.src}
   title={BlogsInsightsPage.herosection.heading}
//    subtitle={BlogsInsightsPage.herosection.heading}
    overlayOpacity={0.7}
      titleMt={30}
   />
  )
}
