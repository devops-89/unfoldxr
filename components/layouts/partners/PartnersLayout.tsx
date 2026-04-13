import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import { COLORS } from "@/utils/enum";
import MetricsSection from "./MetricsSection";
import WhyPartnerSection from "./WhyPartnerSection";
import EcosystemSection from "./EcosystemSection";
import ClientBusinessSection from "./ClientBusinessSection";
import ExistingPartnersSection from "./ExistingPartnersSection";
const PartnersLayout = () => {
  return (
    <Box>
      <HeroSection />
      <MetricsSection />
      <WhyPartnerSection />
      <EcosystemSection />
      <ClientBusinessSection />
      {/* <ExistingPartnersSection /> */}
    </Box>
  );
};

export default PartnersLayout;
