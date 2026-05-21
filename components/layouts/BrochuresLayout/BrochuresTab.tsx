"use client";

import { Box, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import{ COLORS } from "@/utils/enum";
import Link from "next/link";
import { categorySlugMap } from "./data";

export type Category =
  | "Infographic"
  | "Events & Webinar"
  | "Brochure"
  | "eBook"
  | "Report";

interface BrochuresTabsProps {
  tabs: Category[];
  activeTabSlug: string;
}

const BrochuresTabs = ({
  tabs,
  activeTabSlug,
}: BrochuresTabsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: {
          xs: "10px",
          sm: "16px",
          md: "24px",
          lg: "30px",
        },
        borderBottom: "1px solid #D9D9D9",
        pt: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 10,
        },
        pb: 1,
        flexWrap: "wrap",
      }}
    >
      {tabs.map((tab) => {
        const isActive = categorySlugMap[tab] === activeTabSlug;

        return (
          <Link
          key={tab}
          href={`/brochures/${categorySlugMap[tab]}`}
          style={{
             textDecoration: "none",
           }}
          >
          <Typography
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
          </Link>

        );
      })}
    </Box>
  );
};

export default BrochuresTabs;