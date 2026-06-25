"use client";

import { useState, useMemo } from "react";
import { Box, Container, Button, Divider, Typography } from "@mui/material";
import BrochureSearchBar from "./BrochureSearchBar";
import { brochuresData } from "./data";
import FinalCTASection from "./FinalCTASection";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import BrochureGrid from "@/components/layouts/BrochuresLayout/BrochuresGrid";
import {
  allBrochuresData,
} from "./data";

export default function BrochursPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = useMemo(() => {
    const predefined = ["Infographic", "Events & Webinar", "Brochure", "eBook", "Report"];
    const dataCategories = allBrochuresData.map((item) => item.category);
    const uniqueCategories = Array.from(new Set([...predefined, ...dataCategories]));
    return ["All", ...uniqueCategories];
  }, []);

  const filteredItems = useMemo(() => {
    let items = allBrochuresData;
    if (activeTab !== "All") {
      items = items.filter((item) => item.category === activeTab);
    }
    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      items = items.filter((item) =>
        item.category.toLowerCase().includes(lowerQuery)
      );
    }
    return items;
  }, [activeTab, searchQuery]);

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          py: 6,
          width: {
            xs: "95%",
            sm: "92%",
            md: "90%",
            lg: "87%",
          },
          margin: "0 auto",
        }}
      >
        <BrochureSearchBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={categories}
        />
        <Divider sx={{ mb: 4 }} />

        {/* GRID */}
        <Box
          sx={{
            minHeight: {
              xs: "300px",
              sm: "400px",
              md: "500px",
              lg: "600px",
            },
            display: "flex",
            alignItems: filteredItems.length === 0 ? "center" : "flex-start",
            justifyContent: "center",
          }}
        >
          {filteredItems.length > 0 ? (
            <Box width="100%">
              <BrochureGrid items={filteredItems} />
            </Box>
          ) : (
            <Box
              sx={{
                fontFamily: din.style.fontFamily,
                textAlign: "center",
                color: COLORS.TEXT_MUTED,
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "26px",
                  lg: "30px",
                },
              }}
            >
              No items found
            </Box>
          )}
        </Box>
      </Container>

      <FinalCTASection
        title={
          brochuresData.finalCTAsection.title
        }
        subtitle={
          brochuresData.finalCTAsection.subtitle
        }
      />
    </Box>
  );
}