import NewsHero from '@/components/layouts/NewsLayout/NewsHero'
import FinalCTASection from '@/components/layouts/NewsLayout/FinalCTASection'
import React from 'react'
import { newsData } from '@/components/layouts/NewsLayout/data'
import NewsIndex from '@/components/layouts/NewsLayout/NewsIndex'

const page = () => {
    const data = newsData;
  return (
    <div>
      <NewsHero image={data.hero.image} title={data.hero.title} />
      <NewsIndex />
      <FinalCTASection title={data.finalCTAsection.title} subtitle={data.finalCTAsection.subtitle} />
    </div>
  ) 
}

export default page
