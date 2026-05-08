"use client";

import { useState } from "react";
import { Container } from "@mui/material";

import BrochuresTabs, {
  Category,
} from "@/components/layouts/BrochuresLayout/BrochuresTab";

import BrochureGrid from "@/components/layouts/BrochuresLayout/BrochuresGrid";

import {
  brochureTabData,
} from "./data";

export default function BrochursPage() {

  const tabs: Category[] = [
    "Infographic",
    "Events & Webinar",
    "Brochure",
    "eBook",
    "Report",
  ];

  const [activeTab, setActiveTab] =
    useState<Category>("Infographic");

  return (
    <Container
      maxWidth={false}
      sx={{
        py: 6,
        width: {
          xs: "95%",
          md: "90%",
          lg: "87%",
        },
        margin: "0 auto",
      }}
    >
      {/* TABS */}
      <BrochuresTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* GRID */}
      <BrochureGrid
        items={brochureTabData[activeTab]}
      />
    </Container>
  );
}