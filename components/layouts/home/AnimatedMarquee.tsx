"use client";

import { Box, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const AnimatedMarquee = () => {
  const text = (
    <>
      AUGMENTING <span>HUMAN CAPABILITY</span> FOR THE FUTURE OF WORK •{" "}
    </>
  );

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: COLORS.BLACK,
        py: { xs: 3, md: 4 },
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 20s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
          // On hover pause animation
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {/* We render multiple instances to ensure a smooth, gapless infinite loop */}
        {[...Array(6)].map((_, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: din.style.fontFamily,
              fontSize: { xs: 40, sm: 60, md: 80 },
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
              textTransform: "uppercase",
              mx: 2,
              whiteSpace: "nowrap",
              cursor: "default",
              transition: "all 0.3s ease",
              "& span": {
                color: "#B6EC1A",
                WebkitTextStroke: "0px",
              },
              "&:hover": {
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
              },
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AnimatedMarquee;
