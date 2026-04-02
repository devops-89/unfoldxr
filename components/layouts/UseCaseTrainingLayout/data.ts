export interface UseCaseData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  knowledge: {
    title: string;
    items: string[];
    footerText: string;
    layout?: "default" | "stacked";
  };
  intervention: {
    title: string;
    description1: string;
    description2: string;
    description3?: string;
    description4?: string;
    image?: string;
    layout?: "default" | "side-by-side";
    cards?: { label: string; image: string }[];
  };
  capabilities: {
    title: string;
    items: { title: string; description: string }[];
    layout?: "default" | "grid";
  };
  businessResults: {
    title: string;
    items: { title: string; description: string }[];
  };
  industry: {
    title: string;
    subtitle: string;
    customIndustries?: { label: string; img: string | any }[];
  };
  deviceDeployment: {
    title: string;
    deviceA: {image: string; title: string };
    deviceB: { image: string; title: string };
    deviceC: { image: string; title: string };
  };
  platformSummary: {
    title: string;
    description1: string;
    description2: string;
  };
  finalCTA: {
    title: string;
    subtitle: string;
  };
}

export const useCasesData: Record<string, UseCaseData> = {
  training: {
    hero: {
      title: "TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      subtitle: "The Strongest Teams Learn In The Flow Of Work.",
      description:
        "UnfoldXR brings AI- and augmented reality–powered intelligence into learning and capability building and makes it available right at the moment of work.",
      image: "/images/usecase/HeroSection.png",
    },
    knowledge: {
      title: "WITH UNFOLDXR, TURN EXPERTISE INTO SCALABLE KNOWLEDGE",
      items: [
        "Loss of expertise, and rework in training and onboarding drive up costs and time",
        "Learning through manuals, shadowing, and disconnected content slows skill development",
        "Knowledge tied to individuals leads to gaps when experienced workers leave",
      ],
      footerText:
        "Resulting in inconsistent performance, longer training cycles, and repeated errors. UnfoldXR unifies the lifecycle — capture, structure, and apply knowledge, delivering faster learning, consistent execution, and scalable expertise.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "With UnfoldXR, AI and augmented reality empower the 80% deskless workforce that traditional learning systems often overlook. Training becomes embedded in execution.",
      description2:
        "Teams learn by doing, follow standardised guidance, and access critical knowledge in real time through AI Assistant, AVA or remote experts.",
      description3:
        "With three versions designed for different stages of operational maturity — UnfoldXR Augment, UnfoldXR Empower, and UnfoldXR Edge — the platform scales with your organization.",
      description4:
        "Start with structured digital guidance and grow into intelligent, AI-driven workforce enablement when you are ready.",
      image: "/images/usecase/TabImage.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      items: [
        {
          title: "DIGITAL SOP & WORKFLOW CREATION (CREATOR MODE)",
          description: "Capture expert processes once and convert them into structured, step-by-step digital workflows for training and execution.",
        },
        {
          title: "VIDEO-TO-WORKFLOW CONVERSION",
          description: "Transform existing training videos into interactive, guided instructions.",
        },
        {
          title: "CONTEXT-AWARE LEARNING AT THE MOMENT OF WORK",
          description: "Deliver training guidance aligned to the specific asset, task, or environment.",
        },
        {
          title: "AI-GUIDED ASSISTANCE (AVA)",
          description: "Provide real-time support, explanations, and recommendations before, during, and after tasks.",
        },
        {
          title: "SMART SCAN MODE",
          description: "Scan assets or QR codes to instantly access relevant training, SOPs, and contextual guidance.",
        },
        {
          title: "REMOTE EXPERT COLLABORATION",
          description: "Enable trainees to connect with senior experts through live audio, video, and visual guidance.",
        },
        {
          title: "EVIDENCE-BASED SKILL VALIDATION",
          description: "Capture task completion data, photos, videos, and notes to verify competency and compliance.",
        },
        {
          title: "ADAPTIVE WORKFLOWS",
          description: "Ensure instructions adjust automatically across devices and environments for consistent learning outcomes.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description: "Accessible on mobile phones, tablets, and smart glasses, supporting both classroom and field-based training.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Accelerated Time to Productivity",
          description:
            "On-the-job AR-guided training and structured digital workflows reduce onboarding time by 40–60%, helping new hires become productive 30–50% faster than traditional methods.",
        },
        {
          title: "Zero Knowledge Loss",
          description:
            "Digitizing expert processes ensures up to 100% of critical know-how is captured and retained within the organization, even as teams transition.",
        },
        {
          title: "Consistent, SOP-Aligned Training",
          description:
            "Standardized digital workflows maintain 100% alignment with operating procedures across sites and shifts increasing operational efficiency & reducing Turn-Around Time (TAT). With AVA’s (AI Virtual Assistance) support technician efficiency improves by 20–30%.",
        },
        {
          title: "Greater Skill Confidence in the Field",
          description:
            "AVA’s (AI Virtual Assistant) assistance and live AR expert support at the moment of work, reduce troubleshooting time by 40–60%, enabling technicians to perform accurately with less supervision.",
        },
        {
          title: "Lower Training & Support Costs",
          description:
            "Remote collaboration and digital workflows reduce the need for repeated in-person sessions, while faster access to manuals and SOPs saves 30–50% of time typically spent searching for information.",
        },
        {
          title: "Measurable Competency & Audit Readiness",
          description:
            "Real-time performance tracking and evidence capture provide objective skill validation and compliance-ready documentation.",
        },
      ],
    },
    industry: {
      title: "Built for Industries with Knowledge-Intensive Operations",
      subtitle:
        "UNFOLDXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        { label: "MANUFACTURING", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "AUTOMOTIVE", img: "/images/banner/homePage/ai-industry/automotive.png" },
        { label: "OIL & GAS", img: "/images/banner/homePage/ai-industry/oil_gas.png" },
        { label: "HEALTHCARE", img: "/images/banner/homePage/ai-industry/healthcare.png" },
        { label: "AVIATION (MRO)", img: "/images/banner/homePage/ai-industry/aviation.png" },
        { label: "LOGISTICS", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "CONSTRUCTION", img: "/images/banner/homePage/ai-industry/construction.png" },
        { label: "HOSPITALITY", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "FIELD SERVICE", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "UTILITIES", img: "/images/banner/homePage/ai-industry/logistics.png" },
      ],
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image:
          "/images/usecase/MobilePhone.png",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image:
          "/images/usecase/FromSimple.png",
        title: "FROM SIMPLE HANDHELD DEVICES TO ADVANCED AR WEARABLES",
      },
      deviceC: {
        image:
          "/images/usecase/Scale.png",
        title: "SCALES WITH WORKFORCE SIZE, COMPLEXITY, AND BUDGET",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM TO CAPTURE, TRAIN, AND IMPROVE",
      description1:
        "UnfoldXR unifies knowledge capture, training delivery, real-time guidance, and performance tracking into one continuous system. By embedding AI and augmented reality into everyday work, it transforms learning from a one-time event into an ongoing, measurable capability.",
      description2:
        "This is the future of workforce development — practical, embedded, and built for real operations.",
    },
    finalCTA: {
      title: "Turn expertise into scalable capability.",
      subtitle: "Train faster. Perform better. Retain knowledge.",
    },
  },
  "inspection-compliance": {
    hero: {
      title: "INSPECTION, COMPLIANCE & QUALITY ASSURANCE",
      subtitle: "The Best Incident Is The One That Never Happened.",
      description:
        "UnfoldXR brings AI- and augmented reality-powered intelligence directly into inspection and quality workflows. Stay audit-ready always.",
      image: "/images/usecase/Inspection/Hero-section.png",
    },
    knowledge: {
      title: "WITH UNFOLDXR, MAKE COMPLIANCE STRUCTURED AND AUDIT-READY",
      layout: "stacked",
      items: [
        "Delay in inspection or compliance failure create safety risk, regulatory challenges, and operational hazard",
        "Manual processes like checklists, paper records, and disconnected systems slow inspections",
        "Inconsistent execution leads to missed defects and reactive compliance",
      ],
      footerText:
        "Resulting in audit gaps, penalties, and poor traceability. UnfoldXR unifies the entire lifecycle — assign, inspect, capture, and report, making compliance structured, traceable, and effortless.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      layout: "side-by-side",
      description1:
        "UnfoldXR enables organizations to run inspections with greater precision and lower risk. AI and augmented reality guide frontline teams through structured, context-aware inspection workflows aligned to the asset, regulation, or quality standard.",
      description2:
        "Evidence is captured in real time, reports are generated automatically, and deviations are identified instantly — helping teams stay compliant and audit-ready at all times.",
      description3:
        "With three versions designed for different stages of operational maturity — UnfoldXR Augment, UnfoldXR Empower, and UnfoldXR Edge —",
      description4:
        "organizations can start with standardized digital inspections and scale into AI-driven predictive quality and compliance intelligence.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
        },
      ],
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER INSPECTION, COMPLIANCE & QUALITY ASSURANCE",
      layout: "grid",
      items: [
        {
          title: "INTELLIGENT INSPECTION PLANNING & ROSTERING",
          description:
            "Automatically assign inspections based on compliance schedules, asset criticality, skill levels, and location.",
        },
        {
          title: "CONTEXT-AWARE DIGITAL CHECKLISTS",
          description:
            "Deliver guided, SOP-aligned inspection workflows specific to assets, regulations, and quality standards and enable hands-free inspection.",
        },
        {
          title: "SMART SCAN & ASSET RECOGNITION",
          description:
            "Instantly identify equipment through QR or visual recognition to access inspection history and compliance records.",
        },
        {
          title: "AI-GUIDED VALIDATION (AVA)",
          description:
            "Provide real-time recommendations, flag anomalies, and assist decision-making during inspections.",
        },
        {
          title: "EVIDENCE CAPTURE & AUTO-DOCUMENTATION",
          description:
            "Capture photos, videos, annotations, and notes with automatic generation of compliance-ready reports.",
        },
        {
          title: "GEO-TAGGED & TIME-STAMPED VERIFICATION",
          description:
            "Ensure inspections are completed at the correct location with verifiable digital audit trails.",
        },
        {
          title: "AR-BASED MEASUREMENT & VISUAL GUIDANCE",
          description:
            "Enable precise measurements and overlay-based inspection assistance to reduce manual errors.",
        },
        {
          title: "DEVIATION REPORTING & ESCALATION",
          description:
            "Instantly report faults or compliance gaps to trigger corrective workflows.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description:
            "Conduct inspections seamlessly in low or no-connectivity environments.",
        },
        {
          title: "CONTINUOUS QUALITY INTELLIGENCE",
          description:
            "Every inspection strengthens future workflows, identifies patterns, and improves preventive controls.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description:
            "Accessible on mobile phones, tablets, and smart glasses, from simple devices to advanced AR wearables.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Higher Compliance Accuracy",
          description:
            "AI-guided checklists and built-in SOP validation reduce inspection errors by up to 50% and cut missed defects by 50-70%. Hands-free AR inspections also reduce inspection time by 30-50%.",
        },
        {
          title: "Audit-Ready Documentation",
          description:
            "Real-time, geo-tagged evidence capture ensures 100% in-field compliance records. Automated reporting reduces documentation time from hours to minutes.",
        },
        {
          title: "Reduced Inspection Time",
          description:
            "Structured workflows and instant asset access reduce inspection duration by 30-40%. Quick Scan and digital records help inspectors find information up to 3x faster, cutting manual search time by 70%.",
        },
        {
          title: "Fewer Compliance Violations",
          description:
            "Predictive insights and standardized inspection controls help prevent 25-30% of recurring non-conformities, reducing regulatory exposure and corrective actions.",
        },
        {
          title: "Consistent Quality Across Locations",
          description:
            "Digitally standardized inspection processes ensure uniform quality benchmarks across sites, shifts, and teams, eliminating variability in execution.",
        },
        {
          title: "Lower Operational Risk",
          description:
            "Real-time deviation alerts and proactive escalation workflows minimize regulatory penalties, safety risks, and operational disruptions before they escalate.",
        },
      ],
    },
    industry: {
      title: "Built for Industries with High Compliance & Quality Standards",
      subtitle: "UNFOLDXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        { label: "MANUFACTURING", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "PHARMACEUTICALS", img: "/images/banner/homePage/ai-industry/healthcare.png" },
        { label: "HEALTHCARE", img: "/images/banner/homePage/ai-industry/healthcare.png" },
        { label: "OIL & GAS", img: "/images/banner/homePage/ai-industry/oil_gas.png" },
        { label: "AVIATION (MRO)", img: "/images/banner/homePage/ai-industry/aviation.png" },
        { label: "CONSTRUCTION", img: "/images/banner/homePage/ai-industry/construction.png" },
        { label: "ENERGY & UTILITIES", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "LOGISTICS", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "AUTOMOTIVE", img: "/images/banner/homePage/ai-industry/automotive.png" },
        { label: "FOOD & BEVERAGE", img: "/images/banner/homePage/ai-industry/logistics.png" },
      ],
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image: "/images/usecase/MobilePhone.png",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM LIGHTWEIGHT INSPECTION DEVICES TO ADVANCED AR SYSTEMS",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "SCALES ACROSS FACILITIES, REGULATORY ENVIRONMENTS, AND OPERATIONAL COMPLEXITY",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM FOR INSPECTION TO COMPLIANCE",
      description1:
        "This is the future of compliance and quality control — where technology handles inspection and compliance intelligently, allowing humans to focus on higher-value work.",
      description2:
        "UnfoldXR unifies inspection workflows, compliance documentation, asset history, and quality analytics into one connected platform. By embedding AI and augmented reality into every verification step, quality becomes proactive, measurable, and built into daily operations.",
    },
    finalCTA: {
      title: "Ensure compliance. Reduce risk. Secure quality.",
      subtitle: "Build inspection intelligence into every operation.",
    },
  },
  "repair-maintenance": {
    hero: {
      title: "REPAIR, MAINTENANCE & ASSET MANAGEMENT",
      subtitle: "The Costliest Downtime Is The One You Didn't Prevent.",
      description:
        "UnfoldXR brings AI- and augmented reality–powered intelligence directly into maintenance operations, reducing downtime and increasing profit.",
      image: "/images/usecase/Maintenance/HeroSection.png",
    },
    knowledge: {
      title: "WITH UNFOLDXR, CHOOSE SMARTER MAINTENANCE FROM PLANNING TO EXECUTION",
      layout: "stacked",
      items: [
        "Poor planning and execution in repair and maintenance increases downtime and costs",
        "Manual coordination, scattered records, and disconnected systems slow planning and execution",
        "Inconsistent processes lead to missed schedules, repeat issues, and reduced efficiency",
      ],
      footerText: "Resulting in downtime, higher costs, and unreliable maintenance outcomes. UnfoldXR unifies the entire lifecycle — plan, assign, execute, and track, delivering faster, more accurate, and consistently standardised maintenance.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      layout: "side-by-side",
      description1:
        "With UnfoldXR, AI and augmented reality touches the 80% workforce at the frontlines who are still not receiving the technological support they need to augment their productivity.",
      description2: "Coordination becomes simpler. Tasks are executed with higher accuracy. Work stays consistent and reliable across sites, shifts, and teams.",
      description3:
        "With three versions designed for different stages of operational maturity - UnfoldXR Augment, UnfoldXR Empower, UnfoldXR Edge - we scale with your requirements.",
      description4:
        "Start where you are today, knowing the platform is ready to grow with you from day one.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
        },
      ],
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER REPAIR, MAINTENANCE AND ASSET MANAGEMENT",
      layout: "grid",
      items: [
        {
          title: "INTELLIGENT TASK PLANNING & ROSTERING",
          description: "Automatically assign and schedule work based on skills, location, priority, and asset criticality.",
        },
        {
          title: "CONTEXT-AWARE TASK EXECUTION",
          description: "Guided SOPs and instructions aligned to the specific asset, location, and task.",
        },
        {
          title: "ASSET HISTORY AT THE MOMENT OF WORK",
          description: "Instant access to past maintenance records, fault logs, and service history on site.",
        },
        {
          title: "INTELLIGENT DIAGNOSTICS (SCAN MODE)",
          description: "Real-time issue identification with recommended actions during maintenance and repair.",
        },
        {
          title: "AI-GUIDED ASSISTANCE (AVA)",
          description: "Moment-of-work AI-assisted recommendations and decision support that adapt as the task progresses.",
        },
        {
          title: "REMOTE EXPERT COLLABORATION",
          description: "Connect with specialists via live audio, video, and visual guidance when escalation is needed.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description: "Continue guided work even in low or no-connectivity environments.",
        },
        {
          title: "EVIDENCE CAPTURE & REPORTING",
          description: "Capture photos, videos, and notes, with automatic maintenance reports generated at completion.",
        },
        {
          title: "CONTINUOUS KNOWLEDGE BUILDING",
          description: "Every completed task strengthens SOPs and improves future maintenance outcomes.",
        },
        {
          title: "CREATOR MODE",
          description: "Capture expert tasks once. UnfoldXR auto-creates SOPs and training workflows.",
        },
        {
          title: "DEVICE-AGNOSTIC",
          description: "Runs on mobiles, tablets, and smart glasses, from basic to advanced AR devices.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Reduced Unplanned Downtime",
          description: "Smart CMMS integration routes tickets with near 100% accuracy, while digital machine profiles and predictive alerts help prevent 25–30% of unexpected failures.",
        },
        {
          title: "Higher First-Time Fix Rates",
          description: "AI-guided workflows reduce errors and rework by up to 50%, improving first-time-right performance across teams.",
        },
        {
          title: "Faster Maintenance Turnaround",
          description: "Live AR expert support cuts troubleshooting time by 40–60%, accelerating issue resolution and restoring operations faster.",
        },
        {
          title: "Lower Dependency On On-Site Experts",
          description: "Remote collaboration and AI assistance reduce physical expert visits while maintaining high-quality outcomes.",
        },
        {
          title: "Improved Compliance And Audit Readiness",
          description: "Automatic maintenance capture creates real-time, compliance-ready logs with 100% documentation accuracy.",
        },
        {
          title: "Better Utilisation Of Skilled Technicians",
          description: "AI productivity insights improve technician efficiency by 20–30%, ensuring the right skills are applied where they create the most value.",
        },
      ],
    },
    industry: {
      title: "Built for Industries with Asset-Intensive Operations",
      subtitle: "UNFOLDXR enhances maintenance operations & real-time asset management",
      customIndustries: [
        { label: "AUTOMOTIVE", img: "/images/banner/homePage/ai-industry/automotive.png" },
        { label: "OIL & GAS", img: "/images/banner/homePage/ai-industry/oil_gas.png" },
        { label: "HEALTHCARE", img: "/images/banner/homePage/ai-industry/healthcare.png" },
        { label: "FIELD SERVICE SUPPORT", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "AVIATION (MRO)", img: "/images/banner/homePage/ai-industry/aviation.png" },
        { label: "CONSTRUCTION", img: "/images/banner/homePage/ai-industry/construction.png" },
        { label: "HOSPITALITY", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "LOGISTICS", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "INSURANCE", img: "/images/banner/homePage/ai-industry/logistics.png" },
      ],
    },
    deviceDeployment: {
      title: "DEVICE & DEPLOYMENT",
      deviceA: {
        image: "/images/usecase/MobilePhone.png",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM SIMPLE WEARABLES TO HIGH-END DEVICES",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "SCALES WITH TASK COMPLEXITY AND BUDGET",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM TO PLAN, REPAIR, AND MAINTAIN",
      description1:
        "UnfoldXR unifies task execution, knowledge, collaboration, and documentation into one platform. By embedding Augmented Reality and AI into everyday work, it augments human capability at the moment of execution.",
      description2:
        "This is the future of maintenance - faster, more consistent, and less dependent on where experts are physically located.",
    },
    finalCTA: {
      title: "KEEP YOUR CRITICAL ASSETS RUNNING WITH CLARITY AND CONTROL.",
      subtitle: "",
    },
  },
  "field-inspection": {
    hero: {
      title: "FIELD SERVICE, TROUBLESHOOTING & REMOTE COLLABORATION",
      subtitle: "The Perfect Human–AI Collaboration In The Field.",
      description:
        "UnfoldXR brings AI- and augmented reality powered intelligence directly to field service operations anytime, anywhere.",
      image: "/images/usecase/Field_inspection/HeroSection.png",
    },
    knowledge: {
      title: "REDUCE SERVICE DELAYS WITH SMARTER FIELD SERVICE",
      layout: "stacked",
      items: [
        "Field service and troubleshooting time-critical functions. Delays, misdiagnosis, or incomplete fixes directly impact customer satisfaction, asset uptime, and operational cost.",
        "Yet in most organizations, field teams still depend on phone calls, fragmented documentation, delayed escalations, and manual reporting. While the problems are distributed, expertise is centralized. The gap between the two creates downtime, repeat visits, and rising service costs.",
        "Unlike traditional support tools that solve only one part of the problem, UnfoldXR brings intelligence across the entire service lifecycle — from ticket assignment and on-site diagnostics to expert escalation and automated reporting.",
      ],
      footerText: "",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      layout: "side-by-side",
      description1:
        "UnfoldXR brings AI and augmented reality to the 80% deskless workforce operating in the field. Instead of relying on memory or delayed guidance, technicians receive structured, real-time support at the moment of troubleshooting.",
      description2: "",
      description3:
        "From escalations to collaboration to execution - the whole process becomes seamless. Knowledge and expert advice becomes accessible at the moment of work. With three versions designed for different stages of operational maturity",
      description4:
        "organizations can start with guided digital workflows and scale into intelligent, AI-driven field operations as complexity grows.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
        },
      ],
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER TROUBLESHOOTING & FIELD SERVICE",
      layout: "grid",
      items: [
        {
          title: "INTELLIGENT TICKET ROUTING & ROSTERING",
          description: "Automatically assign service tickets based on skills, availability, priority, and location.",
        },
        {
          title: "CONTEXT-AWARE FIELD GUIDANCE",
          description: "Deliver step-by-step SOPs aligned to the specific asset and fault condition on site.",
        },
        {
          title: "SMART SCAN DIAGNOSTICS",
          description: "Scan QR codes or assets to instantly access machine history, fault logs, and guided troubleshooting paths.",
        },
        {
          title: "AI-GUIDED ASSISTANCE (AVA)",
          description: "Provide adaptive recommendations and decision support as the technician works through the issue.",
        },
        {
          title: "LIVE REMOTE EXPERT COLLABORATION",
          description: "Enable one-tap connection to specialists via audio, video, screen sharing, and AR visual guidance.",
        },
        {
          title: "FULL ASSET & SERVICE HISTORY ACCESS",
          description: "Ensure technicians have real-time visibility into past repairs and maintenance data.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description: "Continue guided diagnostics and documentation even in low-connectivity environments.",
        },
        {
          title: "EVIDENCE CAPTURE & AUTOMATED REPORTING",
          description: "Capture photos, videos, and notes with AI-generated service reports filed automatically.",
        },
        {
          title: "CONTINUOUS KNOWLEDGE IMPROVEMENT",
          description: "Every resolved case strengthens workflows and improves future troubleshooting accuracy.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description: "Runs seamlessly on mobile devices, tablets, and smart glasses.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Reduced Mean Time To Repair (MTTR)",
          description: "AI-guided diagnostics and structured troubleshooting workflows accelerate fault identification and resolution. Technicians spend 30–50% less time searching through manuals and SOPs.",
        },
        {
          title: "Higher First-Time Fix Rates",
          description: "Guided service workflows and contextual assistance improve diagnostic accuracy, driving a 20–40% increase in first-time fix rates and reducing unnecessary repeat visits.",
        },
        {
          title: "Lower Escalation & Rework Costs",
          description: "Live AR-based expert collaboration minimizes the need for physical expert dispatch. Organizations report up to 50% fewer repeat visits and reworks, lowering travel and escalation costs.",
        },
        {
          title: "Improved Technician Productivity",
          description: "AI-assisted decision support and optimized scheduling improve field team efficiency by 20–30%, ensuring better workforce utilization and faster service cycles.",
        },
        {
          title: "Reduced Downtime",
          description: "Faster troubleshooting, intelligent workflows, and predictive insights reduce service delays and prevent up to 50% of common operational errors, minimizing overall disruption.",
        },
        {
          title: "Higher Customer Satisfaction",
          description: "Quicker, more accurate resolutions increase service reliability, resulting in 20–30% higher customer satisfaction due to faster turnaround and improved service quality.",
        },
      ],
    },
    industry: {
      title: "ONE AI PLATFORM, ANY INDUSTRY",
      subtitle: "UNFOLDXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        { label: "TELECOMMUNICATIONS", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "UTILITIES", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "OIL & GAS", img: "/images/banner/homePage/ai-industry/oil_gas.png" },
        { label: "HEALTHCARE EQIPMENT", img: "/images/banner/homePage/ai-industry/healthcare.png" },
        { label: "AUTOMOTIVE SERVICE NETWORKS", img: "/images/banner/homePage/ai-industry/automotive.png" },
        { label: "LOGISTICS & WAREHOUSING", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "AVIATION", img: "/images/banner/homePage/ai-industry/aviation.png" },
      ],
    },
    deviceDeployment: {
      title: "DEVICE & DEPLOYMENT",
      deviceA: {
        image: "/images/usecase/MobilePhone.png",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM LIGHTWEIGHT FIELD-READY DEVICES TO ADVANCED AR SYSTEMS",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "SCALES ACROSS REGIONS, TECHNICIAN VOLUMES, AND SERVICE COMPLEXITY",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM FROM TICKET TO RESOLUTION",
      description1:
        "UnfoldXR unifies diagnostics, expert collaboration, field execution, and reporting into one continuous system. By embedding AI and augmented reality into troubleshooting workflows, it removes delays between field teams and central expertise.",
      description2:
        "This is the future of field service faster resolution, smarter collaboration, and fewer repeat visits.",
    },
    finalCTA: {
      title: "Resolve issues the first time. Every time.",
      subtitle: "Empower your field teams with intelligence at the moment of service.",
    },
  },
};