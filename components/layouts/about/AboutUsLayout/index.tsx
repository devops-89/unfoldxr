import { Box } from "@mui/material";
import AboutIntroSection from "./AboutIntroSection";
import CareersSection from "./CareersSection";
import DifferentiatorsSection from "./DifferentiatorsSection";
import FinalCtaSection from "./FinalCtaSection";
import HeroSection from "./HeroSection";
import LeadershipSection from "./LeadershipSection";
import MissionVisionSection from "./MissionVisionSection";
import NewsSection from "./NewsSection";

const AboutUsLayout = () => {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <HeroSection />
      <AboutIntroSection />
      <MissionVisionSection />
      <LeadershipSection />
      <DifferentiatorsSection />
      <CareersSection />
      <NewsSection />
      <FinalCtaSection />
    </Box>
  );
};

export default AboutUsLayout;
