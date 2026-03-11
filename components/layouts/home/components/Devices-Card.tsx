import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { DEVICES_SECTION_DATA_PROPS } from "@/utils/types";
import { Circle } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const DevicesCard = ({
  bgImg,
  img,
  heading,
  description,
}: DEVICES_SECTION_DATA_PROPS) => {
  return (
    <Box>
      {bgImg ? (
        <Box
          sx={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRadius: "20px",
            px: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: 30,
                fontWeight: 900,
                color: COLORS.WHITE,
                textTransform: "uppercase",
                width: "60%",
              }}
            >
              {heading}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Divider
                sx={{
                  backgroundColor: COLORS.WHITE,
                  borderWidth: "3px",
                  width: "100px",
                  borderRadius: "30px",
                }}
              />
              <Circle sx={{ color: COLORS.WHITE, fontSize: 10 }} />
            </Stack>
            <Typography
              sx={{ color: COLORS.WHITE, fontSize: 20, fontWeight: 400, mt: 2 }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      ) : img ? (
        <Box
          sx={{
            backgroundColor: "#D3DEE4",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "300px",
            px: 5,
            overflow: "hidden",
            backgroundImage: `url(${img.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <Box sx={{ width: 220 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: 25,
                fontWeight: 900,
                color: COLORS.BLACK,
                textTransform: "uppercase",
              }}
            >
              {heading}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Divider
                sx={{
                  backgroundColor: COLORS.BLACK,
                  borderWidth: "3px",
                  width: "100px",
                  borderRadius: "30px",
                }}
              />
              <Circle sx={{ color: COLORS.BLACK, fontSize: 10 }} />
            </Stack>
            <Typography
              sx={{ color: COLORS.BLACK, fontSize: 16, fontWeight: 400, mt: 2 }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: "#D3DEE4",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "300px",
            px: 5,
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: 250 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: 25,
                fontWeight: 900,
                color: COLORS.BLACK,
                textTransform: "uppercase",
              }}
            >
              {heading}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Divider
                sx={{
                  backgroundColor: COLORS.BLACK,
                  borderWidth: "3px",
                  width: "100px",
                  borderRadius: "30px",
                }}
              />
              <Circle sx={{ color: COLORS.BLACK, fontSize: 10 }} />
            </Stack>
            <Typography
              sx={{ color: COLORS.BLACK, fontSize: 16, fontWeight: 400, mt: 2 }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DevicesCard;
