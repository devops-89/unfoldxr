import {
  AI_INDUSTRY_DATA,
  contactFormData,
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
import ankushImg from "@/images/about-us/about-leadership.png";
import riteshImg from "@/images/about-us/about-leadership2.png";
import differentiatorImg from "@/images/about-us/about-differentiator.png";
import icon1 from "@/images/about-us/icons/icon1.png";
import icon2 from "@/images/about-us/icons/icon2.png";
import icon3 from "@/images/about-us/icons/icon3.png";
import heroRing from "@/images/meet-ava/herosection-image.png";
import introImage from "@/images/meet-ava/meet-ava.png";
import phonePlaceholder from "@/images/meet-ava/ask-ava.png";
import automotiveHero from "@/images/Industries/hero.png";
import automotiveOutcomes from "@/images/Industries/Driving.png";
import automotiveIcon from "@/images/Industries/Icon.svg";
import { INDUSTRY_PAGE_PROPS } from "./types";
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
  aboutUnfoldxr: {
    heading: "About UnfoldXR",
    paragraphs: [
      "Frontline work runs the world. Yet most frontline teams still operate without real-time technological support. We are here to change that.",
      "UnfoldXR is a human productivity augmentation platform built to bring AI and Extended Reality into real-world operations. We deliver moment-of-work support that guides teams before, during, and after execution as one continuous system.",
      "We exist to augment, not replace, human capability. Our platform is built human-first to strengthen judgment, precision, and confidence where decisions are made.",
    ],
    highlight:
      "Built for enterprises, UnfoldXR delivers measurable productivity, not experimental technology.",
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
      img: "/images/homepage/MeetAva.png",
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
          subHeading: "Enhance productivity for frontline work",
          description:
            "It enhances how your technicians already work  making every task faster, smarter, and more consistent without disrupting existing workflows.  ",
          active: true,
        },
        {
          title: "UnfoldXR Empower",
          subHeading: "Enhance intelligent decision-making and scale",
          description:
            "UnfoldXR Empower builds on Augment with advanced knowledge management, offline support, intelligent scan, Creator Mode and more. AVA, the AI Agent becomes more dynamic.",
          active: false,
        },
        {
          title: "UnfoldXR Edge",
          subHeading: "Define the modern workflow with advanced AI-AR tech and performance intelligence",
          description:
            "UnfoldXR Edge is the ultimate evolution of the platform. Built for large, distributed enterprises, Edge is not only a tool upgrade. It is a new way of working.",
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
          title: "Agent Mode",
          subtitle: "Structured Execution at the Moment of Work",
          description:
            "UnfoldXR guides teams through tasks step by step, aligned to the exact asset, location, and requirement. Manuals, SOPs, safety checks, diagnostics, reporting, and remote collaboration are built into a single workflow. Work becomes consistent, compliant, and faster to complete.",
          active: true,
        },
        {
          title: "Creator Mode",
          subtitle: "Knowledge to Standardised Workflows",
          description:
            "UnfoldXR captures expert processes and converts them into structured digital SOPs. Existing videos, demonstrations, and field practices can be transformed into reusable workflows. Knowledge becomes scalable. Training becomes faster. Execution stays uniform across sites.",
          active: false,
        },
        {
          title: "Smart Scan Mode",
          subtitle: "Identify. Diagnose. Resolve.",
          description:
            "With QR or visual recognition, UnfoldXR identifies assets instantly and launches contextual diagnostics. Step validation, guided troubleshooting, and contextual insights reduce errors and improve first-time fix rates. From scan to solution — streamlined.",
          active: false,
        },
        {
          title: "Smart Rostering Mode",
          subtitle: "Right Skill. Right Time.",
          description:
            "UnfoldXR intelligently aligns work orders based on skill, availability, priority, and location. Automated scheduling and task alignment improve utilisation and reduce downtime. Planning becomes proactive, not reactive.",
          active: false,
        },
        {
          title: "Expert Mode",
          subtitle: "Remote Assistance, Reimagined",
          description:
            "UnfoldXR connects field teams with experts through live, immersive collaboration. Join audio or video sessions, annotate in real time with 2D and 3D overlays, and resolve issues faster with AI-assisted support. Start sessions instantly or schedule ahead, include multiple experts, and securely share files via chat. Expertise is not limited by location anymore.",
          active: false,
        },
        {
          title: "Intelligence & Analytics Mode",
          subtitle: "Continuous Operational Improvement",
          description:
            "UnfoldXR converts field activity into measurable insights. Track performance, detect compliance gaps, analyse execution quality, and surface improvement opportunities. Every task strengthens the system.",
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

export const contactPage={
   herosection: {
    heading1: "Ready to watch the future of work unfold? ",
    description: "Contact an UnfoldXR Expert.",
    
    
  },
  contactFormSection:{
   heading:"Let’s augment human productivity together.",
   note:"Note: By submitting this form, you will receive the information requested as well as sales and/or marketing communication on resources, news, and events related to UnfoldXR. You can unsubscribe anytime. For further details about your rights and how we process your personal information, see our Privacy Policy.",
   contactFormData:contactFormData
  
 }
}

export const aboutPage = {
  herosection: {
    heading: "AN INTELLIGENT WORK PLATFORM BUILT FOR THE FRONTLINE.",
    cta: "Schedule a Demo",
  },
  introSection: {
    heading: "ABOUT UNFOLDXR",
    paragraphs: [
      "Frontline work runs the world. Yet most frontline teams still operate without real-time technological support. We are here to change that.",
      "UnfoldXR is a human productivity augmentation platform built to bring AI and extended reality into real-world operations. We deliver moment-of-work support that guides teams before, during, and after execution, creating one continuous system. We turn physical environments into intelligent workspaces. Knowledge appears when needed. Diagnostics happen in real time. Collaboration is instant. Documentation is automatic.",
      "We exist to augment, not replace, human capability. Our platform is built human-first designed to strengthen judgment, precision, and confidence at the exact moment decisions are made.",
    ],
    highlight: "Built for enterprises, UnfoldXR delivers measurable productivity, not experimental technology."
  },
  missionVisionSection: {
    title: "Mission & Vision",
    heading: "THE 1 MILLION PRODUCTIVITY LEAP",
    subHeading: "At UnfoldXR we aim to enable 1 million frontline workers to perform better with confidence and safety by 2030.",
    description: "To bring AI and augmented reality to the 2.8 billion deskless workers who keep the world running. From hospital floors to construction sites, from factories to field service, UnfoldXR exists to put intelligent support directly at the moment they work, not just behind a desk. We envision a world where technology integrates seamlessly with human intelligence, acting as an extension of competence, not a layer of complexity. We are building the future of work where the gap between human potential and technological support is reduced, empowering 80% of the global workforce that operates beyond desks and screens.",
    brandDnaTitle: "Brand DNA",
    brandDna: [
      {
        title: "Curious",
        description: "We push the edge of what's possible, forging a new era of human, machine and AI partnership.",
      },
      {
        title: "Engineered Strong",
        description: "Curiosity drives us, precision defines us. We deliver certainty, not trial-and-error. Confidently unfolding what's next.",
      },
      {
        title: "Human first AI",
        description: "Human at the core. Intelligence around it. Tuned for impact, always.",
      },
    ],
  },
  leadershipSection: {
    title: "Leadership",
    members: [
      {
        name: "ANKUSH JAGGA",
        role: "CEO & CO-FOUNDER",
        image: ankushImg.src,
        bio: "Ankush Jagga is a visionary entrepreneur on a mission to bring AI to the world's 2.8 billion deskless workers. As CEO & Co-founder of UnfoldXR, he is reimagining the future of work, creating human-first AI tools that empower, enhance, and amplify human capability. With 23+ years of enterprise tech experience, Ankush is a results-driven leader who turns bold ideas into measurable impact.\n\nat Tenneo, he scaled a 4-million-user platform, led a strategic rebrand, executed a merger with a US tech conglomerate, expanded global operations, and delivered a 5x return to shareholders in just 3 years. A serial entrepreneur, he co-founded Hush, a food-tech venture, and exited successfully in 2021. He has also played founding roles across sectors, including Dhyan Chand Field Hockey Society (a grassroots sports non-profit), Smart School Smart Parents (a digital K12 platform), and Catchafilm.com (an online movie ticketing portal).\n\nRecognized as ET Business Leader 2023 and a 40 Under 40 entrepreneur, Ankush builds with long-term vision and a strong belief in human-first AI. At UnfoldXR, his bold vision is simple: unlock human potential at scale, make AI accessible."
      },
      {
        name: "RITESH GANGNANI",
        role: "CO-FOUNDER & HEAD ARCHITECT",
        image: riteshImg.src,
        bio: "Ritesh Gangnani is the Co-founder & Head Architect at UnfoldXR, where he leads the AI and technology strategy powering next-generation smart glasses for the deskless workforce. Deep expertise in AI, ML, and computer vision, Ritesh has a track record of building production-grade AI systems from the ground up. As Head of AI at Segmind, he helped shape a leading generative AI platform — contributing to open-source breakthroughs like Segmoe (mixture of diffusion experts) and building scalable AI infrastructure used by thousands of developers worldwide.\n\na passionate open-source contributor, Ritesh is the creator of VoltaML, a popular GPU-accelerated inference library known in the ML community for making model deployment faster and more accessible. He is also the founder of Pixl Studio, an AI-powered creative studio for image generation, video, and virtual try-on. His expertise spans computer vision, deep learning, generative AI, and edge deployment with published research and a Master's degree from South Asian University grounding his work in both theory and application.\n\nat UnfoldXR, Ritesh is architecting the AI backbone that brings hands-free intelligence to frontline workers through smart glasses — turning complex AI into seamless, human-first experiences at the edge. At UnfoldXR, he builds with one belief: the best AI is the one that works for you, not the other way around."
      }
    ]
  },
  differentiatorsSection: {
    heading: "WHAT MAKES UNFOLDXR DIFFERENT?",
    image: differentiatorImg.src,
    items: [
      {
        title: "BUILT FOR THE 80% WORKFORCE",
        description: "Designed for frontline teams, not desk users. Intelligence delivered where real work happens.",
        icon: icon1.src
      },
      {
        title: "BUILT FOR EVERY STAGE OF WORK",
        description: "From planning to execution to reporting. One connected, continuous workflow.",
        icon: icon2.src
      },
      {
        title: "CREATING THE FUTURE OF WORK",
        description: "Innovation is a continuous process and we are determined to change how the future of work looks. Human expertise, augmented by tech.",
        icon: icon3.src
      }
    ]
  },
  newsSection: {
    title: "IN NEWS",
    description: "For press inquiries, media coverage, speaking engagements, and industry insights, please connect with us."
  },
  careersSection: {
    title: "CAREERS",
    description: "At UnfoldXR, you will work at the intersection of AI, XR, enterprise systems, and human productivity. But more importantly, you will build tools that empower millions of frontline workers.\n\nWe value:",
    values: [
      "CURIOSITY AND PRINCIPLED THINKING",
      "ENGINEERING DEPTH WITH HUMAN EMPATHY",
      "CALM EXECUTION UNDER PRESSURE",
      "LONG-TERM OWNERSHIP"
    ],
    bottomText: "If you believe technology should augment human potential, we would like to hear from you."
  },
  finalCtaSection: {
    heading: "UNFOLDXR — AUGMENTING THE FUTURE OF WORK."
  }
};

export const meetAvaPage = {
  heroSection: {
    title: "AVA — The Agentic Intelligence Behind UnfoldXR.",
    heading: "BUILT WITH HEART. POWERED BY AI",
    subHeading: "AVA stands for AI Virtual Assistant. But the story behind the name runs deeper.",
    image: heroRing.src
  },
  introSection: {
    heading: "Meet AVA,",
    paragraphs: [
      "Named after our co-founder Ankush Jagga's daughter, AVA is more than an acronym. When you build something that carries the name of someone you love, you build it with care, responsibility, and a long-term vision.",
      "AVA is not just an assistant. It is an agentic AI, designed to understand context, make decisions, and move work forward. Built into UnfoldXR, AVA stands beside frontline teams when work feels complex or uncertain. It diagnoses intelligently, guides thoughtfully, and adapts in real time.",
      "Rooted in curiosity, care, and creativity, AVA has one purpose: not to replace human capability, but to strengthen It helping every worker perform with clarity, confidence, and growth."
    ],
    image: introImage.src
  },
  supportSection: {
    heading: "How AVA Supports at Every Step",
    description: "Designed to support your workforce throughout the lifecycle of work, across all three versions of UnfoldXR Augment, Empower, and Edge; AVA adapts to your organisation's stage of operational maturity. Each version unlocks deeper intelligence and broader capability. As you scale, AVA scales with you.",
    features: [
      {
        label: "Guided Execution",
        description: "Delivers step-by-step digital instructions aligned to the specific asset, location, and task",
      },
      {
        label: "Smart Rostering",
        description: "Optimises who does what and when, so the right skills meet the right work at the right time.",
      },
      {
        label: "Plan my Day",
        description: "Surfaces priorities and sequences work so frontline teams start each shift with clarity.",
      },
      {
        label: "Contextual Pro Tips",
        description: "Surfaces relevant guidance in context so workers never hunt for answers mid-task.",
      },
      {
        label: "Process Capture",
        description: "Records how work is actually done so expertise becomes repeatable, searchable knowledge.",
      },
      {
        label: "Workflow Creation",
        description: "Builds and adapts workflows without heavy IT lift, keeping operations agile.",
      },
      {
        label: "Automated Reporting",
        description: "Generates structured reports from execution data so compliance and handoffs stay effortless.",
      },
      {
        label: "Performance Tracking",
        description: "Measures outcomes and trends so leaders can coach teams and improve operations continuously.",
      },
      {
        label: "Continuously Learning",
        description: "Improves with every task so AVA gets sharper as your organisation scales.",
      },
    ]
  },
  placeholderSection: {
    heading: "BEYOND ASSISTANCE. INTO ACTION.",
    description: "Traditional systems are reactive and input-driven.\nAVA operates as an agentic AI layer with goal-oriented execution while orchestrating workflows. It maintains task continuity with minimal manual intervention, bringing speed and accuracy across the system.",
    image: phonePlaceholder.src
  },
  evolvesCtaSection: {
    heading: "Evolves with your business needs.",
    cta: "Request a Demo"
  }
};

export const industriesPage: { automotive: INDUSTRY_PAGE_PROPS } = {
  automotive: {
    heroSection: {
      title: "Built for Automotive Operations Where Precision Is Non-Negotiable",
      description: "UnfoldXR is an AI-powered augmented reality platform for automotive manufacturing and service that combines real-time intelligence, guided execution, and scalable expertise for complex, high-precision operations.",
      image: automotiveHero.src,
    },
    realityNeedsSection: {
      title: "We Understand Automotive Operations and What It Takes to Run Them at Scale",
      realities: [
        "High-volume production lines with tight cycle times.",
        "Complex assemblies requiring precision and consistency.",
        "Strict quality and safety standards across every stage.",
        "Knowledge distributed across engineers, technicians, and suppliers.",
      ],
      needs: [
        "Consistent execution across shifts and plants.",
        "Faster diagnosis of production and maintenance issues.",
        "Reduced defects, recalls, and rework.",
        "Shorter training cycles for technicians and operators.",
        "Scalable expertise across global operations.",
      ],
      bottomText: "UnfoldXR is designed specifically for these realities. We bring intelligence into execution, without adding complexity.",
      ctaText: "Watch How UnfoldXR Augments Automotive Operations",
    },
    operationFlowSection: {
      title: "Intelligence Across the Entire Automotive Operation",
      phases: [
        {
          phase: "Before Work",
          items: [
            "SOP-driven task planning for assembly, inspection, and maintenance",
            "Access to equipment history, maintenance records, and service logs",
            "AI-assisted preparation before work begins on the shop floor",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free AR guidance on phones, tablets, or smart glasses",
            "Intelligent scan for real-time diagnostics and component identification",
            "Live collaboration with engineers and experts through voice, video, and visuals",
            "Standardize processes across sites and teams",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of inspection and maintenance evidence",
            "Instant service and production reports without manual paperwork",
            "AI-driven knowledge management to improve future production and training",
          ],
        },
      ],
    },
    useCasesSection: {
      title: "Key Use Cases Across Automotive Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know More",
    },
    outcomesSection: {
      title: "Driving Measurable Outcomes in Automotive Operations",
      image: automotiveOutcomes.src,
      metrics: [
        { value: "25%", text: "reduction in assembly time, improving line throughput." },
        { value: "20%", text: "reduction in defect escape rate, ensuring issues are caught before dispatch." },
        { value: "30%", text: "reduction in warranty diagnosis time, enabling quicker fault isolation." },
        { value: "40%", text: "reduction in technician ramp-up time, accelerating new model readiness." },
        { value: "15%", text: "improvement in first-time fix rate, reducing repeat visits." },
        { value: "50%", text: "reduction in expert travel, with more issues resolved remotely." },
      ],
    },
    finalCtaSection: {
      heading: "Bring intelligence to your manufacturing floor",
      description: "See how UnfoldXR improves execution, reduces downtime, and scales expertise across your operations.",
      ctaText: "Talk to Us",
      ctaIcon: automotiveIcon.src,
    },
  },
};
