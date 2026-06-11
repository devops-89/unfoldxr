import IndustryLayout from "@/components/layouts/IndustryLayout";
import { industriesData } from "@/components/layouts/IndustryLayout/data";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoData, type IndustrySlug } from "@/utils/seoData";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = seoData.industries[slug as IndustrySlug];

  if (!seo) {
    return {
      title: "Industry | UnfoldXR",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

export default async function IndustryDynamicPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;
  const data = industriesData[slug];
  const seo = seoData.industries[slug as IndustrySlug];

  if (!data) {
    notFound();
  }

  return (
    <Box component="main">
      {seo && (
        <Box 
          component="h1" 
          sx={{ 
            position: 'absolute', 
            width: '1px', 
            height: '1px', 
            padding: 0, 
            margin: '-1px', 
            overflow: 'hidden', 
            clip: 'rect(0, 0, 0, 0)', 
            whiteSpace: 'nowrap', 
            border: 0 
          }}
        >
          {seo.h1}
        </Box>
      )}
      <IndustryLayout data={data} />
    </Box>
  );
}
