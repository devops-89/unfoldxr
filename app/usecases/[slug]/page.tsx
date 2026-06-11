import UseCaseTrainingLayout from "@/components/layouts/UseCaseTrainingLayout";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { seoData, type UsecaseSlug } from "@/utils/seoData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const seo = seoData.usecases[slug as UsecaseSlug];

  if (!seo) {
    return {
      title: "Solutions | UnfoldXR",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/usecases/${slug}`, 
    },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const seo = seoData.usecases[slug as UsecaseSlug];

  return (
    <Box>
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
       <UseCaseTrainingLayout slug={slug} />
    </Box>
  );
}
