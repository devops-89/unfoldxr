import { notFound } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { caseStudyItems } from "@/components/layouts/CaseStudiesLayout/data";
import Image from 'next/image';
import { Chip } from '@mui/material';
import Link from 'next/link';
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudyItems.find((b) => b.slug === slug);

  if (!caseStudy) return notFound();

   return (
     <Box 
            sx={{ 
                maxWidth: "100%", 
                mx: "auto" 
                }}
        >
          <Box
            sx={{
                position: "relative",
                minHeight: { xs: "60vh", md: "60vh" },
                display: "flex",
                alignItems: "center",
                color: COLORS.WHITE,
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
            <Box
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
                {caseStudy.title}
              </Typography>
            </Box>
          </Box>
    
          <Box
            sx={{
              width: { xs: "95%", md: "90%", lg: "84%" },
              mx: "auto",
              pt: 6,
              pb: 8,
            }}
          >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link href="/casestudies" style={{ textDecoration: "none"}}>
              <Chip
                label="← Back to Case Study"
                clickable
                sx={{
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontFamily: helvetica.style.fontFamily
                }}
              />
            </Link>
            <Typography 
                sx={{ 
                    color: "text.secondary",
                    fontFamily: helvetica.style.fontFamily,
                    }}
            >
              {caseStudy.date} • {caseStudy.readTime}
            </Typography>
          </Box>
    
          <Typography 
            sx={{ 
                mt: 3, 
                fontFamily: helvetica.style.fontFamily,
                lineHeight: 1.7, 
                fontSize: "1.02rem" 
                }}
          >
            {caseStudy.content}
          </Typography>
          </Box>
    
        </Box>
  );

}