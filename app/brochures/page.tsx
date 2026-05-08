import FinalCTASection from '@/components/layouts/BrochuresLayout/FinalCTASection';
import React from 'react'
import { brochuresData } from '@/components/layouts/BrochuresLayout/data';
import BrochuresIndex from "@/components/layouts/BrochuresLayout/BrochuresIndex";

const page = () => {
  return (
    <div>
      <BrochuresIndex/>
      <FinalCTASection title={brochuresData.finalCTAsection.title} subtitle={brochuresData.finalCTAsection.subtitle}/>
    </div>
  )
}

export default page
