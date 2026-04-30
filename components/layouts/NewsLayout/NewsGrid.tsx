import { Grid } from "@mui/material";
import NewsCards from "./NewsCards";
import { NewsItem } from "./data";

export default function NewsGrid({ news }: { news: NewsItem[] }) {
  return (
    <Grid container spacing={3}>
      {news.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
          <NewsCards item={item} />
        </Grid>
      ))}
    </Grid>
  );
}