import AutomotiveOperationsLayout from "@/components/layouts/industries/AutomotiveOperationsLayout";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

const SUPPORTED_SLUG = "automotive-operation";

export async function generateStaticParams() {
  return [{ slug: SUPPORTED_SLUG }];
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== SUPPORTED_SLUG) {
    return {
      title: "Industry | UnfoldXR",
    };
  }

  return {
    title: "Automotive Operation | UnfoldXR",
    description: "UnfoldXR for automotive operations: guided execution, intelligence, and measurable outcomes at scale.",
  };
}

export default async function IndustryDynamicPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  if (slug !== SUPPORTED_SLUG) {
    notFound();
  }

  return (
    <Box component="main">
      <AutomotiveOperationsLayout />
    </Box>
  );
}
