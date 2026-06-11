import { Box } from "@mui/material";
import UseCaseTrainingLayout from "@/components/layouts/UseCaseTrainingLayout";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.usecases["training"].title,
  description: seoData.usecases["training"].description,
  alternates: {
    canonical: "/usecases/training",
  },
};

const UseCaseTrainingPage = () => {
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
        {seoData.usecases["training"].h1}
      </Box>
      <UseCaseTrainingLayout />
    </Box>
  );
};

export default UseCaseTrainingPage;
