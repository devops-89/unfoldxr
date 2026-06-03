import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import { BlogsItem } from "./data";
import Link from "next/link";
import { helvetica } from "@/utils/fonts";

export default function BlogsCard({ item }: { item: BlogsItem }) {

  const shortTitle = item.title.split(" ").slice(0, 5).join(" ");
  const shortSummary = item.content.split(" ").slice(0, 19).join(" ");

  return (
    <Link 
      href={`/resources/blogs/${item.slug}`} 
      style={{ 
        color: "black", 
        textDecoration: "none",
        display: "block",
        height: "100%",
        }}
      >
    <Card 
        sx={{ 
          height: "100%",
          borderRadius: 0, 
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease", 
          "&:hover": {
          transform: "translateY(-6px)",
          },
          }}
    >
      
      {/* Image wrapper */}
      <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9", flexShrink: 0 }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <CardContent
        sx={{ 
            display: "flex", 
            flexDirection: "column", 
            flexGrow: 1,
            height: "100%"
          }}
      >
        <Box>
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
        </Box>

        <Box mt="auto" pt={2} display="flex" justifyContent="space-between">
            <Typography 
              variant="caption" 
              sx={{fontFamily: helvetica.style.fontFamily}}
            >
              {item.date}
            </Typography>
          {item.readTime && (
            <Typography 
              variant="caption"
              sx={{fontFamily: helvetica.style.fontFamily}}
            >{item.readTime}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
}