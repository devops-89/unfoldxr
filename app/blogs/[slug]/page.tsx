import { notFound } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { blogsItems } from "@/components/layouts/BlogsLayout/data";
import Image from 'next/image';
import { Chip } from '@mui/material';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogsItems.find((b) => b.slug === slug);

  if (!blog) return notFound();

   return (
    <Box sx={{ p: 5, maxWidth: "900px", mx: "auto" }}>
      
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        {blog.title}
      </Typography>

      <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <Link href="/blogs" style={{ textDecoration: "none" }}>
          <Chip
            label="← Back to Blogs"
            clickable
            sx={{
              borderRadius: "999px",
              fontWeight: 500,
            }}
          />
        </Link>
        <Typography sx={{ color: "text.secondary" }}>
          {blog.date} • {blog.readTime}
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
          src={blog.image}
          alt={blog.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      <Typography sx={{ mt: 3, lineHeight: 1.7 }}>
        {blog.content}
      </Typography>

    </Box>
  );

}