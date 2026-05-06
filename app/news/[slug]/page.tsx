import { notFound } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { newsItems } from "@/components/layouts/NewsLayout/data";
import Image from 'next/image';
import { Chip } from '@mui/material';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = newsItems.find((b) => b.slug === slug);

  if (!news) return notFound();

   return (
    <Box sx={{ pt:15, p: 5, maxWidth: "900px", mx: "auto" }}>
      
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        {news.title}
      </Typography>

      <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <Link href="/news" style={{ textDecoration: "none" }}>
          <Chip
            label="← Back to News"
            clickable
            sx={{
              borderRadius: "999px",
              fontWeight: 500,
            }}
          />
        </Link>
        <Typography sx={{ color: "text.secondary" }}>
          {news.date} • {news.readTime}
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
          src={news.image}
          alt={news.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      <Typography sx={{ mt: 3, lineHeight: 1.7 }}>
        {news.content}
      </Typography>

    </Box>
  );

}