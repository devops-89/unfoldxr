"use client";

import { Box, Button, InputBase, Divider, ClickAwayListener, alpha } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface Props {
  activeTab: string;
  setActiveTab: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  categories: string[];
}

export default function BrochureSearchBar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  categories,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.04)",
        borderRadius: "999px",
        pl: 1,
        pr: 0,
        mt: { xs: 6, sm: 6, md: 8, lg: 8 },
        mb: 2,
        width: { xs: "100%", md: "80%", lg: "70%" },
        maxWidth: "800px",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Search Input (Left side) */}
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", px: 2 }}>
        <SearchIcon sx={{ color: COLORS.TEXT_MUTED, mr: 1 }} />
        <InputBase
          placeholder="Search by Category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            flex: 1,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: "14px", sm: "16px" },
          }}
        />
      </Box>

      {/* Divider */}
      <Divider orientation="vertical" flexItem sx={{ my: 1, borderColor: "rgba(0,0,0,0.2)" }} />

      {/* Category Dropdown (Right side) */}
      <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
        <Box
          sx={{
            flex: { xs: "0 0 40%", md: "0 0 30%" },
            position: "relative",
            display: "flex",
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
              padding: "4px 24px",
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
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              right: 0,
              left: 0,
              pt: "8px",
              zIndex: 10,
              width: "100%",
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
    </Box>
  );
}
