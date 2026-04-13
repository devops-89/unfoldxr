import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { OUTCOME_CARD_PROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import ContainedButton from "@/components/widgets/ContainedButton";

const OutcomeCard = ({ number, label, link }: OUTCOME_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#272829",
        px: { xs: 3, md: 4 },
        py: { xs: 3, md: 3 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2, md: 2 },
        borderRadius: "16px",
        minHeight: { xs: "auto", md: "110px" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: { xs: 2, md: 1 }, flex: 1 }}>
        {/* Number */}
        <Typography
          sx={{
            color: "rgba(182, 236, 26, 0.60)",
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 40, md: 36 },
            fontWeight: 900,
            lineHeight: { xs: "35px", md: "52px" },
            flexShrink: 0,
            minWidth: { xs: 40, md: 50 },
          }}
        >
          {number}
        </Typography>

        {/* Label */}
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 14, md: 18 },
            fontWeight: 900,
            lineHeight: { xs: "28px", md: "30px" },
            color: COLORS.WHITE,
            textTransform: "uppercase",
            letterSpacing: "0.52px",
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* CTA Button placed on right side */}
      <Box sx={{ flexShrink: 0, mt: { xs: 1, md: 0 }, alignSelf: { xs: "flex-end", md: "center" } }}>
        {link ? (
          <Link href={link} passHref legacyBehavior>
            <ContainedButton
              sx={{
                width: "auto",
                minWidth: "120px",
                height: { xs: "36px", md: "42px" },
                fontSize: { xs: 12, md: 14 },
                fontWeight: 700,
                borderRadius: "100px",
                px: 2,
              }}
            >
              Know More
            </ContainedButton>
          </Link>
        ) : (
          <ContainedButton
            sx={{
              width: "auto",
              minWidth: "120px",
              height: { xs: "36px", md: "42px" },
              fontSize: { xs: 12, md: 14 },
              fontWeight: 700,
              borderRadius: "100px",
              px: 2,
            }}
          >
            Know More
          </ContainedButton>
        )}
      </Box>
    </Box>
  );
};

export default OutcomeCard;
