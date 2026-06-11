import MeetAvaPageLayout from "@/components/layouts/MeetAvaPageLayout";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.meetAva.title,
  description: seoData.meetAva.description,
};

export default function MeetAvaPage() {
  return (
    <Box component="main">
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
            {seoData.meetAva.h1}
          </Box>
      <MeetAvaPageLayout />
    </Box>
  );
}
