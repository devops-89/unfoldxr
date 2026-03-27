import { Box, Stack } from "@mui/material";
import ContainedButton from "@/components/widgets/ContainedButton";
import Image from "next/image";
import { TOOLS_LEFT_SECTION_PROPS } from "@/utils/types";

const ToolsLeftSection = ({
  ctaText,
  image,
}: TOOLS_LEFT_SECTION_PROPS) => {
  return (
    <Stack spacing={{ xs: 2, md: 12 }}>
      
      {/* CTA */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent={{ xs: "center", md: "flex-start" }} 
      >
        <ContainedButton
          sx={{
            height: { xs: "40px", md: "44px" }, 
            fontSize: { xs: 14, md: 16 },
            width: { xs: "100%", md: "auto" },
            maxWidth: { xs: "250px", md: "none" }, 
          }}
        >
          {ctaText}
        </ContainedButton>
      </Stack>

      {/* Image */}
     <Box
  sx={{
    textAlign: "center",
    display: { xs: "none", md: "block" },
    height: "290px",
    position: "relative",
    // cursor: "pointer", 
  }}
>
  <Image
    src={image}
    alt="section image"
    fill
    style={{
      objectFit: "cover",
      borderRadius: 12,
    }}
  />
</Box>

    </Stack>
  );
};

export default ToolsLeftSection;