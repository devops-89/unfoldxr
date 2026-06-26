"use client";

import { Box, Button, ClickAwayListener, alpha } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface Props {
  activeTab: string;
  setActiveTab: (val: string) => void;
  categories: string[];
}

export default function BrochureSearchBar({
  activeTab,
  setActiveTab,
  categories,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          mt: { xs: 6, sm: 6, md: 8, lg: 8 },
          mb: 2,
          // Mimics the original 30%-40% width of the old 800px search bar
          width: { xs: "100%", sm: "280px", md: "300px" }, 
          backgroundColor: "rgba(0,0,0,0.04)",
          borderRadius: "999px",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
                color: COLORS.TEXT_MUTED,
              }}
            />
          }
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            fontFamily: helvetica.style.fontFamily,
            fontWeight: 550,
            fontSize: { xs: "14px", sm: "16px" },
            padding: "5px 24px", // Adjusted slightly for the standalone pill
            color: COLORS.BLACK_ALPHA_60,
            transition: "all 0.3s ease",
            width: "100%",
            justifyContent: "space-between",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.05)",
            },
          }}
        >
          {activeTab}
        </Button>
        
        {/* Dropdown Menu */}
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            right: 0,
            left: 0,
            pt: "8px",
            zIndex: 10,
            opacity: isDropdownOpen ? 1 : 0,
            visibility: isDropdownOpen ? "visible" : "hidden",
            transform: isDropdownOpen ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.3s ease",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid #EDEDED",
              overflow: "hidden",
              p: 1,
            }}
          >
            {categories.map((category) => (
              <Box
                key={category}
                onClick={() => {
                  setActiveTab(category);
                  setIsDropdownOpen(false);
                }}
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: activeTab === category ? COLORS.BLACK : "#424242",
                  backgroundColor: "transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: alpha(COLORS.PRIMARY_GREEN, 0.5),
                  },
                }}
              >
                {category}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}