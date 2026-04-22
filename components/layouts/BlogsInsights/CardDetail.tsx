import { COLORS } from '@/utils/enum'
import {
  Box,
  
  Button,
  
  Divider,
  
  keyframes,
  
  Typography,
} from '@mui/material'
import Link from 'next/link';
import React from 'react'

export default function CardDetail({ product }: any) {

  
  if (!product) {
    return <div>Blog not found</div>;
  }

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, minHeight: "100vh" }}>

      {/* IMAGE SECTION */}
      <Box
        sx={{
          px: { xs: "4px", sm: "4px", md: "4px", lg: "4px" }, 
          
        }}
      >
        <Box
          component="img"
          src={product.img}
          alt={product.title}
          sx={{
            width: "100%",
            height: { xs: 200, md: 700 },
            objectFit: "cover",

          }}
        />
      </Box>

      {/* CONTENT SECTION */}
      <Box
        sx={{
          px: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
          py: { xs: 4, md: 4 },
          bgcolor: COLORS.WHITE,          
    borderRadius: "10px",    
    mx: { xs: "4px", md: "20px" }, 
        
    mt:4      
        }}
      >

        {/* Title */}
        <Typography
          
          sx={{
            color: COLORS.BLACK,
            fontWeight: 700,
            fontSize: { xs: 35, md: 45 },
            mb: 2,
            textTransform:"uppercase"
          }}
        >
          {product.title}
        </Typography>

        {/* Meta */}
        <Typography sx={{ color: "#aaa", mb: 1 ,fontSize: "14px" }}>
          UnFoldXr • {product.date} 
        </Typography>
        

        {/* Description */}
       <Divider sx={{ borderColor: COLORS.BLACK}} />
        <Typography
          sx={{
            color: COLORS.CARD_BG_DARK,
            lineHeight: 1.8,
            fontSize: "16px",
            pt: 2
    
          }}
        >
          {product.desc}
        </Typography>
        
       
     <Typography sx={{color:COLORS.BLACK,fontSize:"28px",lineHeight:1.5,fontWeight:700,pt:2}} >
  AI-Powered Smart Glasses
</Typography>

<Typography sx={{color:COLORS.CARD_BG_DARK,fontSize:"16px",lineHeight:1.5,pt:1,pb: 2}}>
  AI glasses are transforming the way we interact with the world by blending vision, intelligence, and connectivity into a single wearable device. These smart glasses enhance everyday experiences through real-time data, voice assistance, and augmented visuals, making tasks faster, smarter, and more intuitive.
</Typography>


<Typography sx={{color:COLORS.BLACK,fontSize:"28px",lineHeight:1.5,fontWeight:700,pt:2}} >
  Advanced Features & Innovation
</Typography>

<Typography sx={{color:COLORS.CARD_BG_DARK,fontSize:"16px",lineHeight:1.5,pt:1}}>
  Built with cutting-edge artificial intelligence, modern smart glasses integrate powerful features such as real-time translation, object recognition, and hands-free navigation. These innovations are designed to improve productivity, accessibility, and convenience across various industries and daily life.
</Typography>

<Typography sx={{color:COLORS.CARD_BG_DARK,fontSize:"16px",lineHeight:1.5,pt:1,pb: 2}}>
  From professionals to everyday users, AI glasses provide seamless digital interaction without interrupting natural vision, offering a perfect balance between technology and human experience.
</Typography>


<Typography
  sx={{
    color: COLORS.BLACK,
    fontSize: "28px",
    fontWeight: 700,
    pt: 3,
  }}
>
  Key Capabilities of AI Glasses
</Typography>

<Typography
  sx={{
    color: COLORS.CARD_BG_DARK,
    fontSize: "16px",
    lineHeight: 1.8,
    pt: 1,
  }}
>
  AI-powered smart glasses come equipped with a wide range of intelligent features that enhance both personal and professional use:
</Typography>

<Box
  component="ul"
  sx={{
    pl: 3,
    pt: 1,
    pb: 2,
    color: COLORS.CARD_BG_DARK,
    listStyleType: "disc",
    "& li": {
      marginBottom: "8px",
    }
  }}
>
  <li style={{ fontSize:"18px" }}>Real-time voice assistant for hands-free control and communication</li>
  <li style={{ fontSize:"18px" }}>Augmented reality overlays for navigation, directions, and notifications</li>
  <li style={{ fontSize:"18px" }}>AI-based object and face recognition for enhanced awareness</li>
  <li style={{ fontSize:"18px" }}>Instant translation and transcription for global communication</li>
</Box>

<Typography sx={{color:COLORS.BLACK,fontSize:"28px",lineHeight:1.5,fontWeight:700,pt:2}} >
  Advanced Features & Innovation
</Typography>

<Typography sx={{color:COLORS.CARD_BG_DARK,fontSize:"16px",lineHeight:1.5,pt:1}}>
  Built with cutting-edge artificial intelligence, modern smart glasses integrate powerful features such as real-time translation, object recognition, and hands-free navigation. These innovations are designed to improve productivity, accessibility, and convenience across various industries and daily life.
</Typography>

<Typography sx={{color:COLORS.CARD_BG_DARK,fontSize:"16px",lineHeight:1.5,pt:1,pb: 2}}>
  From professionals to everyday users, AI glasses provide seamless digital interaction without interrupting natural vision, offering a perfect balance between technology and human experience.
</Typography>

<Typography
  sx={{
    color: COLORS.CARD_BG_DARK,
    fontSize: "16px",
    lineHeight: 1.8,
    pb: 2,
  }}
>
  With continuous advancements in artificial intelligence, these glasses are becoming smarter, lighter, and more efficient—reshaping the future of wearable technology and redefining how we see and interact with the world.
</Typography>

   {/* Back */}
       <Link href="/blogs-insights"  style={{ textDecoration: "none", color: "inherit" }}><Button sx={{ color: COLORS.WHITE, mb: 2, cursor: "pointer" ,bgcolor: COLORS.BLACK, "&:hover": {
        
        color: COLORS.PRIMARY_GREEN,          
      }, }}>
          ← Back to Blog
        </Button></Link>
      </Box>
    </Box>
  )
}