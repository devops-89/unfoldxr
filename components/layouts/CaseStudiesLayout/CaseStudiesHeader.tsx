"use client";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import Link from "next/link";
import { din } from "@/utils/fonts";
import { motion } from "framer-motion";

export default function CaseStudiesHeader() {
  return (
    <Box 
         component={motion.div}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, amount: 0.15 }}
         transition={{ duration: 0.6 }}
         display="flex" 
         justifyContent="space-between" 
         alignItems={{ xs: "flex-start", md: "center" }}
         flexDirection={{ xs: "column", md: "row" }}
         gap={{ xs: 2, md: 0 }}
         mb={5}
    >
      <Typography 
          variant="h4" 
          fontWeight={900}
          sx={{fontFamily: din.style.fontFamily}}
      >
        CASE STUDY
      </Typography>

      <Box display="flex" gap={2} width={{ xs: "100%", md: "auto" }}>
        <Typography>
          <Link 
              href="#" 
              style={{ 
                textDecoration: "underline", 
                color: "inherit",
                fontWeight: 400,
                fontFamily: din.style.fontFamily,
                }}>
            View all
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}