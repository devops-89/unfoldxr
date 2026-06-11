
import { Box } from "@mui/material";
import PartnersLayout from "@/components/layouts/partners/PartnersLayout";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.partners.title,
  description: seoData.partners.description,
};

export default function Partners() {
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
      {seoData.partners.h1}
    </Box>
      <PartnersLayout />
    </Box>
  );
}
