// components/tools/ToolsLeftSection.tsx

import { Box, Stack, Typography } from "@mui/material";
import ContainedButton from "@/components/widgets/ContainedButton";
import Image from "next/image";
import { TOOLS_LEFT_SECTION_PROPS } from "@/utils/types";

const ToolsLeftSection = ({
  heading,
  ctaText,
  note,
  avatars,
}: TOOLS_LEFT_SECTION_PROPS) => {
  return (
    <Stack spacing={3}>
      {/* Heading */}
      <Typography fontSize={32} fontWeight={800}>
        {heading}
      </Typography>

      {/* CTA */}
      <ContainedButton
  sx={{
    width: "fit-content",
    height: "52px", // optional override (your design is slightly smaller)
    fontSize: 18,   // optional tweak for this section
  }}
>
  {ctaText}
</ContainedButton>

      {/* Note */}
      <Typography fontSize={12} color="gray">
        {note}
      </Typography>

      {/* Avatars */}
      <Stack direction="row" spacing={-1}>
        {avatars.map((avatar) => (
          <Image
            key={avatar.id}
            src={avatar.image}
            alt={avatar.name}
            width={40}
            height={40}
            style={{
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ToolsLeftSection;