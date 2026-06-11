import React from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '@/utils/enum'
import { din } from '@/utils/fonts'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface CaseHeroProps {
    image: string | StaticImageData;
    title: string;
    titleMaxWidth?: number | string;
    objectPosition?: any;
    overlayOpacity?: number;
}

const CaseHero = ({image, title, titleMaxWidth, objectPosition="center", overlayOpacity}: CaseHeroProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        color: COLORS.WHITE,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src={image}
          alt={`${title} background`}
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: objectPosition,
          }}
        />
      </Box>
       {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: `rgba(0,0,0,${overlayOpacity})`,
          zIndex: 1,
        }}
      />
       <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: { xs: "100%", md: "80%" },
                boxSizing: "border-box",
                mx: "auto",
                pt: { xs: 12, md: 18 },
                pb: { xs: 8, md: 12 },
                pl: { xs: 0, md: 2 },
                px: { xs: 3, md: 0 },
              }}
            >
          <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 26, md: 50, lg: 50 },
                lineHeight: { xs: "35px", md: "42px" },
                maxWidth: titleMaxWidth || 1050,
                whiteSpace: "pre-line",
                width: { xs: "100%", lg: "70%" },
              }}
          >
          {title}
        </Typography>
        </Box>
      </Box>
  )
}

export default CaseHero
