"use client";

import { Box, Container } from "@mui/material";
import { brochuresData } from "./data";
import FinalCTASection from "./FinalCTASection";
import { din } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import BrochureGrid from "@/components/layouts/BrochuresLayout/BrochuresGrid";
import {
  allBrochuresData,
} from "./data";

export default function BrochursPage() {
  
  const items = allBrochuresData;
  
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
            alignItems: items.length === 0 ? "center" : "flex-start",
            justifyContent: "center",
          }}
        >
          {items.length > 0 ? (
            <Box width="100%">
              <BrochureGrid items={items} />
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