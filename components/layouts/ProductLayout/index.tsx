import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import SupportYourOperations from "./SupportYourOperations";
import DesignToEvolve from "./DesignToEvolve";
import OneAiPlatform from "./OneAiPlatform";
import MeetAva from "./MeetAva";
import ExploreCapabilities from "./ExploreCapabilities";
import EnterpriseReady from "./EnterpriseReady";
import FromAssist from "./FromAssist";

const ProductLayout = () => {
  return (
    <Box>
      <HeroSection />
      <SupportYourOperations />
      <DesignToEvolve />
      <OneAiPlatform />
      <MeetAva />
      <ExploreCapabilities />
      <EnterpriseReady />
      <FromAssist />
    </Box>
  );
};

export default ProductLayout;
