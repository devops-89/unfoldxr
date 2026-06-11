
import { Box } from "@mui/material";
import ContactLayout from "@/components/layouts/contact/ContactLayout";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.contactUs.title,
  description: seoData.contactUs.description,
};

export default function Contact() {
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
      {seoData.contactUs.h1}
    </Box>
      <ContactLayout />
    </Box>
  );
}
