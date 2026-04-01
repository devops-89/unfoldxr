import { Box, Stack, Typography } from "@mui/material";
import { ICON_CARD_PROPS } from "@/utils/types";
import Image from "next/image";
import { helvetica } from "@/utils/fonts";

const IconCard = ({ card }: { card: ICON_CARD_PROPS }) => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: "16px",
        backgroundColor: "#0A0A0A", 
        color: "white",
        height: { xs: "200px", md: "240px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontFamily: helvetica.style.fontFamily,
          fontWeight: 700,
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.3,
          mb: 1,
        }}
      >
        {card.title}
      </Typography>

      <Box sx={{ position: "relative", width: "100%", height: "100%", mt: 2 }}>
        {card.icons.map((icon, i) => {
          const positions = [
            { top: "30%", left: "50%", size: 56, bg: "transparent" }, 
            { top: "65%", left: "20%", size: 56, bg: "transparent" }, 
            { top: "70%", left: "80%", size: 56, bg: "transparent" }, 
          ];
          
          const pos = positions[i] || { top: "50%", left: "50%", size: 56, bg: "transparent" };

          return (
            <Box
              key={i}
              sx={{
                width: { xs: 44, md: pos.size },
                height: { xs: 44, md: pos.size },
                borderRadius: "50%",
                backgroundColor: pos.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image src={icon} alt="Tools layout icon" width={40} height={40} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default IconCard;