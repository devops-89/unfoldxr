import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import { CaseStudyItem } from "./data";
import Link from "next/link";
import { helvetica } from "@/utils/fonts";

export default function CaseStudyCard({ item }: { item: CaseStudyItem }) {

  const shortTitle = item.title.split(" ").slice(0, 5).join(" ");
  const shortSummary = item.content.split(" ").slice(0, 19).join(" ");

  return (
    <Link 
      href={`/casestudies/${item.slug}`} 
      style={{ 
        color: "black", 
        textDecoration: "none" 
        }}
    >
    <Card 
        sx={{ 
          borderRadius: 0, 
          overflow: "hidden",
          transition: "all 0.3s ease", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
    >
      
      {/* Image wrapper */}
      <Box sx={{ position: "relative", width: "100%", height: 180 }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <CardContent>
        <Typography 
          fontWeight={700}
          sx={{fontFamily: helvetica.style.fontFamily}}
        >{shortTitle}...
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{fontFamily: helvetica.style.fontFamily}}
        >
          {shortSummary}...
        </Typography>

        <Box mt={2} display="flex" justifyContent="space-between">
          <Box>
            <Typography 
              variant="caption"
              sx={{fontFamily: helvetica.style.fontFamily}}
            >{item.date}
            </Typography>
            {item.author && (
              <Typography 
                variant="caption" 
                display="block"
                sx={{fontFamily: helvetica.style.fontFamily}}
              >
                By "{item.author}"
              </Typography>
            )}
          </Box>

          {item.readTime && (
            <Typography 
              variant="caption"
              sx={{fontFamily: helvetica.style.fontFamily}}
            >{item.readTime}</Typography>
          )}
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
}