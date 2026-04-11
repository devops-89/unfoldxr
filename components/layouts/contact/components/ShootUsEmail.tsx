import { Box, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const ShootUsEmail = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEE",
        borderRadius: "20px",
        p: { xs: 4, md: 8 },
        textAlign: "center",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: din.style.fontFamily,
          fontSize: { xs: 24, md: 22 },
          fontWeight: 500,
          color: "#000",
          mb: 4,
          lineHeight: 1.2,
        }}
      >
        Send us an email and our team will get back to you shortly:
      </Typography>
      <Box
        sx={{
          backgroundColor: "#000",
          px: 4,
          py: 2,
          borderRadius: "100px",
          display: "inline-block",
        }}
      >
        <Typography
          component="a"
          href="mailto:info@unfoldxr.com"
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 20, md: 18 },
            fontWeight: 500,
            color: "#b6eb1a",
            textDecoration: "none",
            "&:hover": {
               textDecoration: "underline"
            }
          }}
        >
          info@unfoldxr.com
        </Typography>
      </Box>
    </Box>
  );
};

export default ShootUsEmail;
