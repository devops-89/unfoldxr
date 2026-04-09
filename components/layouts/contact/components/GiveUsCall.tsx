import { Box, Typography, Stack } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";

const GiveUsCall = () => {
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
          mb: 1,
          lineHeight: 1.2,
          maxWidth: "800px",
        }}
      >
        For immediate assistance, talk to our 24x7 support team.
      </Typography>
      {/* <Typography
        sx={{
          fontFamily: helvetica.style.fontFamily,
          fontSize: { xs: 16, md: 18 },
          fontWeight: 400,
          color: "#666",
          mb: 6,
          fontStyle: "italic",
        }}
      >
        (Call support available only for paid subscriptions.)
      </Typography> */}

      <Box
        sx={{
          backgroundColor: "#F4F7F9",
          px: 4,
          py: 2,
          borderRadius: "100px",
          display: "inline-block",
          mt: 2,
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography sx={{ fontSize: "40px", lineHeight: 1 }}>🇮🇳</Typography>
          <Box textAlign="left">
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 14, md: 22 },
                fontWeight: 600,
                color: "#666",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              INDIA
            </Typography>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 20, md: 18 },
                fontWeight: 700,
                color: "#b8ed1a",
                lineHeight: 1.2,
              }}
            >
              1111111111111
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default GiveUsCall;
