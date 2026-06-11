import AboutUsLayout from "@/components/layouts/AboutUsLayout";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.aboutUs.title,
  description: seoData.aboutUs.description,
};

const AboutUsPage = () => {
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
      {seoData.aboutUs.h1}
    </Box>
      <AboutUsLayout />
    </Box>
  );
};

export default AboutUsPage;
