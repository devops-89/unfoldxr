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

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection />

      <Box
        sx={{
          backgroundColor: COLORS.BLACK,
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "80vh", md: "unset" },
          py: { xs: 8, md: 4 },
          px: { xs: 2, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WorkForce />
      </Box>

      <AiIndustry />

      <FutureWork />

      <Metrics />

      <Meetava />

      <Outcome />

      <DevicesSection />

      <Tools />
    </Box>
  );
};

export default HomeLayout;
