import { Box, Stack, Typography } from "@mui/material";
import ContainedButton from "@/components/widgets/ContainedButton";
import Image from "next/image";
import { TOOLS_LEFT_SECTION_PROPS } from "@/utils/types";

const ToolsLeftSection = ({
  ctaText,
  image,
}: TOOLS_LEFT_SECTION_PROPS) => {
  return (
    <Stack spacing={3}>
      
      {/* Heading + CTA */}
      <Stack direction="row" alignItems="center" spacing={2}>
        

        <ContainedButton
          sx={{
            height: "44px",
            fontSize: 16,
          }}
        >
          {ctaText}
        </ContainedButton>
      </Stack>

      {/* Image */}
      <Box>
        <Image
          src={image}
          alt="section image"
          width={400}
          height={300}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 12,
          }}
        />
      </Box>

    </Stack>
  );
};

export default ToolsLeftSection;