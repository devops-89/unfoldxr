import { Grid } from "@mui/material";
import BlogsCard from "./BlogsCard";
import { BlogsItem } from "./data";

export default function BlogsGrid({ blogs }: { blogs: BlogsItem[] }) {
  return (
    <Grid container spacing={3}>
      {blogs.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
          <BlogsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}