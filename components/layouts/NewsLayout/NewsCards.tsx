import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import Image from "next/image";
import { NewsItem } from "./data";

export default function NewsCard({ item }: { item: NewsItem }) {
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
        <Typography fontWeight={700}>{item.title}</Typography>

        <Typography variant="body2" color="text.secondary">
          {item.summary} <Link href="#">Read more</Link>
        </Typography>

        <Box mt={2} display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="caption">{item.date}</Typography>
            {item.author && (
              <Typography variant="caption" display="block">
                By "{item.author}"
              </Typography>
            )}
          </Box>

          {item.readTime && (
            <Typography variant="caption">{item.readTime}</Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}