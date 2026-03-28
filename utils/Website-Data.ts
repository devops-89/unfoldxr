import {
  AI_INDUSTRY_DATA,
  DEVICES_SECTION_DATA,
  partnersClientBusinessData,
  partnersEcosystemData,
  partnersExistingPartnersData,
  partnersMetricsData,
  partnersWhyPartnerData,
  toolsLeftData,
  toolsRightData,
  WORKFORCE_CARD_DATA,
} from "./constant";
import ava from "@/images/banner/homePage/avapng.png";
import partnersClientBusiness from "@/images/banner/partners/client-business-section.png";
import tools from "@/images/banner/homePage/tools/tools-team.png";
export const homePage = {
  herosection: {
    heading1: "Augmenting",
    heading2: "Human Capability for the future of work.",
    description: "AI-powered augmented reality platform for deskless humans",
    cta1: "Watch UnfoldXR in action",
    cta2: "Book a demo",
  },
  workforce: {
    heading: "Built for 2.8 billion Workforce that keeps the World Running",
    description:
      "Most AI is built for people at desks. But 80% of the global workforce is deskless. That’s 2.8 billion people. UnfoldXR is built for them. AI and augmented reality delivered at the moment of work where decisions are made, assets are maintained, and operations move forward.",
    data: WORKFORCE_CARD_DATA,
  },
  Ai_industry: {
    heading: "ONE AI PLATFORM, ANY INDUSTRY",
    description:
      "UnfoldXR Enhances Skiller Operations, On Ground Executions & Real-Time Decision Making",
    ai_industry_data: AI_INDUSTRY_DATA,
  },
  future_work: {
    leftSection: {
      heading: "THE NEXT-GEN SaaS PLATFORM FOR REMOTE TEAMS AT WORK",
      description:
        "UnfoldXR replaces multiple, fragmented frontline tools with one unified platform assisting technicians at every step of a task. From smart planning, to fast diagnosis, error-free execution and instant reporting one continuous flow with AI & AR-powered proficiency.",
      subDescription:
        "Built to evolve with your needs, our platform comes in three variants. ",
      endHeading: "Welcome to the Future of Work!",
      cta: "Request a Demo",
    },
  },
  metrics: {
    heading: "Your Competitive Advantage, Measured Right",
    leftSection: {
      heading: "we commit atleast",
      number: "30%",
    },
    rightSection: [
      {
        label: "↑ Improvement",
        value: "in customer satisfaction.",
      },
      {
        label: "↓ Reduction",
        value: "in downtime.",
      },
      {
        label: "↓ Reduction",
        value: "in compliance cost.",
      },
    ],
  },
  meetAva: {
    heading: "Meet AVA - The AI Virtual Assistant Built for Frontline Work",
    leftSection: {
      description: [
        {
          label:
            "AVA, short for AI Virtual Assistant, is not just a support tool. It is an always-on AI agent that  supports your teams before, during, and after work bringing intelligence directly to the  moment of execution.",
        },
        {
          label:
            "From guided task execution and live diagnostics to smart planning and automated reporting,  AVA turns complex operations into structured, compliant, and measurable workflows.",
        },
        {
          label: "Ava doesn’t replace technicians. It augments them.",
        },
      ],
      cta: "Book a demo now",
    },
    rightSection: {
      img: ava,
    },
  },
  outcome: {
    heading: "DESIGNED FOR OUTCOME",
    subHeading: "Fits Into Everyday Work Scenario",
    data: [
      {
        number: "01",
        description: "Repair, Maintenance, Asset Management",
      },
      {
        number: "02",
        description: "Field Service, Troubleshooting & Remote  Collaboration",
      },
      {
        number: "03",
        description: "Training, Onboarding &  Knowledge Capture",
      },
      {
        number: "04",
        description: "Inspection, Compliance & Quality Assurance",
      },
    ],
    cta: "Know More",
  },
  devicesSection: {
    heading: "Built to Work Across Devices",
    data: DEVICES_SECTION_DATA,
  },
  tools: {
    heading: "THE WORK OF MANY TOOLS. ONE  AR-ENABLED PLATFORM",
    subHeading: "Augmenting human productivity.",
    leftSection: toolsLeftData,
    rightSection: toolsRightData
  },
};

export const partnersPage={
  herosection: {
    heading1: "Unfold Profit and Potential with our Channel Partnership.",
    description: "Achieve more revenue and steady growth with UnfoldXR.",
    cta1: "Become a Partner",
    
  },
  metricsSection:{
    heading:"Why Partner with an AI-AR Platform?",
    description:"AI and augmented reality are rapidly becoming core to how enterprises operate and scale. l Partnering early means aligning with a high-growth market and delivering measurable value to your customers.",
    metrics_card_data:partnersMetricsData

  },
  whyPartnerSection:{
    heading:"WHY PARTNER WITH UNFOLDXR?",
    why_partner_card_data:partnersWhyPartnerData
  },
  ecosystemSystem:{
     heading: "WHO WE PARTNER WITH BUILT FOR ECOSYSTEM COLLABORATION",
  tag: "ERP and CMMS partners",
  leftItems: partnersEcosystemData,
  rightText:
    "Extend ERP modules into hands-free execution. Reduce errors and improve first-time fix rates. Create real-time feedback loops into maintenance systems.",
  },
  clientBusinessSection:{
    title:"DON'T JUST ADD VALUE, AUGMENT YOUR CLIENT'S BUSINESS.",
    image:partnersClientBusiness,
    client_business_card_data:partnersClientBusinessData
  },
  existingPartnersSection:{
    heading:"Our Existing Partners",
    existing_partners_chip_data:partnersExistingPartnersData
  }
   
}
