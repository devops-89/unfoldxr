import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import { COLORS } from "@/utils/enum";
import MetricsSection from "./MetricsSection";
import WhyPartnerSection from "./WhyPartnerSection";

const PartnersLayout = () => {
  return (
    <Box>
    <HeroSection />
    <MetricsSection />
    <WhyPartnerSection />
    </Box>
  );
};

export default PartnersLayout;
