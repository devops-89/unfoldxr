import BrochuresIndex from "@/components/layouts/BrochuresLayout/BrochuresIndex";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.brochures.title,
  description: seoData.brochures.description,
};

export default function Page() {
  return (
    <Box>
      <Box 
        component="h1" 
        sx={{ 
          position: 'absolute', 
          width: '1px', 
          height: '1px', 
          padding: 0, 
          margin: '-1px', 
          overflow: 'hidden', 
          clip: 'rect(0, 0, 0, 0)', 
          whiteSpace: 'nowrap', 
          border: 0 
        }}
      >
        {seoData.brochures.h1}
      </Box>
      <BrochuresIndex />
    </Box>
  );
}
