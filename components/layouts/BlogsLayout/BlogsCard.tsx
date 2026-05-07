import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import { BlogsItem } from "./data";
import Link from "next/link";
import { helvetica } from "@/utils/fonts";

export default function BlogsCard({ item }: { item: BlogsItem }) {

  const shortTitle = item.title.split(" ").slice(0, 5).join(" ");
  const shortSummary = item.content.split(" ").slice(0, 12).join(" ");

  return (
    <Card 
        sx={{ 
          borderRadius: 0, 
          overflow: "hidden",
          transition: "all 0.3s ease", 
          "&:hover": {
          transform: "translateY(-6px)",
          },
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
          <Link href={`/blogs/${item.slug}`} style={{ color: "black", textDecoration: "none" }}>
            Read more
          </Link>
        </Typography>

        <Box mt={2} display="flex" justifyContent="space-between">
            <Typography 
              variant="caption" 
              color="text.secondary"
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
  );
}