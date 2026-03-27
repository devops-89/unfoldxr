import { Box } from "@mui/material";
import AvaSupportSection from "./AvaSupportSection";
import EvolvesCtaSection from "./EvolvesCtaSection";
import HeroSection from "./HeroSection";
import MeetAvaIntroSection from "./MeetAvaIntroSection";
import PlaceholderSection from "./PlaceholderSection";

const MeetAvaPageLayout = () => {
  return (
    <Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>
      <HeroSection />
      <MeetAvaIntroSection />
      <AvaSupportSection />
      <PlaceholderSection />
      <EvolvesCtaSection />
    </Box>
  );
};

export default MeetAvaPageLayout;
