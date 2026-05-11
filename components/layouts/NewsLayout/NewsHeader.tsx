import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { din } from "@/utils/fonts";

interface NewsHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}


export default function NewsHeader({
  searchTerm,
  setSearchTerm,
}: NewsHeaderProps) {
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
        NEWS & ARTICLE
      </Typography>

      <Box display="flex" gap={2} width={{ xs: "100%", md: "auto" }}>
        <TextField
          placeholder="Search"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            maxWidth: { md: 260 },
            "& .MuiOutlinedInput-root": {
              borderRadius: "999px",
            },
            fontFamily: din.style.fontFamily,
          }}
          slotProps={{
            input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            },
          }}
        />
        <IconButton sx={{ flexShrink: 0 }}>
          <TuneIcon />
        </IconButton>
      </Box>
    </Box>
  );
}