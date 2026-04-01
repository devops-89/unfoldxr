import IndustryLayout from "@/components/layouts/IndustryLayout";
import { industriesData } from "@/components/layouts/IndustryLayout/data";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const data = industriesData[slug];

  if (!data) {
    return {
      title: "Industry | UnfoldXR",
    };
  }

  return {
    title: `${data.hero.title} | UnfoldXR`,
    description: data.hero.description,
  };
}

export default async function IndustryDynamicPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;
  const data = industriesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <Box component="main">
      <IndustryLayout data={data} />
    </Box>
  );
}
