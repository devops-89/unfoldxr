import UseCaseTrainingLayout from "@/components/layouts/UseCaseTrainingLayout";

interface PageProps {
  params: { slug: string };
}

export default function DynamicPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <UseCaseTrainingLayout slug={slug} />
  );
}
