"use client";

import { Box, Button } from "@mui/material";
import { helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { alpha } from "@mui/material/styles";

interface Props {
  activeTab: string;
  setActiveTab: (val: string) => void;
  categories: string[];
}

export default function BrochuresTabs({
  activeTab,
  setActiveTab,
  categories,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 1, sm: 1.5, md: 2 },
        mt: { xs: 6, sm: 6, md: 8, lg: 8 },
        mb: 2,
        alignItems: "center",
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
            fontSize: { xs: "10px", sm: "12px" },
            padding: "4px 8px",
            color: activeTab === category ? COLORS.BLACK : COLORS.TEXT_MUTED,
            backgroundColor:
              activeTab === category
                ? alpha(COLORS.PRIMARY_GREEN, 0.5)
                : "rgba(0,0,0,0.04)",
            border:
              activeTab === category
                ? `1px solid ${COLORS.PRIMARY_GREEN}`
                : "1px solid rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: alpha(COLORS.PRIMARY_GREEN, 0.3),
            },
          }}
        >
          <Box component="span" sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Hidden bold text to pre-allocate width and prevent layout shift */}
            <Box component="span" sx={{ fontWeight: 600, visibility: 'hidden', height: 0, overflow: 'hidden' }}>
              {category}
            </Box>
            {/* Visible text */}
            <Box component="span" sx={{ fontWeight: activeTab === category ? 600 : 500 }}>
              {category}
            </Box>
          </Box>
        </Button>
      ))}
    </Box>
  );
}
