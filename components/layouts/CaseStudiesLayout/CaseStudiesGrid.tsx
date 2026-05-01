import { Grid } from "@mui/material";
import CaseStudyCard from "./CaseStudiesCards";
import { CaseStudyItem } from "./data";

export default function NewsGrid({ news }: { news: CaseStudyItem[] }) {
  return (
    <Grid container spacing={3}>
      {news.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
          <CaseStudyCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}