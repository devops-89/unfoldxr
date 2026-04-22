"use client"

import CardDetail from '@/components/layouts/BlogsInsights/CardDetail'
import { blogData } from '@/utils/Website-Data';
import { useParams } from 'next/navigation';
import React from 'react'

export default function BlogsInsightsCardDetail() {
      const params=useParams()
 
const id = params?.id ? Number(params.id) : null;

  const product = blogData.find(
    (p) => p.id === id
  )
  return (
   <CardDetail product={product} />
  )
}
