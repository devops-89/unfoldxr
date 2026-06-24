"use client";

import { useState, useMemo } from "react";
import { Box, Container, Button, Divider } from "@mui/material";
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

  // Dynamically extract categories from data to make it future-proof for API integrations,
  // while ensuring the specific categories mentioned are included in the correct order.
  const categories = useMemo(() => {
    const predefined = ["Infographic", "Events & Webinar", "Brochure", "eBook", "Report"];
    const dataCategories = allBrochuresData.map((item) => item.category);
    // Merge predefined with any new categories from future API data
    const uniqueCategories = Array.from(new Set([...predefined, ...dataCategories]));
    return ["All", ...uniqueCategories];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeTab === "All") return allBrochuresData;
    return allBrochuresData.filter((item) => item.category === activeTab);
  }, [activeTab]);

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
        {/* TABS SECTION */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: { xs: 6, sm: 6, md: 8, lg: 8 },
            mb: 2,
            justifyContent: "left",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveTab(category)}
              sx={{
                borderRadius: "999px",
                textTransform: "none",
                fontFamily: helvetica.style.fontFamily,
                fontWeight: 550,
                fontSize: { xs: "12px", sm: "14px" },
                padding: "4px 10px",
                backgroundColor: activeTab === category ? COLORS.PRIMARY_GREEN : "transparent",
                color: activeTab === category ? COLORS.BLACK : COLORS.TEXT_MUTED,
                //border: `1px solid ${activeTab === category ? COLORS.PRIMARY_GREEN : COLORS.TEXT_MUTED}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: activeTab === category ? COLORS.PRIMARY_GREEN : "rgba(0,0,0,0.05)",
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
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