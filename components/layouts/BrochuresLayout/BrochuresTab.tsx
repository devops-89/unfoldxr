"use client";

import { Box, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import{ COLORS } from "@/utils/enum";

export type Category =
  | "Infographic"
  | "Events & Webinar"
  | "Brochure"
  | "eBook"
  | "Report";

interface BrochuresTabsProps {
  tabs: Category[];
  activeTab: Category;
  setActiveTab: (tab: Category) => void;
}

const BrochuresTabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: BrochuresTabsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        borderBottom: "1px solid #D9D9D9",
        pt: 10,
        pb: 1,
        flexWrap: "wrap",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <Typography
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              px: 1.5,
              py: 1,
              borderRadius: "999px",
              cursor: "pointer",
              fontFamily: helvetica.style.fontFamily,
              fontSize: "15px",
              fontWeight: 500,
              transition: "0.3s",
              backgroundColor: isActive ? COLORS.PRIMARY_GREEN : "none",
              color: isActive ? COLORS.BLACK : COLORS.TEXT_MUTED,
              "&:hover": {
                color: COLORS.BLACK,
              },
            }}
          >
            {tab}
          </Typography>
        );
      })}
    </Box>
  );
};

export default BrochuresTabs;