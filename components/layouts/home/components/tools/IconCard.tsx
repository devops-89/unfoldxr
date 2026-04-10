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
        height: { xs: "180px", md: "210px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 16, md: 16 },
          fontFamily: helvetica.style.fontFamily,
          fontWeight: 700,
          textTransform: "none",
        }}
      >
        {card.title}
      </Typography>

      <Box sx={{ position: "relative", width: "100%", height: "100%", mt: 2 }}>
        {card.icons.map((icon, i) => {
          const positions = [
            { top: "30%", left: "50%", size: 80, bg: "transparent" }, 
            { top: "65%", left: "20%", size: 80, bg: "transparent" }, 
            { top: "70%", left: "80%", size: 80, bg: "transparent" }, 
          ];
          
          const pos = positions[i] || { top: "50%", left: "50%", size: 80, bg: "transparent" };

          return (
            <Box
              key={i}
              sx={{
                width: { xs: 60, md: pos.size },
                height: { xs: 60, md: pos.size },
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
              {/* Force image to fill its larger container */}
              <Box sx={{ position: "relative", width: "80%", height: "80%" }}>
                <Image src={icon} alt="Tools layout icon" fill style={{ objectFit: 'contain' }} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default IconCard;