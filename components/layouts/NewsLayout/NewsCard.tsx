import { Card, CardMedia, CardContent, Typography, Box, Link } from "@mui/material";
import { NewsItem } from "./data";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia component="img" height="180" image={item.image} />

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