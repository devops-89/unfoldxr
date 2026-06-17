import { notFound } from 'next/navigation';
import { Box, Typography, Divider } from '@mui/material';
import { newsItems } from "@/components/layouts/NewsLayout/data";
import Image from 'next/image';
import { Chip } from '@mui/material';
import Link from 'next/link';
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import ReactMarkDown from 'react-markdown';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = newsItems.find((b) => b.slug === slug);

  if (!news) return notFound();

   return (
    <Box 
        sx={{ 
            maxWidth: "100%", 
            mx: "auto",
            backgroundColor: COLORS.BLACK,
            minHeight: "100vh",
            color: COLORS.WHITE,
            pt: { xs: 12, md: 15 }, // Prevent being cut by the sticky navbar
            }}
    >
      <Box
        sx={{
            position: "relative",
            width: { xs: "95%", md: "60%" },
            mx: "auto",
            aspectRatio: "16/9",
            height: "auto",
            display: "flex",
            alignItems: "center",
            color: COLORS.WHITE,
            overflow: "hidden",
            borderRadius: { xs: 4, md: "24px" },
           }}
      >
        <Image
          src={news.image}
          alt={news.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
    {/*    <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
                position: "relative",
                zIndex: 2,
                width: { xs: "100%", md: "80%" },
                boxSizing: "border-box",
                mx: "auto",
                pt: { xs: 12, md: 18 },
                pb: { xs: 8, md: 12 },
                pl: { xs: 0, md: 2 },
                px: { xs: 3, md: 0 },
              }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: 26, md: 50, lg: 36 },
              lineHeight: { xs: "35px", md: "42px" },
              maxWidth: 1050,
              whiteSpace: "pre-line",
              width: { xs: "100%", lg: "70%" },
              fontFamily: din.style.fontFamily,
            }}
          >
            {news.title}
          </Typography>
        </Box>
        */}
      </Box>

      <Box
        sx={{
          width: { xs: "95%", md: "90%", lg: "84%" },
          mx: "auto",
          pt: { xs: 4, md: 6 },
          pb: 8,
        }}
      >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Link href="/resources/news" style={{ textDecoration: "none" }}>
          <Chip
            label="← Back to News"
            clickable
            sx={{
              borderRadius: "999px",
              fontWeight: 600,
              fontFamily: helvetica.style.fontFamily,
              backgroundColor: "rgba(255,255,255,0.1)", 
              color: COLORS.WHITE,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" }
            }}
          />
        </Link>
        <Typography 
            sx={{ 
                color: "#aaa", 
                fontFamily: helvetica.style.fontFamily,
                }}
        >
          {news.location && `${news.location} • `} {news.date} • {news.readTime}
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mt: 3, mb: 1 }} />

      <Typography
        component="div"
        sx={{ 
                mt: 4, 
                fontFamily: helvetica.style.fontFamily,
                lineHeight: { xs: 1.7, md: 1.8 }, 
                fontSize: { xs: "1.05rem", md: "1.15rem", lg: "1.2rem" },
                
                // Base text color: Soft light gray (easier to read than pure white)
                color: "#e0e0e0", 

                // Highlighted content & headings in PRIMARY GREEN
                '& h3': { mt: 5, mb: 2, fontSize: { xs: '1.5rem', md: '1.8rem' }, fontWeight: 'bold', fontFamily: din.style.fontFamily, color: COLORS.PRIMARY_GREEN },
                '& h4': { mt: 4, mb: 1.5, fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 'bold', color: COLORS.PRIMARY_GREEN },
                '& strong': { fontWeight: 700, color: COLORS.PRIMARY_GREEN }, // Makes bolded text green!
                
                // Lists & Links formatting
                '& p': { mb: 3 },
                '& ul': { paddingLeft: '24px', marginBottom: '24px', listStyleType: 'disc' },
                '& li': { marginBottom: '12px', display: 'list-item' },
                '& a': { color: COLORS.PRIMARY_GREEN, textDecoration: 'none', '&:hover': { textDecoration: 'underline' }} 
                }}
      >
      <ReactMarkDown
        components={{
                a: ({ node, ...props }) => {
                  const isWebLink = props.href?.startsWith('http');
                  return (
                    <a 
                      {...props} 
                      target={isWebLink ? '_blank' : undefined}
                      rel={isWebLink ? 'noopener noreferrer' : undefined}
                    />
                  );
                }
              }}
      >
        {news.content}
      </ReactMarkDown>
      </Typography>
      </Box>

    </Box>
  );

}