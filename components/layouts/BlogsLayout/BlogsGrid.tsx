import { Grid } from "@mui/material";
import BlogsCard from "./BlogsCard";
import { BlogsItem } from "./data";

export default function NewsGrid({ news }: { news: BlogsItem[] }) {
  return (
    <Grid container spacing={3}>
      {news.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
          <BlogsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}