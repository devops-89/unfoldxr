import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import Link from "next/link";
import { din } from "@/utils/fonts";

export default function CaseStudiesHeader() {
  return (
    <Box display="flex" 
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