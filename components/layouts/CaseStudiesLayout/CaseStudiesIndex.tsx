"use client";
import { Container } from "@mui/material";
import CaseStudiesGrid from "./CaseStudiesGrid";
import CaseStudiesPagination from "./CaseStudiesPagination";
import { caseStudyItems } from "./data";
import { useState } from "react";
import CaseStudiesHeader from "./CaseStudiesHeader";


export default function CaseStudiesPage() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = caseStudyItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Container maxWidth={false}
     sx={{ 
        py: 6,
        width: { xs: "95%", md: "90%", lg: "87%" },
        margin: "0 auto",
     }}>
      <CaseStudiesHeader />
      <CaseStudiesGrid news={currentItems} />
      <CaseStudiesPagination count={Math.ceil(caseStudyItems.length / itemsPerPage)}
        page={page}
        onChange={handleChange}/>
    </Container>
  );
}