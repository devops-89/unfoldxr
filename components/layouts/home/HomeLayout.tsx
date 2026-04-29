"use client";
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
import AnimateOnScroll from "@/components/widgets/AnimateOnScroll";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection />

      <AnimateOnScroll direction="up">
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            py: { xs: 8, md: 10 },
          }}
        >
          <WorkForce />
        </Box>
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <AiIndustry />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <FutureWork />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <Metrics />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <Meetava />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <Outcome />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <DevicesSection />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={0.1}>
        <Tools />
      </AnimateOnScroll>
      {/* <ManyTools /> */}
    </Box>
  );
};

export default HomeLayout;
