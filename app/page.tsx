import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import HomeLayout from "@/components/layouts/home/HomeLayout";

export default function Home() {
  return (
    <Box>
      <HomeLayout />
    </Box>
  );
}
