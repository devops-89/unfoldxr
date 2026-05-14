import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import WorkForce from "./WorkForce";
import { COLORS } from "@/utils/enum";
import AiIndustry from "./Ai-Industry";
import FutureWork from "./Future-Work";
import Metrics from "./Metrics";
import Meetava from "./Meet-Ava";
import Outcome from "./Outcome";
import DevicesSection from "./Devices-Section";
import Tools from "./Tools";
import AboutUnfoldxr from "./About-Unfoldxr";
import ManyTools from "./Many-tools";
import ScrollScanSection from "./ScrollScanSection";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection />

      <Box
        sx={{
          backgroundColor: COLORS.BLACK,
          py: { xs: 8, md: 10 },
        }}
      >
        <WorkForce />
      </Box>

      <ScrollScanSection/>

      <AiIndustry />

      <FutureWork />

      <Metrics />

      <Meetava />

      <Outcome />

      <DevicesSection />

      <Tools />
      {/* <ManyTools /> */}
    </Box>
  );
};

export default HomeLayout;
