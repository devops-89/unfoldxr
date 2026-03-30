import {
  AI_INDUSTRY_DATA,
  DEVICES_SECTION_DATA,
  toolsLeftData,
  toolsRightData,
  WORKFORCE_CARD_DATA,
} from "./constant";
import ava from "@/images/banner/homePage/avapng.png";
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
  productPage: {
    supportOperations: {
      hero: {
        bg: "/images/Product/Hero-section.png",
        title: "The only AI-powered augmented reality platform you need",
        subtitle:
          "To train, guide, support & scale frontline workforce, remote teams and skilled technicians",
        description:
          "From real-time assistance to enterprise-wide operational intelligence, UnfoldXR adapts to your stage of growth.",
        cta: "Request a Demo",
      },
      lifecycle: {
        title: "UnfoldXR supports your operations across the complete lifecycle of work",
        stages: [
          "Before the task begins.",
          "During execution.",
          "After completion.",
        ],
        bg: "/images/Product/SupportYourOperations.png",
        cta: "View Case Study",
        placeholderText: "*THIS IS A PLACEHOLDER IMAGE*, WILL BE REPLACED BY VID THUMBNAIL",
      },
    },
    designToEvolve: {
      title: "Designed to evolve with your operations",
      description:
        "Start with what you need today and expand as your operations grow. UnfoldXR let's organizations scale capabilities without paying for unnecessary complexity.",
      img: "/images/Product/TabImage.png",
      variants: [
        {
          title: "UnfoldXR Augment",
          description:
            "It enhances how your technicians already work making every task faster, smarter, and more consistent without disrupting existing workflows.",
          active: true,
        },
        {
          title: "UnfoldXR Empower",
          description:
            "Empower adds intelligence to execution with AI-guided diagnostics and contextual assistance.",
          active: false,
        },
        {
          title: "UnfoldXR Edge",
          description:
            "Edge provides advanced AI-AR capabilities and performance intelligence for enterprise-level scaling.",
          active: false,
        },
      ],
    },
    oneAiPlatform: {
      title: "One AI platform, any industry",
      description:
        "UnfoldXR enhances skiller operations, on ground executions & real-time decision making",
    },
    meetAva: {
      title: "Meet AVA Your ‘AI Virtual Assistant’ For everything work.",
      description:
        "AVA supports your workforce across all three versions of the platform. It works alongside your teams as an intelligent assistant, a sharp analyser, and a reliable task partner. The perfect work buddy.",
      img: "/images/Product/MeetAva.png",
      cta: "Visit AVA",
    },
    exploreCapabilities: {
      title: "Explore capabilities by mode",
      modes: [
        {
          title: "Agent mode",
          subtitle: "Structured execution at the moment of work",
          description:
            "UnfoldXR guides teams through tasks step by step, aligned to the exact asset, location, and requirement. Manuals, SOPs, safety checks, diagnostics, reporting, and remote collaboration are built into a single workflow. Work becomes consistent, compliant, and faster to complete.",
          active: true,
        },
        {
          title: "Creator mode",
          subtitle: "Knowledge to standardised workflows",
          description:
            "Turn expert knowledge into structured, interactive digital guides in minutes.",
          active: false,
        },
        {
          title: "Smart scan mode",
          subtitle: "Identify. Diagnose. Resolve.",
          description:
            "Use AI-powered computer vision to instantly identify components and diagnose issues.",
          active: false,
        },
        {
          title: "Smart rostering mode",
          subtitle: "Right Skill. Right Time.",
          description:
            "Optimize team deployment based on real-time skill verification and availability.",
          active: false,
        },
        {
          title: "Expert mode",
          subtitle: "Complete operational visibility",
          description:
            "Real-time visibility into every task, team, and asset across your entire operation.",
          active: false,
        },
        {
          title: "Intelligence & analytics mode",
          subtitle: "Continuous operational improvement",
          description:
            "Data-driven insights to optimize processes and drive measurable productivity gains.",
          active: false,
        },
      ],
    },
    enterpriseReady: {
      title: "Enterprise-ready. Operational from day one.",
      img: "/images/Product/Enterprise.png",
    },
    fromAssist: {
      title:
        "From assistance to intelligence. From field support to enterprise control.",
      subtitle:
        "Book a demo to see how UnfoldXR fits your operational stage.",
      cta1: "Talk to the product specialist",
      cta2: "Book a Demo",
    },
  },
};
