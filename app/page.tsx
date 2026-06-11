import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import HomeLayout from "@/components/layouts/home/HomeLayout";
import type { Metadata } from "next";
import { seoData } from "@/utils/seoData";

export const metadata: Metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
};

export default function Home() {
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
      {seoData.home.h1}
    </Box>
      <HomeLayout />
    </Box>
  );
}
