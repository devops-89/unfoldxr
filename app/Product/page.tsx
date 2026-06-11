import { Box } from "@mui/material";
import ProductLayout from "@/components/layouts/ProductLayout";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.product.title,
  description: seoData.product.description,
};


const ProductPage = () => {
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
            {seoData.product.h1}
          </Box>
      <ProductLayout />
    </Box>
  );
};

export default ProductPage;
