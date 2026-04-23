import { COLORS } from '@/utils/enum'
import { FiberManualRecord } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function CardDetail({ product }: any) {

  if (!product) {
    return <div>Blog not found</div>;
  }

  return (
    <Box sx={{ bgcolor: COLORS.WHITE, minHeight: "100vh"  }}>

  
<Box sx={{ position: "relative" }}>
  {/* HERO IMAGE */}
  <Box
    component="img"
    src={product.img}
    alt={product.title}
    sx={{
      width: "100%",
      height: { xs: 300, md: 850 }, 
      objectFit: "cover",
    }}
  />

  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      px: { xs: 2, md: 19 },
      pb: 40,
    }}
  >
    {/* Title */}
    <Typography
      sx={{
        fontSize: { xs: 24, md: 40 },
        fontWeight: 500,
        color: COLORS.BLACK,
        maxWidth: "600px",
        mb: 2,
      }}
    >
      {product.title}
    </Typography>


    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography
        sx={{
          bgcolor: "#000",
          color: COLORS.PRIMARY_GREEN,
          px: 1.5,
          py: 1,
          fontSize: "13px",
          borderRadius: "4px",
        }}
      >
        UnFoldXr
      </Typography>

      <FiberManualRecord sx={{ fontSize: 8, color: "#fff" }} />

      <Typography
        sx={{
          bgcolor: "#000",
          color: COLORS.PRIMARY_GREEN,
          px: 1.5,
          py: 1,
          fontSize: "13px",
          borderRadius: "4px",
        }}
      >
        {product.date}
      </Typography>
    </Box>
  </Box>
</Box>

      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          mt: 6,
          px: { xs: 2, md: 0 },
          pb: 6,
        }}
      >

        {/* INTRO TITLE */}
        <Typography
          sx={{
            fontSize: { xs: 22, md: 40 },
            fontWeight: 600,
            mb: 2,
            color: "#1a1a1a",
          }}
        >
          Introduction
        </Typography>

        {/* INTRO TEXT */}
        <Typography
          sx={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: "15px",
            mb: 1,
          }}
        >
          {product.desc}
        </Typography>
          <Typography
          sx={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: "15px",
            mb: 2,
          }}
        >
          {product.desc1}
        </Typography>
          <Typography
          sx={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: "15px",
            mb: 4,
          }}
        >
          {product.desc2}
        </Typography>

        {/* SECOND IMAGE */}
         <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        p: 2,
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: "10px",
          p: { xs: 2, md: 3 },
        }}
      >
        {/* IMAGE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={product.img}
            alt="interior"
            sx={{
              width: "100%",
              height: { xs: 200, md: 260 },
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Grid>

        {/* TEXT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            sx={{
              color: "#333",
              fontSize: "15px",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Wariant zdjęcia z tekstem obok. Pozwala na użycie dłuższej formy
            tekstowej, będącej rozszerzeniem / kontekstem zdjęcia. Moduł ten
            może występować w dwóch wariantach: zdjęcie po lewej stronie + tekst
            po prawej, zdjęcie po prawej stronie + tekst po lewej.
          </Typography>

          <Typography
            sx={{
              color: "#333",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            W przypadku dłuższych tekstów, konieczne będzie dzielenie bloku tak,
            by treść na wysokość zdjęcia została „ucięta” i kontynuowana w nowym
            bloku o pełnej szerokości, pod zdjęciem.
          </Typography>
        </Grid>
      </Grid>
    </Box>

 <Typography sx={{color:COLORS.BLACK,fontSize:"28px",lineHeight:1.5,fontWeight:700,pt:2,pb:2}} >
  AI-Powered Smart Glasses
</Typography>
        {/* BODY TEXT */}
        <Typography
          sx={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: "15px",
            mb: 2,
          }}
        >
          {product.desc1}
        </Typography>

     

        {/* QUOTE BLOCK */}
        <Box
          sx={{
            borderLeft: "4px solid #999",
            pl: 2,
            my: 3,
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              color: "#333",
              lineHeight: 1.8,
            }}
          >
            “These innovations are designed to improve productivity, accessibility, and convenience across various industries and daily life.The future of AI glasses is promising.”
          </Typography>
        </Box>

        {/* FINAL TEXT */}
        <Typography
          sx={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: "15px",
          }}
        >
          {product.desc1}
        </Typography>

        {/* BACK BUTTON */}
        <Link href="/blogs-insights" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              mt: 5,
              bgcolor: "#000",
              color: COLORS.PRIMARY_GREEN,
              px: 3,
              "&:hover": {
                bgcolor: "#000",
                color: COLORS.WHITE,
              },
            }}
          >
            ← Back to Blog
          </Button>
        </Link>

      </Box>
    </Box>
  )
}