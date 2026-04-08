import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import ContainedButton from "@/components/widgets/ContainedButton";
import { homePage } from "@/utils/Website-Data";

import { COLORS } from "@/utils/enum";

const SupportYourOperations = () => {
  const data = homePage.productPage.supportOperations;

  return (
    <Box sx={{ color: COLORS.WHITE }}>
      {/* Operations Lifecycle section heading starts here with full-width black background */}
      <Box sx={{ backgroundColor: COLORS.BLACK }}>
        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            mx: "auto",
            pt: { xs: 8, md: 14 },
            px: { xs: 0, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: "52px",
              fontSize: { xs: 28, md: 48, lg: 48 },
              maxWidth: 1000,
            }}
          >
            {data.lifecycle.title.split("lifecycle")[0]}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            lifecycle
            {data.lifecycle.title.split("lifecycle")[1]}
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 700,
              textTransform: "none",
              fontSize: { xs: 18, md: 20, lg: 22 },
              lineHeight: "30px",
            }}
          >
            {data.lifecycle.stages.map((stage, i) => (
              <React.Fragment key={i}>
                {stage}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      </Box>

      {/* Image overlapping section: top half is black, bottom half is white */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 6, md: 10 },
          pb: { xs: 10, md: 16 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: "50%",
            left: 0,
            right: 0,
            bgcolor: COLORS.BLACK,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: COLORS.WHITE,
          }}
        />

        <Box
          sx={{
            width: { xs: "90%", md: "80%" },
            mx: "auto",
            position: "relative",
            zIndex: 1,
            px: { xs: 0, md: 0 },
          }}
        >
          <Box
            sx={{
              borderRadius: { xs: 4, md: 6 },
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={data.lifecycle.bg}
              alt="Operations lifecycle"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: 400, md: 600, lg: 740 },
                display: "block",
                objectFit: "cover",
              }}
            />

            {/* Dark Overlay for better text visibility */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: COLORS.OVERLAY_04,
              }}
            />

            {/* View Case Study Button */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "none",
                alignItems: "center",
                gap: 1.5,
                border: `1px solid ${COLORS.WHITE_ALPHA_40}`,
                borderRadius: 99,
                px: 2.5,
                py: 1,
                cursor: "pointer",
                "&:hover": { bgcolor: COLORS.WHITE_ALPHA_10 },
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: COLORS.WHITE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderLeft: `8px solid ${COLORS.BLACK}`,
                    ml: 0.5,
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: 13,
                  fontWeight: 700,
                  color: COLORS.WHITE,
                  mt: 0.2,
                  whiteSpace: "nowrap",
                }}
              >
                {data.lifecycle.cta}
              </Typography>
              <Box
                sx={{ color: COLORS.WHITE, fontSize: 18, ml: 0.5, mt: "-2px" }}
              >
                &rarr;
              </Box>
            </Box>

            {/* Placeholder Text Overlay */}
            <Typography
              sx={{
                position: "absolute",
                bottom: { xs: 30, md: 220 },
                width: "100%",
                textAlign: "center",
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 10, md: 24 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: COLORS.WHITE,
                px: 2,
                maxWidth: "90%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {/* {data.lifecycle.placeholderText} */}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportYourOperations;
