import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import { COLORS } from "@/utils/enum";
import MetricsSection from "./MetricsSection";
import WhyPartnerSection from "./WhyPartnerSection";
import EcosystemSection from "./EcosystemSection";

const PartnersLayout = () => {
  return (
    <Box>
    <HeroSection />
    <MetricsSection />
    <WhyPartnerSection />
    <EcosystemSection />
    </Box>
  );
};

export default PartnersLayout;
