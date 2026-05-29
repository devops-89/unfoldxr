"use client";

import { UseCaseData } from "./data";
import SectionCTA from "@/components/widgets/SectionCTA";
import { useDemoModal } from "@/components/context/DemoModalContext";
import { motion } from "framer-motion";

interface Props {
  data: UseCaseData["finalCTA"];
}

const FinalCTASection = ({ data }: Props) => {
  const { openModal } = useDemoModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <SectionCTA
        title={data.title}
        subtitle={data.subtitle}
        onBtnClick={() => openModal("usecase_final_cta")}
        innerSx={{
          width: { xs: "85%", md: "90%", lg: "80%" },
          mx: "auto",
        }}
      />
    </motion.div>
  );
};

export default FinalCTASection;
