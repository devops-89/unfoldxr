import { Box, Stack, Typography } from "@mui/material";
import ContainedButton from "@/components/widgets/ContainedButton";
import Image from "next/image";
import { TOOLS_LEFT_SECTION_PROPS } from "@/utils/types";
import { COLORS } from "@/utils/enum";

const ToolsLeftSection = ({ ctaText, image, onCtaClick }: TOOLS_LEFT_SECTION_PROPS & { onCtaClick?: () => void }) => {
  return (
    <Stack spacing={{ xs: 4, md: 6 }} alignItems={{ xs: "center", md: "flex-start" }}>
      {/* CTA */}
      <ContainedButton
        onClick={onCtaClick}
        sx={{
          height: { xs: "44px", md: "50px" },
          fontSize: { xs: 16, md: 16 },
          fontWeight: 700,
          
          px: 6,
          backgroundColor: "#C4FF1A", 
          color: COLORS.BLACK,
          "&:hover": {
            backgroundColor: "#A8E015",
          },
        }}
      >
        {ctaText}
      </ContainedButton>

      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          height: { xs: "200px", md: "300px" },
        }}
      >
        <Image
          src={image}
          alt="Cursors illustration"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Stack>
  );
};

export default ToolsLeftSection;