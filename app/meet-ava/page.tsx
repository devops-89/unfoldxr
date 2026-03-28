import MeetAvaPageLayout from "@/components/layouts/MeetAvaPageLayout";
import { Box } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet AVA | UnfoldXR",
  description:
    "AVA — the agentic intelligence behind UnfoldXR. Built with heart, powered by AI for frontline work.",
};

export default function MeetAvaPage() {
  return (
    <Box component="main">
      <MeetAvaPageLayout />
    </Box>
  );
}
