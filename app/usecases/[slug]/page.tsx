import UseCaseTrainingLayout from "@/components/layouts/UseCaseTrainingLayout";

interface PageProps {
  params: { slug: string };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <UseCaseTrainingLayout slug={slug} />
  );
}
