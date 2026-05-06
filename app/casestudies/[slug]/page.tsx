import { notFound } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { caseStudyItems } from "@/components/layouts/CaseStudiesLayout/data";
import Image from 'next/image';
import { Chip } from '@mui/material';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudyItems.find((b) => b.slug === slug);

  if (!caseStudy) return notFound();

   return (
    <Box sx={{ p: 5, maxWidth: "900px", mx: "auto" }}>
      
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        {caseStudy.title}
      </Typography>

      <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <Link href="/casestudies" style={{ textDecoration: "none" }}>
          <Chip
            label="← Back to Case Study"
            clickable
            sx={{
              borderRadius: "999px",
              fontWeight: 500,
            }}
          />
        </Link>
        <Typography sx={{ color: "text.secondary" }}>
          {caseStudy.date} • {caseStudy.readTime}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 400,
          mt: 3,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      <Typography sx={{ mt: 3, lineHeight: 1.7 }}>
        {caseStudy.content}
      </Typography>

    </Box>
  );

}