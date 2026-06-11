import BlogsIndex from "@/components/layouts/BlogsLayout/BlogsIndex";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
    title: seoData.blogs.title,
    description: seoData.blogs.description,
};

const page = () => {
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
            {seoData.blogs.h1}
          </Box>
            <BlogsIndex />
        </Box>
    )
}

export default page;