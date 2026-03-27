import { COLORS } from "@/utils/enum";
import { din } from "@/utils/fonts";
import { DEVICES_SECTION_DATA_PROPS } from "@/utils/types";
import { Circle } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
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
            height: { xs: "220px", md: "300px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRadius: "20px",
            px: { xs: 2, md: 5 }, 
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 18, md: 30 },
                fontWeight: 900,
                color: COLORS.WHITE,
                textTransform: "uppercase",
                width: { xs: "100%", md: "60%" },
              }}
            >
              {heading}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Divider
                sx={{
                  backgroundColor: COLORS.WHITE,
                  borderWidth: "3px",
                  width: { xs: "60px", md: "100px" },
                  borderRadius: "30px",
                }}
              />
              <Circle sx={{ color: COLORS.WHITE, fontSize: 10 }} />
            </Stack>

            <Typography
              sx={{
                color: COLORS.WHITE,
                fontSize: { xs: 14, md: 20 },
                fontWeight: 400,
                mt: 2,
              }}
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
            height: { xs: "220px", md: "300px" },
            px: { xs: 2, md: 5 },
            overflow: "hidden",
            backgroundImage: `url(${img.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "right bottom", md: "right" }, 
            backgroundSize: { xs: "120px", md: "auto" }, 
          }}
        >
          <Box sx={{ width: { xs: "100%", md: 220 } }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 18, md: 25 },
                fontWeight: 900,
                color: COLORS.BLACK,
                textTransform: "uppercase",
              }}
            >
              {heading}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Divider
                sx={{
                  backgroundColor: COLORS.BLACK,
                  borderWidth: "3px",
                  width: { xs: "60px", md: "100px" },
                  borderRadius: "30px",
                }}
              />
              <Circle sx={{ color: COLORS.BLACK, fontSize: 10 }} />
            </Stack>

            <Typography
              sx={{
                color: COLORS.BLACK,
                fontSize: { xs: 14, md: 16 },
                fontWeight: 400,
                mt: 2,
              }}
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
            height: { xs: "220px", md: "300px" },
            px: { xs: 2, md: 5 },
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: 250 } }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 18, md: 25 },
                fontWeight: 900,
                color: COLORS.BLACK,
                textTransform: "uppercase",
              }}
            >
              {heading}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Divider
                sx={{
                  backgroundColor: COLORS.BLACK,
                  borderWidth: "3px",
                  width: { xs: "60px", md: "100px" },
                  borderRadius: "30px",
                }}
              />
              <Circle sx={{ color: COLORS.BLACK, fontSize: 10 }} />
            </Stack>

            <Typography
              sx={{
                color: COLORS.BLACK,
                fontSize: { xs: 14, md: 16 },
                fontWeight: 400,
                mt: 2,
              }}
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